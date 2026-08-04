# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Salesforce Certified Platform Administrator (PLAT-ADMN-201) Exam Simulator** — a standalone web application with 150 practice questions. It provides two modes:
- **Study Mode**: Answer questions with immediate feedback and explanations
- **Exam Mode**: Timed 105-minute simulation with results shown at the end

The application is a pure client-side implementation with no backend or build process required.

## File Structure

- **[index.html](index.html)** — Single-page application shell with password gate, header, tab navigation, and results modal
- **[app.js](app.js)** — All application logic (~2,500 lines):
  - Question data: All 150 questions with answers and explanations (lines 20-2300+)
  - State management: `state` object tracks answers, mode, timer, scoring
  - Rendering: Functions to generate dashboard, question cards, tabs
  - Event handlers: Answer selection, submission, mode toggle, exam submission
- **[styles.css](styles.css)** — Complete styling (~1,100 lines) with Salesforce-inspired design tokens
- **[Plat-Admn-201.md](Plat-Admn-201.md)** — Source markdown with all 150 questions (reference only, not parsed at runtime)

## Key Data Structures

### Question Object Format
```javascript
{
  id: Number,              // Unique question ID (1-150)
  category: String,        // One of 7 CATEGORIES constants
  text: String,            // Question text
  options: [               // Answer choices
    {letter: "A", text: "..."},
    {letter: "B", text: "..."},
    // ...
  ],
  answer: ["A"],          // Correct answer(s) as array
  multi: Boolean,         // true for multiple-choice questions
  explanation: String     // Detailed explanation of correct answer
}
```

### State Object
```javascript
state = {
  unlocked: Boolean,      // Password gate passed
  mode: "study"|"exam",   // Current mode
  currentTab: Number,     // Active tab index (0-8)
  answers: {              // User answers keyed by question ID
    [qid]: ["A", "B"]    // Selected letter(s)
  },
  submitted: Set,         // Question IDs that have been submitted
  shuffledQuestions: {},  // Shuffled order per tab
  timerInterval: null,    // Interval ID for exam timer
  timeRemaining: 6300     // Seconds remaining in exam mode
}
```

## Categories & Tab Structure

Questions are organized into 7 certification exam sections plus a dashboard and full simulator:

- **Tab 0**: Dashboard & Study Guide
- **Tab 1**: Configuration and Setup (~13%)
- **Tab 2**: Object Manager and Lightning App Builder (~20%)
- **Tab 3**: Sales and Marketing Applications (~12%)
- **Tab 4**: Service and Support Applications (~11%)
- **Tab 5**: Productivity and Collaboration (~7%)
- **Tab 6**: Data and Analytics Management (~14%)
- **Tab 7**: Automation and Agentforce (~16%)
- **Tab 8**: Full 150-Question Simulator

Each category percentage reflects the actual Salesforce exam weighting.

## Core Functions

### Rendering Pipeline
- `renderTabButtons()` — Creates tab navigation from categories
- `renderDashboard()` — Builds Tab 0 with checklist and study tips
- `renderAllQuizTabs()` — Generates all question tabs (1-8)
- `renderQuizTab(tabIndex, title, questions)` — Renders a single tab with its questions
- `renderQuestionCard(q)` — Creates individual question card HTML

### Answer Flow
1. `selectOption(qid, letter, isMulti)` — Toggles answer selection
2. `submitAnswer(qid)` — Validates and locks in answer
3. `updateScoreMatrix()` — Recalculates global progress/score
4. `updateTabProgress()` — Updates per-tab completion indicators

### Mode Management
- `toggleMode(isExam)` — Switches between study/exam modes
  - Study: Immediate feedback, explanations visible after submit
  - Exam: No feedback, timer starts, all questions unlocked
- `startTimer()` / `stopTimer()` — Manages 105-minute countdown
- `submitExam()` — Ends exam, calculates results, shows modal

### Exam Results
- `showResultsModal(answered, correct, score, passed, sections)` — Displays final results with:
  - Overall score (pass ≥68%)
  - Per-section breakdown
  - Animated circular progress indicator
- `closeResults()` — Reveals all answers with correct/incorrect styling

## Development Workflow

### Running the Application
Simply open [index.html](index.html) in a browser:
```bash
open index.html
```
Or use a local server:
```bash
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

**Password**: The app is password-protected. The password hash is checked via `checkPassword()` using djb2 hash algorithm.

### Making Changes

**To modify questions:**
1. Edit the `QUESTIONS` array in [app.js](app.js:20-2300)
2. Each question must follow the structure above
3. Refresh browser to see changes

**To adjust styling:**
1. Edit design tokens in [styles.css](styles.css:10-50)
2. Modify component styles in their respective sections
3. The design system uses CSS custom properties for consistency

**To change exam parameters:**
1. Timer duration: Search for `6300` (105 minutes in seconds) in [app.js](app.js)
2. Passing score: Search for `68` (68% threshold)
3. Question count: Update loop bounds (currently 150)

### No Build Process
This is intentional — the project is deployment-ready as static files. No npm, webpack, or transpilation required.

## Design System

The CSS uses a Salesforce Lightning Design System-inspired palette:
- Primary: Salesforce blue (`--sf-blue-primary: #0176D3`)
- Correct answers: Green (`--color-correct: #2E844A`)
- Incorrect answers: Red (`--color-incorrect: #C23934`)
- Neutral grays for workspace and card backgrounds

All colors are CSS custom properties defined in `:root` at [styles.css](styles.css:10-50).

## Common Tasks

### Add a new question
```javascript
// In app.js QUESTIONS array
{
  id: 151,
  category: CATEGORIES.CONFIG,
  text: "Your question text here?",
  options: [
    {letter: "A", text: "Option A"},
    {letter: "B", text: "Option B"},
    {letter: "C", text: "Option C"},
    {letter: "D", text: "Option D"}
  ],
  answer: ["B"],
  multi: false,
  explanation: "Detailed explanation of why B is correct."
}
```

### Change password
The password is hashed using djb2. To change it:
1. Compute new hash: `djb2(newPassword)` — function at [app.js](app.js:2275)
2. Update comparison in `checkPassword()` at [app.js](app.js:2280)

### Adjust timer duration
Find `timeRemaining: 6300` in [app.js](app.js) and change to desired seconds (e.g., 7200 for 2 hours).

## State Management Pattern

The app uses a simple global `state` object with localStorage persistence:
- Answers are saved to `localStorage` on each selection
- Page refresh preserves user progress
- State keys: `"sf-exam-state"` for answers, `"sf-exam-submitted"` for completed questions

No framework (React, Vue, etc.) is used — this is vanilla JavaScript with direct DOM manipulation.

## Testing Locally

There are no automated tests. Manual testing workflow:
1. Open in browser
2. Enter password
3. Test both modes:
   - Study: Submit answers, verify explanations appear, check scoring
   - Exam: Start timer, answer questions, submit exam, review results modal
4. Test tab shuffling with "Shuffle Questions" button
5. Verify localStorage persistence by refreshing mid-session

## Deployment

Deploy as static files to any web host:
- GitHub Pages: Push to `gh-pages` branch
- Netlify/Vercel: Drop folder or connect repo
- S3: Upload files and enable static website hosting

No environment variables or build steps required.
