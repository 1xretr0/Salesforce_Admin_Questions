// ============================================================
// Salesforce Certification Exam Simulator — Core Application Logic
// Multi-exam engine: question data lives in data/*.js, loaded before
// this file. This module renders whichever exam is "active" and knows
// nothing about a specific certification's question content.
// ============================================================

"use strict";

// ---------- Exam Registry ----------
// Each exam bundles its question bank, category taxonomy, tab layout,
// and scoring parameters. Adding a new exam = adding a new entry here
// (plus a data/<exam>-questions.js file) — no other code changes needed.
const EXAMS = {
  admin: {
    id: "admin",
    icon: "☁️",
    name: "Salesforce Admin",
    fullName: "Salesforce Certified Platform Administrator (PLAT-ADMN-201)",
    subtitle: "PLAT-ADMN-201",
    questions: ADMIN_QUESTIONS,
    categories: ADMIN_CATEGORIES,
    examCount: 60,
    timerMinutes: 105,
    passingScore: 68,
    tabs: [
      { key: null, label: "Dashboard", icon: "📊" },
      { key: ADMIN_CATEGORIES.CONFIG, label: "Config & Setup", weight: 15, desc: "Company settings, user setup, security" },
      { key: ADMIN_CATEGORIES.OBJECT, label: "Object Manager", weight: 15, desc: "Objects, fields, page layouts, record types" },
      { key: ADMIN_CATEGORIES.SALES, label: "Sales & Marketing", weight: 10, desc: "Leads, opportunities, campaigns" },
      { key: ADMIN_CATEGORIES.SERVICE, label: "Service & Support", weight: 10, desc: "Cases, entitlements, escalation" },
      { key: ADMIN_CATEGORIES.PRODUCTIVITY, label: "Productivity", weight: 10, desc: "Chatter, mobile, AppExchange" },
      { key: ADMIN_CATEGORIES.DATA, label: "Data & Analytics", weight: 17, desc: "Reports, dashboards, data tools" },
      { key: ADMIN_CATEGORIES.AUTOMATION, label: "Automation", weight: 23, desc: "Flow, approvals, AI agents" },
      { key: "FULL", label: "Full Exam", icon: "🎯" }
    ]
  },
  appbuilder: {
    id: "appbuilder",
    icon: "🧩",
    name: "Platform App Builder",
    fullName: "Salesforce Certified Platform App Builder",
    subtitle: "App Builder",
    questions: APPBUILDER_QUESTIONS,
    categories: APPBUILDER_CATEGORIES,
    examCount: 60,
    timerMinutes: 105,
    passingScore: 63,
    tabs: [
      { key: null, label: "Dashboard", icon: "📊" },
      { key: APPBUILDER_CATEGORIES.SALESFORCE_FUNDAMENTALS, label: "Fundamentals", weight: 18, desc: "Declarative vs. programmatic, sharing & security, reports" },
      { key: APPBUILDER_CATEGORIES.DATA_MODELING_AND_MANAGEMENT, label: "Data Modeling", weight: 20, desc: "Data model design, relationships, field types, data import/export" },
      { key: APPBUILDER_CATEGORIES.BUSINESS_LOGIC_AND_PROCESS_AUTOMATION, label: "Business Logic", weight: 32, desc: "Formulas, roll-ups, validation rules, Flow, approvals, Agentforce" },
      { key: APPBUILDER_CATEGORIES.USER_INTERFACE, label: "User Interface", weight: 17, desc: "UI customization, Lightning components, mobile experience" },
      { key: APPBUILDER_CATEGORIES.APP_DEPLOYMENT, label: "App Deployment", weight: 13, desc: "Sandboxes, change sets, packages, deployment planning" },
      { key: "FULL", label: "Full Exam", icon: "🎯" }
    ]
  }
};

let activeExam = EXAMS.admin;

