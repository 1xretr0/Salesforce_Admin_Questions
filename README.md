# Salesforce Certification Exam Simulator

An interactive practice exam simulator covering two Salesforce certifications:

- **Platform Administrator (PLAT-ADMN-201)** — 150 real exam-style questions, 7 sections
- **Platform App Builder** — 351 real exam-style questions, 5 sections

Switch between certifications from a dropdown in the header — each exam gets its own question bank, section weighting, timer, and passing score, with detailed explanations and two study modes.

## ✨ Features

### 📚 Comprehensive Question Banks
- **150 Admin questions** + **351 App Builder questions**, aligned with each certification's official exam blueprint
- Detailed explanations for every question
- Questions organized by certification section:
  - **Admin (PLAT-ADMN-201)**
    - Configuration and Setup (13%)
    - Object Manager and Lightning App Builder (20%)
    - Sales and Marketing Applications (12%)
    - Service and Support Applications (11%)
    - Productivity and Collaboration (7%)
    - Data and Analytics Management (14%)
    - Automation and Agentforce (16%)
  - **Platform App Builder**
    - Salesforce Fundamentals (18%)
    - Data Modeling and Management (20%)
    - Business Logic and Process Automation (32%)
    - User Interface (17%)
    - App Deployment (13%)

### 🔀 Exam Switcher
- One dropdown in the header swaps the entire app between certifications
- Switching exams resets progress and re-renders the correct sections, timer, and passing score for that exam

### 🎯 Two Learning Modes

**Study Mode**
- Answer questions from the full question bank at your own pace
- Immediate feedback after each submission
- Detailed explanations visible right away
- Track progress by section
- Perfect for learning concepts

**Exam Mode**
- 105-minute timed simulation (authentic exam duration)
- A fresh **weighted 60-question sample** is drawn from the full bank each time you start, proportioned to match the real exam's section weights
- No feedback until completion
- Submit exam to see full results, scored out of 60
- Pass/fail scoring (68% for Admin, 63% for App Builder)
- Per-section performance breakdown

### 🎨 Premium Design
- Salesforce Lightning-inspired interface
- Clean, professional UI with intuitive navigation
- Color-coded feedback (green = correct, red = incorrect)
- Responsive design works on desktop and tablet
- Dark mode

### 🔀 Practice Tools
- Shuffle questions within each section
- Mix up answer order to prevent memorization
- Reset individual sections or entire simulator

## 🚀 Getting Started

### Option 1: Open Locally
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Option 2: Local Web Server
For better compatibility with modern browsers:
```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then navigate to `http://localhost:8000`

There is no password gate — the app loads directly into Study Mode on the Admin exam.

## 📖 How to Use

1. **Pick a certification** using the "Exam" dropdown in the header (Admin 201 or Platform App Builder)
2. **Choose your mode** using the Study/Exam toggle in the header
3. **Navigate sections** using the tab bar (or start with the last tab for full-bank practice)
4. **Select answers** by clicking options (multiple-choice questions allow multiple selections)
5. **Submit** to lock in your answer
6. **Review explanations** (Study Mode only)
7. **Track progress** via the score matrix in the header

### Study Mode Tips
- Work through sections one at a time
- Read explanations carefully even for correct answers
- Use the shuffle feature to test recall vs. recognition
- Aim for 100% completion in each section

### Exam Mode Tips
- Take the full 60-question sample exam in one sitting
- Manage your time (105 minutes ÷ 60 questions ≈ 1:45 per question)
- Mark uncertain answers mentally and review at the end
- Don't submit until you're ready — timer counts down automatically

## 📊 Scoring

| | Admin (PLAT-ADMN-201) | Platform App Builder |
|---|---|---|
| Question bank | 150 | 351 |
| Exam-mode sample size | 60 | 60 |
| Timer | 105 minutes | 105 minutes |
| Passing score | 68% | 63% |

- **Progress Tracking**: Real-time counter shows answered vs. total for the active exam
- **Section Breakdown**: See performance by exam topic area
- **Instant Feedback**: Study mode shows correctness immediately; Exam mode reveals all at once

## 🛠️ Technical Details

### Stack
- **Pure HTML/CSS/JavaScript** — No frameworks, no build process
- **Vanilla JavaScript** — Direct DOM manipulation for maximum compatibility
- **CSS Custom Properties** — Consistent design system with Salesforce branding
- **In-memory state only** — no `localStorage`; progress resets on page reload or exam switch

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### File Structure
```
.
├── index.html                          # Application shell (header, exam switcher, tab nav/content, results modal)
├── app.js                               # Shared engine: EXAMS registry, state, rendering, scoring, event handlers
├── data/
│   ├── admin-questions.js               # ADMIN_CATEGORIES + ADMIN_QUESTIONS (150 questions)
│   └── appbuilder-questions.js          # APPBUILDER_CATEGORIES/SECTIONS + APPBUILDER_QUESTIONS (351 questions)
├── scripts/
│   └── parse_appbuilder.py              # One-off ETL: source markdown -> data/appbuilder-questions.js
├── styles.css                           # Complete styling, including the exam-switcher control
├── Plat-Admn-201.md                     # Admin source questions (reference only)
├── app_builder_practice_questions.md    # App Builder source questions (reference only)
├── CLAUDE.md                            # Developer documentation
└── README.md                            # This file
```

## 🚢 Deployment

Deploy as static files to any hosting provider:

**GitHub Pages**
```bash
# Push to gh-pages branch
git checkout -b gh-pages
git push origin gh-pages
```

**Netlify**
```bash
# Drop folder in Netlify UI or connect repo
```

**AWS S3**
```bash
# Upload files and enable static website hosting
aws s3 sync . s3://your-bucket-name --acl public-read
```

**Vercel**
```bash
vercel
```

No build step or environment variables required—just upload the files.

## 🎓 About the Exams

**Salesforce Certified Platform Administrator** is designed for individuals who have experience configuring and managing Salesforce. This simulator's Admin bank covers:
- User and data management
- Security and access controls
- Standard and custom objects
- Sales and Service Cloud applications
- Workflow automation and process builder
- Reports, dashboards, and analytics

**Exam Details:** 60 scored questions (plus unscored questions on the real exam) · 105 minutes · 68% passing score · proctored online or at a testing center.

**Salesforce Certified Platform App Builder** is designed for individuals who can design, build, and implement custom applications on the Salesforce platform. This simulator's App Builder bank covers:
- Salesforce fundamentals and platform capabilities
- Data modeling and management
- Business logic and process automation
- User interface design
- Application deployment (change sets, packaging, environments)

**Exam Details:** 60 scored questions (plus unscored questions on the real exam) · 105 minutes · 63% passing score · proctored online or at a testing center.

## 📝 License

This is an educational project for certification preparation. All Salesforce trademarks and exam content are property of Salesforce.com, Inc.

## 🤝 Contributing

To add questions or improve functionality:
1. Fork the repository
2. Add questions to `data/admin-questions.js` (`ADMIN_QUESTIONS`) or `data/appbuilder-questions.js` (`APPBUILDER_QUESTIONS`)
3. Follow the existing question object structure (see `CLAUDE.md` for the schema)
4. Submit a pull request with detailed description

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the repository maintainer.

---

**Good luck on your certification! ☁️**
