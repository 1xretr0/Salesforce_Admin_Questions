# Salesforce Admin Exam Simulator

An interactive practice exam simulator for the **Salesforce Certified Platform Administrator (PLAT-ADMN-201)** certification with 150 real exam-style questions, detailed explanations, and two study modes.

## ✨ Features

### 📚 Comprehensive Question Bank
- **150 practice questions** covering all exam topics
- Aligned with official Salesforce exam blueprint (v27.1)
- Detailed explanations for every question
- Questions organized by certification section:
  - Configuration and Setup (13%)
  - Object Manager and Lightning App Builder (20%)
  - Sales and Marketing Applications (12%)
  - Service and Support Applications (11%)
  - Productivity and Collaboration (7%)
  - Data and Analytics Management (14%)
  - Automation and Agentforce (16%)

### 🎯 Two Learning Modes

**Study Mode**
- Answer questions at your own pace
- Immediate feedback after each submission
- Detailed explanations visible right away
- Track progress by section
- Perfect for learning concepts

**Exam Mode**
- 105-minute timed simulation (authentic exam duration)
- No feedback until completion
- Submit exam to see full results
- Pass/fail scoring (68% threshold)
- Per-section performance breakdown

### 🎨 Premium Design
- Salesforce Lightning-inspired interface
- Clean, professional UI with intuitive navigation
- Color-coded feedback (green = correct, red = incorrect)
- Responsive design works on desktop and tablet
- Dark mode optimized

### 💾 Smart Progress Tracking
- Answers automatically saved to browser storage
- Resume where you left off after closing
- Per-tab completion indicators
- Global score tracking across all questions

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

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then navigate to `http://localhost:8000`

### ~~🔐 Access Password~~
~~The simulator is password-protected. Contact the administrator for access credentials.~~

## 📖 How to Use

~~1. **Enter the password** to unlock the simulator~~
2. **Choose your mode** using the Study/Exam toggle in the header
3. **Navigate sections** using the tab bar (or start with Tab 8 for full 150-question practice)
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
- Take the full 150-question exam in one sitting
- Manage your time (just over 40 seconds per question)
- Mark uncertain answers mentally and review at the end
- Don't submit until you're ready—timer counts down automatically

## 📊 Scoring

- **Passing Score**: 68% (102/150 questions)
- **Progress Tracking**: Real-time counter shows answered vs. total
- **Section Breakdown**: See performance by exam topic area
- **Instant Feedback**: Study mode shows correctness immediately; Exam mode reveals all at once

## 🛠️ Technical Details

### Stack
- **Pure HTML/CSS/JavaScript** — No frameworks, no build process
- **Vanilla JavaScript** — Direct DOM manipulation for maximum compatibility
- **CSS Custom Properties** — Consistent design system with Salesforce branding
- **LocalStorage API** — Client-side persistence

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### File Structure
```
.
├── index.html          # Application shell
├── app.js              # All logic & question data (~2,500 lines)
├── styles.css          # Complete styling (~1,100 lines)
├── Plat-Admn-201.md    # Source questions (reference)
├── CLAUDE.md           # Developer documentation
└── README.md           # This file
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

## 🎓 About the Exam

The **Salesforce Certified Platform Administrator** credential is designed for individuals who have experience configuring and managing Salesforce. This simulator covers:
- User and data management
- Security and access controls
- Standard and custom objects
- Sales and Service Cloud applications
- Workflow automation and process builder
- Reports, dashboards, and analytics

**Exam Details:**
- 150 questions (60 scored, 90 unscored)
- 105 minutes
- 68% passing score
- Proctored online or at testing center

## 📝 License

This is an educational project for certification preparation. All Salesforce trademarks and exam content are property of Salesforce.com, Inc.

## 🤝 Contributing

To add questions or improve functionality:
1. Fork the repository
2. Edit `app.js` to add questions to the `QUESTIONS` array
3. Follow the existing question object structure
4. Submit a pull request with detailed description

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the repository maintainer.

---

**Good luck on your Platform Administrator certification! ☁️**