// ---------- App State ----------
const state = {
  activeTab: 0,
  mode: "study", // "study" | "exam"
  answers: {},    // { questionId: [selectedLetters] }
  submitted: {},  // { questionId: true }
  timerInterval: null,
  timerSeconds: activeExam.timerMinutes * 60,
  examSubmitted: false,
  examQuestions: null // the sampled question set in play while mode === "exam"
};

// ---------- DOM References ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
// Scoped to the visible tab pane — avoids collisions when the same
// question id is rendered into both a category tab and the Full Exam tab.
const $active = (sel) => document.querySelector(`.tab-pane.active ${sel}`);
const $$active = (sel) => document.querySelectorAll(`.tab-pane.active ${sel}`);

function lastTabIndex() {
  return activeExam.tabs.length - 1;
}

function currentQuestionSet() {
  return state.mode === "exam" && state.examQuestions ? state.examQuestions : activeExam.questions;
}

function currentTotal() {
  return currentQuestionSet().length;
}

// ---------- Initialization ----------
document.addEventListener("DOMContentLoaded", () => {
  renderExamSwitcher();
  renderTabButtons();
  renderDashboard();
  renderAllQuizTabs();
  updateScoreMatrix();
  bindEvents();
  setActiveTab(0);
});

// ---------- Exam Switcher ----------
function renderExamSwitcher() {
  const select = $("#exam-select");
  if (!select) return;
  select.innerHTML = Object.values(EXAMS)
    .map((exam) => `<option value="${exam.id}">${exam.icon} ${exam.name}</option>`)
    .join("");
  select.value = activeExam.id;
}

function switchExam(examId) {
  const exam = EXAMS[examId];
  if (!exam || exam.id === activeExam.id) return;

  stopTimer();
  activeExam = exam;
  state.mode = "study";
  state.answers = {};
  state.submitted = {};
  state.examSubmitted = false;
  state.examQuestions = null;
  state.timerSeconds = activeExam.timerMinutes * 60;

  const toggle = $("#mode-toggle");
  if (toggle) toggle.checked = false;
  $(".exam-timer").classList.remove("visible");
  $(".submit-exam-btn").classList.remove("visible");

  const icon = $("#exam-icon");
  const title = $("#exam-title");
  const subtitle = $("#exam-subtitle");
  if (icon) icon.textContent = activeExam.icon;
  if (title) title.textContent = activeExam.name + " Simulator";
  if (subtitle) subtitle.textContent = `${activeExam.subtitle} · ${activeExam.questions.length} Practice Questions`;

  renderTabButtons();
  renderDashboard();
  renderAllQuizTabs();
  updateScoreMatrix();
  setActiveTab(0);
}

// ---------- Tab System ----------
function renderTabButtons() {
  const nav = $(".tab-nav");
  const content = $("#tab-content");
  nav.innerHTML = "";
  content.innerHTML = "";

  activeExam.tabs.forEach((tab, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === 0 ? " active" : "");
    btn.dataset.tab = i;

    let countBadge = "";
    if (tab.key === "FULL") {
      countBadge = `<span class="tab-badge">${activeExam.questions.length}</span>`;
    } else if (tab.key !== null) {
      const count = activeExam.questions.filter((q) => q.category === tab.key).length;
      countBadge = `<span class="tab-badge">${count}</span>`;
    }

    btn.innerHTML = `${tab.icon || ""}${tab.label}${tab.weight ? ` (${tab.weight}%)` : ""}${countBadge}`;
    nav.appendChild(btn);

    const pane = document.createElement("div");
    pane.className = "tab-pane" + (i === 0 ? " active" : "");
    pane.id = `tab-${i}`;
    pane.setAttribute("role", "tabpanel");
    content.appendChild(pane);
  });
}

function setActiveTab(index) {
  state.activeTab = index;
  $$(".tab-btn").forEach((btn, i) => btn.classList.toggle("active", i === index));
  $$(".tab-pane").forEach((pane, i) => pane.classList.toggle("active", i === index));
}

// ---------- Dashboard ----------
function renderDashboard() {
  const pane = document.getElementById("tab-0");
  if (!pane) return;

  const topicList = activeExam.tabs.filter((t) => t.key !== null && t.key !== "FULL");

  pane.innerHTML = `
    <div class="dashboard-grid">
      <div class="dash-card">
        <h2>📋 Exam Overview</h2>
        <p>${activeExam.fullName}</p>
        <div class="stat-row">
          <div class="stat-box">
            <div class="stat-value">${activeExam.examCount}</div>
            <div class="stat-label">Questions</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${activeExam.timerMinutes}</div>
            <div class="stat-label">Minutes</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${activeExam.passingScore}%</div>
            <div class="stat-label">Passing Score</div>
          </div>
        </div>
        <p style="font-size:.8rem;color:var(--text-muted);">Multiple-choice and multi-select format. Study Mode covers all ${activeExam.questions.length} practice questions; Exam Mode simulates the real test with a weighted ${activeExam.examCount}-question sample.</p>
      </div>

      <div class="dash-card">
        <h2>🎯 Your Progress</h2>
        <p>Track your study progress across all sections.</p>
        <div class="stat-row">
          <div class="stat-box">
            <div class="stat-value" id="dash-answered">0</div>
            <div class="stat-label">Answered</div>
          </div>
          <div class="stat-box">
            <div class="stat-value" id="dash-correct">0</div>
            <div class="stat-label">Correct</div>
          </div>
          <div class="stat-box">
            <div class="stat-value" id="dash-score">—</div>
            <div class="stat-label">Score</div>
          </div>
        </div>
      </div>

      <div class="dash-card full-width">
        <h3>📚 Exam Topic Breakdown</h3>
        <p>Check off topics as you study to track your coverage.</p>
        <ul class="topic-checklist">
          ${topicList.map((t) => `
            <li>
              <input type="checkbox" id="chk-${activeExam.id}-${t.key.replace(/\s/g, '-')}">
              <div>
                <strong>${t.key}</strong><br>
                <span style="font-size:.78rem;color:var(--text-muted)">${t.desc}</span>
              </div>
              <span class="topic-weight">${t.weight}%</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `;
}

// ---------- Weighted Exam Sampling ----------
// Picks `activeExam.examCount` questions proportioned by each section's
// exam weight (largest-remainder rounding so the total lands exactly on
// examCount), then shuffles the combined set.
function sampleExamQuestions(exam) {
  const sectionTabs = exam.tabs.filter((t) => t.key !== null && t.key !== "FULL");

  const exactCounts = sectionTabs.map((t) => (exam.examCount * t.weight) / 100);
  const baseCounts = exactCounts.map(Math.floor);
  let remaining = exam.examCount - baseCounts.reduce((a, b) => a + b, 0);

  const remainderOrder = exactCounts
    .map((exact, i) => ({ i, frac: exact - baseCounts[i] }))
    .sort((a, b) => b.frac - a.frac);
  const counts = [...baseCounts];
  for (let k = 0; k < remaining && k < remainderOrder.length; k++) {
    counts[remainderOrder[k].i]++;
  }

  const sample = [];
  sectionTabs.forEach((t, i) => {
    const pool = shuffleArray(exam.questions.filter((q) => q.category === t.key));
    sample.push(...pool.slice(0, Math.min(counts[i], pool.length)));
  });

  // Safety net: if rounding/short sections left us under examCount, backfill
  // from the rest of the bank so the exam always has exactly examCount questions.
  if (sample.length < exam.examCount) {
    const usedIds = new Set(sample.map((q) => q.id));
    const leftover = shuffleArray(exam.questions.filter((q) => !usedIds.has(q.id)));
    sample.push(...leftover.slice(0, exam.examCount - sample.length));
  }

  return shuffleArray(sample);
}

// ---------- Quiz Rendering ----------
function renderAllQuizTabs() {
  const last = lastTabIndex();
  for (let i = 1; i < last; i++) {
    const tab = activeExam.tabs[i];
    const questions = activeExam.questions.filter((q) => q.category === tab.key);
    renderQuizTab(i, tab.key, questions);
  }

  if (state.mode === "exam") {
    state.examQuestions = sampleExamQuestions(activeExam);
    renderQuizTab(last, `Full ${activeExam.examCount}-Question Simulator (Exam Mode)`, state.examQuestions);
  } else {
    const shuffled = shuffleArray([...activeExam.questions]);
    renderQuizTab(last, `Full ${activeExam.questions.length}-Question Simulator`, shuffled);
  }
}

function getTabQuestions(tabIndex) {
  const last = lastTabIndex();
  if (tabIndex === last) {
    return [...currentQuestionSet()];
  }
  const tab = activeExam.tabs[tabIndex];
  return activeExam.questions.filter((q) => q.category === tab.key);
}

window.shuffleTab = function (tabIndex) {
  const last = lastTabIndex();
  const title = tabIndex === last
    ? (state.mode === "exam"
        ? `Full ${activeExam.examCount}-Question Simulator (Exam Mode)`
        : `Full ${activeExam.questions.length}-Question Simulator`)
    : activeExam.tabs[tabIndex].key;
  const questions = getTabQuestions(tabIndex);

  // Reset this section's questions back to un-answered
  questions.forEach((q) => {
    delete state.answers[q.id];
    delete state.submitted[q.id];
  });

  // Shuffle both question order AND answer choices within each question
  const shuffled = shuffleArray([...questions]).map((q) => ({
    ...q,
    options: shuffleArray([...q.options])
  }));

  renderQuizTab(tabIndex, title, shuffled);
  updateScoreMatrix();
  updateTabProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function restoreSubmittedState(tabIndex) {
  const pane = document.getElementById(`tab-${tabIndex}`);
  if (!pane) return;
  const cards = pane.querySelectorAll(".question-card");
  cards.forEach((card) => {
    const qid = parseInt(card.dataset.qid);
    if (!state.submitted[qid]) return;
    const q = activeExam.questions.find((x) => x.id === qid);
    const userAnswers = state.answers[qid] || [];
    const isCorrect = arraysEqual(userAnswers.sort(), q.answer.sort());

    if (state.mode === "study") {
      card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");
      const options = card.querySelectorAll(".option-item");
      options.forEach((opt) => {
        const l = opt.dataset.letter;
        opt.classList.add("disabled");
        opt.setAttribute("aria-disabled", "true");
        if (q.answer.includes(l)) {
          opt.classList.add("correct");
          opt.setAttribute("aria-checked", "true");
        } else if (userAnswers.includes(l)) {
          opt.classList.add("incorrect");
          opt.setAttribute("aria-checked", "false");
        } else {
          opt.setAttribute("aria-checked", "false");
        }
      });
      const btn = card.querySelector(`#submit-${qid}`);
      if (btn) btn.style.display = "none";
      const explanation = card.querySelector(`#explanation-${qid}`);
      if (explanation) explanation.classList.add("visible");
    } else {
      const btn = card.querySelector(`#submit-${qid}`);
      if (btn) {
        btn.textContent = "✓ Saved";
        btn.disabled = true;
        btn.classList.remove("primary");
        btn.classList.add("secondary");
      }
      const options = card.querySelectorAll(".option-item");
      options.forEach((opt) => {
        const l = opt.dataset.letter;
        const isSelected = userAnswers.includes(l);
        opt.classList.toggle("selected", isSelected);
        opt.setAttribute("aria-checked", isSelected ? "true" : "false");
      });
    }
  });
}

function renderQuizTab(tabIndex, title, questions) {
  const pane = document.getElementById(`tab-${tabIndex}`);
  if (!pane) return;

  const shuffleBtn = `<button class="btn-shuffle" onclick="shuffleTab(${tabIndex})" title="Shuffle question order">🔀 Shuffle</button>`;

  pane.innerHTML = `
    <div class="section-header">
      <h2>${title}</h2>
      <div class="section-header-actions">
        ${shuffleBtn}
        <span class="section-progress" id="progress-${tabIndex}">0 / ${questions.length} Answered</span>
      </div>
    </div>
    <div class="quiz-container" id="quiz-${tabIndex}">
      ${questions.map((q) => renderQuestionCard(q)).join("")}
    </div>
  `;
}

function renderQuestionCard(q) {
  const isMulti = q.multi;
  return `
    <div class="question-card" id="qcard-${q.id}" data-qid="${q.id}" tabindex="0" role="group" aria-label="Question ${q.id}">
      <div class="question-header">
        <div class="question-number ${isMulti ? 'multi-select' : ''}">Q${q.id}</div>
        <div class="question-body">
          <div class="question-text">
            ${q.text}
            ${isMulti ? `<span class="multi-badge">Select ${q.answer.length}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="options-list" id="options-${q.id}" role="${isMulti ? 'group' : 'radiogroup'}">
        ${q.options.map(opt => `
          <div class="option-item" data-qid="${q.id}" data-letter="${opt.letter}" data-multi="${isMulti}" role="${isMulti ? 'checkbox' : 'radio'}" tabindex="-1" aria-checked="false" onclick="selectOption(${q.id},'${opt.letter}',${isMulti})">
            <div class="option-radio ${isMulti ? 'checkbox-style' : ''}"></div>
            <div class="option-letter">${opt.letter}</div>
            <div class="option-text">${opt.text}</div>
          </div>
        `).join("")}
      </div>
      <div class="question-actions" id="actions-${q.id}">
        <button class="btn-submit primary" id="submit-${q.id}" disabled onclick="submitAnswer(${q.id})">Submit Answer</button>
      </div>
      <div class="explanation-panel" id="explanation-${q.id}">
        <h4>💡 Explanation</h4>
        <p>${q.explanation}</p>
      </div>
    </div>
  `;
}

// ---------- Answer Selection ----------
function selectOption(qid, letter, isMulti) {
  if (state.submitted[qid] && state.mode === "study") return;

  if (!state.answers[qid]) state.answers[qid] = [];

  const q = activeExam.questions.find((x) => x.id === qid);
  const maxSelect = q.answer.length;

  if (isMulti) {
    const idx = state.answers[qid].indexOf(letter);
    if (idx > -1) {
      state.answers[qid].splice(idx, 1);
    } else {
      if (state.answers[qid].length < maxSelect) {
        state.answers[qid].push(letter);
      } else {
        // Replace the first selection
        state.answers[qid].shift();
        state.answers[qid].push(letter);
      }
    }
  } else {
    state.answers[qid] = [letter];
  }

  // Update UI (scoped to the visible pane — the same question id can also
  // exist, hidden, in a category tab when we're viewing the Full Exam tab)
  const options = $$active(`#options-${qid} .option-item`);
  options.forEach((opt) => {
    const l = opt.dataset.letter;
    const isSelected = state.answers[qid].includes(l);
    opt.classList.toggle("selected", isSelected);
    opt.setAttribute("aria-checked", isSelected ? "true" : "false");
  });

  // Enable submit button
  const btn = $active(`#submit-${qid}`);
  if (btn) btn.disabled = state.answers[qid].length === 0;
}

// ---------- Answer Submission ----------
function submitAnswer(qid) {
  if (state.submitted[qid]) return;

  const q = activeExam.questions.find((x) => x.id === qid);
  const userAnswers = state.answers[qid] || [];

  if (state.mode === "exam") {
    // In exam mode, just mark as submitted silently
    state.submitted[qid] = true;
    const btn = $active(`#submit-${qid}`);
    if (btn) {
      btn.textContent = "✓ Saved";
      btn.disabled = true;
      btn.classList.remove("primary");
      btn.classList.add("secondary");
    }
    updateScoreMatrix();
    updateTabProgress();
    return;
  }

  // Study mode: show feedback
  state.submitted[qid] = true;

  const isCorrect = arraysEqual(userAnswers.sort(), q.answer.sort());
  const card = $active(`#qcard-${qid}`);
  card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");

  // Style options
  const options = $$active(`#options-${qid} .option-item`);
  options.forEach((opt) => {
    const l = opt.dataset.letter;
    opt.classList.add("disabled");
    opt.classList.remove("selected");
    opt.setAttribute("aria-disabled", "true");

    if (q.answer.includes(l)) {
      opt.classList.add("correct");
      opt.setAttribute("aria-checked", "true");
    } else if (userAnswers.includes(l)) {
      opt.classList.add("incorrect");
      opt.setAttribute("aria-checked", "false");
    } else {
      opt.setAttribute("aria-checked", "false");
    }
  });

  // Hide submit button, show explanation
  const btn = $active(`#submit-${qid}`);
  if (btn) btn.style.display = "none";

  const explanation = $active(`#explanation-${qid}`);
  if (explanation) explanation.classList.add("visible");

  updateScoreMatrix();
  updateTabProgress();
}

// ---------- Score Matrix ----------
function updateScoreMatrix() {
  const totalAnswered = Object.keys(state.submitted).length;
  let correctCount = 0;

  Object.keys(state.submitted).forEach((qid) => {
    const q = activeExam.questions.find((x) => x.id === parseInt(qid));
    const userAnswers = state.answers[qid] || [];
    if (q && arraysEqual(userAnswers.sort(), q.answer.sort())) {
      correctCount++;
    }
  });

  const total = currentTotal();
  const score = totalAnswered > 0 ? ((correctCount / totalAnswered) * 100).toFixed(1) : "0.0";
  const passing = parseFloat(score) >= activeExam.passingScore;

  // Update header pills
  const progressPill = $("#pill-progress");
  const scorePill = $("#pill-score");
  const statusPill = $("#pill-status");

  if (progressPill) progressPill.querySelector(".pill-value").textContent = `${totalAnswered}/${total}`;
  if (scorePill) scorePill.querySelector(".pill-value").textContent = `${score}%`;
  if (statusPill) {
    statusPill.querySelector(".pill-value").textContent = passing ? "Passing" : "Not Passing";
    statusPill.className = `score-pill ${passing ? "passing" : "failing"}`;
  }

  // Update dashboard stats
  const dashAnswered = $("#dash-answered");
  const dashCorrect = $("#dash-correct");
  const dashScore = $("#dash-score");

  if (dashAnswered) dashAnswered.textContent = totalAnswered;
  if (dashCorrect) dashCorrect.textContent = correctCount;
  if (dashScore) dashScore.textContent = totalAnswered > 0 ? `${score}%` : "—";
}

function updateTabProgress() {
  const last = lastTabIndex();
  for (let i = 1; i < last; i++) {
    const tab = activeExam.tabs[i];
    const questions = activeExam.questions.filter((q) => q.category === tab.key);
    const answered = questions.filter((q) => state.submitted[q.id]).length;
    const el = $(`#progress-${i}`);
    if (el) el.textContent = `${answered} / ${questions.length} Answered`;
  }
  // Full exam tab
  const fullQuestions = currentQuestionSet();
  const fullAnswered = fullQuestions.filter((q) => state.submitted[q.id]).length;
  const elLast = $(`#progress-${last}`);
  if (elLast) elLast.textContent = `${fullAnswered} / ${fullQuestions.length} Answered`;
}

// ---------- Mode Toggle ----------
function toggleMode(isExam) {
  state.mode = isExam ? "exam" : "study";

  const timer = $(".exam-timer");
  const submitExamBtn = $(".submit-exam-btn");

  // Reset state
  state.answers = {};
  state.submitted = {};
  state.examSubmitted = false;

  if (isExam) {
    state.timerSeconds = activeExam.timerMinutes * 60;

    // Re-render quiz tabs (samples a fresh exam set)
    renderAllQuizTabs();
    updateScoreMatrix();

    // Start timer
    timer.classList.add("visible");
    submitExamBtn.classList.add("visible");
    startTimer();

    // Switch to full exam tab
    setActiveTab(lastTabIndex());
  } else {
    state.examQuestions = null;

    stopTimer();
    timer.classList.remove("visible");
    submitExamBtn.classList.remove("visible");

    renderAllQuizTabs();
    updateScoreMatrix();
    setActiveTab(0);
  }
}

// ---------- Timer ----------
function startTimer() {
  stopTimer();
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    if (state.timerSeconds <= 0) {
      stopTimer();
      submitExam();
    }
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(state.timerSeconds / 3600);
  const mins = Math.floor((state.timerSeconds % 3600) / 60);
  const secs = state.timerSeconds % 60;
  const display = `${hours > 0 ? hours + ':' : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const timerText = $("#timer-text");
  if (timerText) timerText.textContent = display;
}

// ---------- Submit Exam ----------
function submitExam() {
  if (state.examSubmitted) return;
  state.examSubmitted = true;
  stopTimer();

  const examQuestions = currentQuestionSet();

  // Calculate results
  let totalCorrect = 0;
  const sectionResults = {};

  activeExam.tabs
    .filter((t) => t.key !== null && t.key !== "FULL")
    .forEach((t) => {
      sectionResults[t.key] = { total: 0, correct: 0 };
    });

  examQuestions.forEach((q) => {
    sectionResults[q.category].total++;
    const userAnswers = state.answers[q.id] || [];
    if (arraysEqual(userAnswers.sort(), q.answer.sort())) {
      totalCorrect++;
      sectionResults[q.category].correct++;
    }
  });

  const totalAnswered = Object.keys(state.submitted).length;
  const total = examQuestions.length;
  const score = ((totalCorrect / total) * 100).toFixed(1);
  const passed = parseFloat(score) >= activeExam.passingScore;

  // Show results modal
  showResultsModal(totalAnswered, totalCorrect, score, passed, sectionResults, total);
}

function showResultsModal(answered, correct, score, passed, sections, total) {
  const overlay = $(".results-overlay");
  const circumference = 2 * Math.PI * 65;
  const offset = circumference - (parseFloat(score) / 100) * circumference;
  const strokeColor = passed ? "var(--color-correct)" : "var(--color-incorrect)";
  const passingScore = activeExam.passingScore;

  const modal = overlay.querySelector(".results-modal");
  modal.innerHTML = `
    <h2>${passed ? "🎉 Congratulations!" : "📝 Keep Studying!"}</h2>
    <p class="result-subtitle">${passed ? "You passed the practice exam!" : `You didn't reach the ${passingScore}% passing threshold.`}</p>

    <div class="result-score-ring">
      <svg viewBox="0 0 140 140">
        <circle class="ring-bg" cx="70" cy="70" r="65"/>
        <circle class="ring-progress" cx="70" cy="70" r="65"
          stroke="${strokeColor}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"/>
      </svg>
      <div class="ring-text" style="color:${strokeColor}">
        ${score}%
        <span>Score</span>
      </div>
    </div>

    <div class="results-breakdown">
      <div class="result-stat ${passed ? 'pass' : 'fail'}">
        <div class="rs-value">${correct}/${total}</div>
        <div class="rs-label">Correct</div>
      </div>
      <div class="result-stat">
        <div class="rs-value">${answered}</div>
        <div class="rs-label">Answered</div>
      </div>
      <div class="result-stat">
        <div class="rs-value">${total - answered}</div>
        <div class="rs-label">Unanswered</div>
      </div>
      <div class="result-stat ${passed ? 'pass' : 'fail'}">
        <div class="rs-value">${passed ? "PASS" : "FAIL"}</div>
        <div class="rs-label">Status (≥${passingScore}%)</div>
      </div>
    </div>

    <table class="results-section-table">
      <thead>
        <tr><th>Section</th><th>Score</th><th>Result</th></tr>
      </thead>
      <tbody>
        ${Object.entries(sections).map(([name, data]) => {
          const pct = data.total > 0 ? ((data.correct / data.total) * 100).toFixed(0) : 0;
          return `<tr>
            <td>${name}</td>
            <td>${data.correct}/${data.total} (${pct}%)</td>
            <td style="color:${pct >= passingScore ? 'var(--color-correct)' : 'var(--color-incorrect)'}">${pct >= passingScore ? "✓ Pass" : "✕ Needs Work"}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>

    <button class="results-close-btn" onclick="closeResults()">Review Answers</button>
  `;

  overlay.classList.add("visible");
}

function closeResults() {
  $(".results-overlay").classList.remove("visible");

  // Show correct/incorrect feedback on the exam questions just taken
  // (scoped to the active pane — the Full Exam tab — since these ids can
  // also exist, hidden, in a category tab).
  currentQuestionSet().forEach((q) => {
    const userAnswers = state.answers[q.id] || [];
    const isCorrect = arraysEqual(userAnswers.sort(), q.answer.sort());
    const card = $active(`#qcard-${q.id}`);
    if (card) card.classList.add(isCorrect ? "answered-correct" : "answered-incorrect");

    const options = $$active(`#options-${q.id} .option-item`);
    options.forEach((opt) => {
      const l = opt.dataset.letter;
      opt.classList.add("disabled");
      opt.classList.remove("selected");
      if (q.answer.includes(l)) opt.classList.add("correct");
      else if (userAnswers.includes(l)) opt.classList.add("incorrect");
    });

    const explanation = $active(`#explanation-${q.id}`);
    if (explanation) explanation.classList.add("visible");

    const btn = $active(`#submit-${q.id}`);
    if (btn) btn.style.display = "none";
  });
}

// ---------- Event Bindings ----------
function bindEvents() {
  // Tab clicks
  document.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".tab-btn");
    if (tabBtn) {
      setActiveTab(parseInt(tabBtn.dataset.tab));
    }
  });

  // Keyboard navigation for quiz questions
  document.addEventListener("keydown", (e) => {
    const card = e.target.closest(".question-card");
    if (!card) return;

    const option = e.target.closest(".option-item");
    const qid = parseInt(card.dataset.qid);

    // Card focused (not on an option), arrow key → focus first enabled option
    if (!option && (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowLeft")) {
      e.preventDefault();
      const firstOption = card.querySelector(".option-item:not(.disabled)");
      if (firstOption) firstOption.focus();
      return;
    }

    // Option focused
    if (option) {
      const allOptions = Array.from(card.querySelectorAll(".option-item"));
      const enabledOptions = allOptions.filter(opt => !opt.classList.contains("disabled"));
      const currentIndex = enabledOptions.indexOf(option);

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % enabledOptions.length;
        enabledOptions[nextIndex].focus();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + enabledOptions.length) % enabledOptions.length;
        enabledOptions[prevIndex].focus();
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        if (!option.classList.contains("disabled")) {
          const letter = option.dataset.letter;
          const isMulti = option.dataset.multi === "true";
          selectOption(qid, letter, isMulti);
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const submitBtn = card.querySelector(`#submit-${qid}`);
        if (submitBtn && !submitBtn.disabled && submitBtn.style.display !== "none") {
          submitAnswer(qid);
        }
      }
    }
  });

  // Exam switcher
  const examSelect = $("#exam-select");
  if (examSelect) {
    examSelect.addEventListener("change", (e) => {
      switchExam(e.target.value);
    });
  }

  // Mode toggle
  const toggle = $("#mode-toggle");
  if (toggle) {
    toggle.addEventListener("change", (e) => {
      toggleMode(e.target.checked);
    });
  }

  // Submit exam button
  const submitBtn = $(".submit-exam-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to submit the exam? You cannot change answers after submitting.")) {
        submitExam();
      }
    });
  }
}

// ---------- Utility ----------
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, i) => val === b[i]);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
