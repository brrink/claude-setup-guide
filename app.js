/* ============================================================
   Claude Code Setup Guide — App Logic
   ============================================================ */

// === DATA MODEL ===

const GUIDE_DATA = {
  phases: [
    {
      id: 'account-setup',
      title: 'Account & Tool Setup',
      steps: [
        {
          id: 'enterprise-account',
          title: 'Register via Domo AI Hub',
          minutes: 5,
          instructions: [
            'Go to the <a href="https://domo.domo.com/app-studio/1355697240/pages/1604686743" target="_blank"><strong>Domo AI Hub</strong></a> and fill out the Claude Code registration form with your Domo email address.',
            'Click <strong>Request Invite</strong>.',
            'Check your email for an invitation from Claude.',
            'Click <strong>Accept Invitation</strong> in the email.',
            'Complete the sign-up process using your Domo email address.'
          ],
          callouts: [
            { type: 'warning', text: 'You must be on the Domo enterprise Claude account. A free personal Claude account will <strong>not</strong> work with Claude Code.' }
          ],
          commands: [],
          troubleshooting: [],
          verification: ''
        },
        {
          id: 'download-vscode',
          title: 'Download VS Code',
          minutes: 3,
          instructions: [
            'Open the company software portal (Jellyfish / Kanji).',
            'Search for <strong>"Visual Studio Code"</strong> or <strong>"VS Code"</strong>.',
            'Click <strong>Download</strong> and follow the installer prompts.',
            'Once installed, you should see VS Code in your Launchpad (Mac) or Start Menu (Windows).'
          ],
          callouts: [
            { type: 'info', text: 'VS Code is an approved tool and can be downloaded self-service through the company portal. No special request needed.' }
          ],
          commands: [],
          troubleshooting: [
            { symptom: 'Can\'t find VS Code in the software portal', fix: 'Try searching for "Visual Studio" (without "Code"). Make sure you\'re in the approved software section, not the general marketplace.' }
          ],
          verification: 'VS Code opens successfully from your Launchpad or Start Menu.'
        },
        {
          id: 'download-domo-cli',
          title: 'Download Domo Java CLI',
          minutes: 3,
          instructions: [
            'Log in to any Domo instance where you have admin access.',
            'Go to <strong>Admin</strong> (gear icon) &rarr; <strong>More</strong> &rarr; <strong>Tool Downloads</strong>.',
            'Click the download button next to <strong>Domo CLI</strong> (the coffee cup icon). This downloads <code>domo.util.jar</code>.',
            'Save the file somewhere accessible — you\'ll move it to your project folder later.'
          ],
          callouts: [
            { type: 'info', text: 'The Domo CLI is <strong>global</strong> — it\'s not tied to any specific instance. One download works for all your Domo instances.' }
          ],
          commands: [],
          troubleshooting: [
            { symptom: '"Apple could not verify domo.util.jar is free of malware"', fix: 'Go to <strong>System Settings &rarr; Privacy & Security</strong>, scroll to the bottom, and click <strong>"Open Anyway"</strong> next to the domo.util.jar message. You must be in an admin session (use Admin by Request) for this to work.' }
          ],
          verification: 'You have a <code>domo.util.jar</code> file in your Downloads folder and can locate it in Finder.'
        },
        {
          id: 'install-java',
          title: 'Install Java',
          minutes: 5,
          instructions: [
            'Download the latest Java from the <a href="https://www.java.com/en/download/manual.jsp" target="_blank"><strong>Java Downloads page</strong></a> (Java 7 or later is required; latest LTS recommended).',
            'Run the installer — on Mac, double-click the <code>.dmg</code> file and follow the prompts.',
            'You may need to start an <strong>Admin by Request</strong> session before the installer will complete.',
            'Verify the installation by running the command below in your terminal.'
          ],
          callouts: [
            { type: 'warning', text: 'On macOS, the Java installer often requires elevated permissions. Open <strong>Admin by Request</strong> (Cmd+Space &rarr; type "Admin by Request") and start an admin session <em>before</em> running the installer.' }
          ],
          commands: [
            { label: 'Verify Java', cmd: 'java -version', output: 'java version "21.0.x" 2024-xx-xx LTS\nJava(TM) SE Runtime Environment (build 21.0.x+xx-LTS-xxx)\nJava HotSpot(TM) 64-Bit Server VM (build 21.0.x+xx-LTS-xxx, mixed mode, sharing)' }
          ],
          troubleshooting: [
            { symptom: 'Java installer is blocked by macOS', fix: 'Use <strong>Admin by Request</strong> to start an admin session first. Put "Installing development tools" as the reason. Then retry the installer.' },
            { symptom: '"java: command not found" after installing', fix: 'Close your terminal completely and open a new one. The PATH update takes effect in new sessions.' }
          ],
          verification: 'Running <code>java -version</code> in a new terminal window shows a version number (21.x or later).'
        }
      ]
    },
    {
      id: 'vscode-config',
      title: 'VS Code Configuration',
      steps: [
        {
          id: 'open-project-folder',
          title: 'Create & Open Project Folder',
          minutes: 2,
          instructions: [
            'Create a new folder on your computer for Claude projects. A common choice is a folder called <strong>Claude</strong> in your home directory or Documents.',
            'Open VS Code.',
            'Click <strong>File &rarr; Open Folder</strong> (or use the welcome screen) and select the folder you just created.',
            'Open Finder, locate the <code>domo.util.jar</code> you downloaded earlier, and <strong>drag it into the VS Code file explorer</strong> (the left panel). This copies it into your project folder.'
          ],
          callouts: [],
          commands: [
            { label: 'Create folder (optional — you can also do this in Finder)', cmd: 'mkdir -p ~/Claude', output: '' }
          ],
          troubleshooting: [],
          verification: 'VS Code shows your project folder in the left panel, and <code>domo.util.jar</code> appears in the file list.'
        },
        {
          id: 'install-claude-extension',
          title: 'Install Claude Code Extension',
          minutes: 3,
          instructions: [
            'In VS Code, click the <strong>Extensions</strong> icon in the left sidebar (the four-squares icon).',
            'Search for <strong>"Claude Code"</strong>.',
            'Click <strong>Install</strong> on the top result (called "Claude Code" or "Claude for VS Code").',
            'After installation, you\'ll see a Claude icon appear in your sidebar.',
            'Click the Claude icon to open the Claude panel.',
            '<strong>Important:</strong> To authenticate, click the <strong>middle/console button</strong> — NOT the top button. The top button requires a personal Max/Pro subscription.'
          ],
          callouts: [
            { type: 'danger', text: 'Do NOT click the top authentication button — it will ask for a Max or Pro subscription you don\'t have. Use the <strong>middle/console button</strong> to authenticate with your enterprise account.' }
          ],
          commands: [],
          troubleshooting: [
            { symptom: '"You need a Max or Pro subscription" error', fix: 'You clicked the wrong button. Look for the middle or "console" authentication button, not the top one. The enterprise auth uses a different flow.' }
          ],
          verification: 'The Claude icon appears in your VS Code sidebar, and you can open a new Claude session without subscription errors.'
        },
        {
          id: 'install-notifier',
          title: 'Install Claude Notifier Extension',
          optional: true,
          minutes: 1,
          instructions: [
            'In VS Code Extensions, search for <strong>"Claude Notifier"</strong>.',
            'Click <strong>Install</strong> on the top result.',
            'That\'s it — no configuration needed.'
          ],
          callouts: [
            { type: 'info', text: 'This extension is optional but highly recommended. Claude runs tasks independently and doesn\'t natively notify you when it\'s done. This extension sends a desktop notification when Claude finishes, so you can multitask without checking back constantly.' }
          ],
          commands: [],
          troubleshooting: [],
          verification: 'When Claude finishes a task, you see a desktop notification pop up.'
        }
      ]
    },
    {
      id: 'prerequisites',
      title: 'Prerequisites for Skills',
      steps: [
        {
          id: 'install-homebrew',
          title: 'Install Homebrew',
          minutes: 5,
          instructions: [
            'Open a <strong>terminal</strong> (Cmd+Space &rarr; type "Terminal"). You\'ll need an admin session for this — open <strong>Admin by Request</strong> first.',
            'Copy and paste the Homebrew install command below into your terminal and press Enter.',
            'When prompted for your password, type it and press Enter. <strong>The terminal will not show any characters as you type</strong> — this is normal security behavior.',
            'The installation may take 1-2 minutes.',
            'After it finishes, Homebrew will print 2-3 lines that you need to run to add it to your PATH. <strong>Copy those lines from your terminal output</strong> (they start with <code>echo</code> and <code>eval</code>) and paste them back into the terminal.',
            'Verify the installation with the verification command below.'
          ],
          callouts: [
            { type: 'warning', text: 'You need an active <strong>Admin by Request</strong> session to install Homebrew. Start one before running the install command.' },
            { type: 'info', text: 'The post-install commands (the echo/eval lines) are unique to your machine. Copy them from <em>your</em> terminal output — don\'t use someone else\'s.' }
          ],
          commands: [
            { label: 'Install Homebrew', cmd: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"', output: '==> Checking for `sudo` access (which may request your password)...\nPassword:\n==> This script will install:\n/opt/homebrew/bin/brew\n...\n==> Installation successful!\n==> Next steps:\n- Run these commands in your terminal to add Homebrew to your PATH:\n    echo >> ~/.zprofile\n    echo \'eval "$(/opt/homebrew/bin/brew shellenv)"\' >> ~/.zprofile\n    eval "$(/opt/homebrew/bin/brew shellenv)"' },
            { label: 'Verify Homebrew', cmd: 'brew help', output: 'Example usage:\n  brew search TEXT|/REGEX/\n  brew info [FORMULA|CASK...]\n  brew install FORMULA|CASK...\n  brew update\n...' }
          ],
          troubleshooting: [
            { symptom: 'Password doesn\'t show when I type', fix: 'This is normal terminal behavior — it hides password characters for security. Just type your password and press Enter.' },
            { symptom: 'Permission denied or install fails', fix: 'Make sure you started an <strong>Admin by Request</strong> session before running the install. Type "Admin by Request" in Spotlight (Cmd+Space) to start one.' },
            { symptom: '"brew: command not found" after install', fix: 'You need to run the post-install commands that Homebrew printed. Scroll up in your terminal to find the lines starting with <code>echo</code> and <code>eval</code>, copy them, and run them. Then try <code>brew help</code> again.' }
          ],
          verification: 'Running <code>brew help</code> prints a list of Homebrew commands.'
        },
        {
          id: 'install-fnm',
          title: 'Install FNM (Fast Node Manager)',
          minutes: 2,
          instructions: [
            'In your terminal, run the command below to install FNM via Homebrew.',
            'FNM is a fast, lightweight Node.js version manager. It lets you install and switch between different Node versions.'
          ],
          callouts: [],
          commands: [
            { label: 'Install FNM', cmd: 'brew install fnm', output: '==> Downloading https://ghcr.io/v2/homebrew/core/fnm/...\n==> Installing fnm\n==> Pouring fnm--x.x.x.arm64_sonoma.bottle.tar.gz\n🍺  /opt/homebrew/Cellar/fnm/x.x.x: xx files, x.xMB' }
          ],
          troubleshooting: [
            { symptom: '"brew: command not found"', fix: 'Go back to the Homebrew step and make sure you ran the post-install commands (the echo/eval lines).' }
          ],
          verification: 'The install completes without errors.'
        },
        {
          id: 'install-node',
          title: 'Install Node.js & NPM',
          minutes: 3,
          instructions: [
            'Run the two commands below to set up FNM\'s environment and install the latest LTS version of Node.js.',
            'After installing, <strong>close your terminal completely and open a new one</strong>.',
            'In the new terminal, verify the installation with the verification commands.'
          ],
          callouts: [
            { type: 'warning', text: 'After installing Node via FNM, you <strong>must</strong> close your terminal and open a fresh one. New packages aren\'t recognized until you start a new terminal session.' }
          ],
          commands: [
            { label: 'Set up FNM environment', cmd: 'eval "$(fnm env)"', output: '' },
            { label: 'Install Node.js (latest LTS)', cmd: 'fnm install --lts', output: 'Installing Node vXX.x.x (arm64)\ninstalled successfully' },
            { label: 'Verify Node (run in NEW terminal)', cmd: 'node -v', output: 'v22.x.x' },
            { label: 'Verify NPM', cmd: 'npm -v', output: '10.x.x' }
          ],
          troubleshooting: [
            { symptom: '"node: command not found" after installing', fix: '<strong>Close your terminal completely</strong> (Cmd+Q, not just closing the tab) and open a brand new terminal. The PATH needs to refresh. Then try <code>node -v</code> again.' },
            { symptom: 'Still not found after reopening terminal', fix: 'Run <code>eval "$(fnm env)"</code> first, then try <code>node -v</code>. You may also need to add the fnm env line to your shell profile (~/.zshrc or ~/.zprofile).' },
            { symptom: '"npx: command not found"', fix: 'Same fix — close/reopen terminal. NPM (and npx) come bundled with Node, so if node works, npx should too.' }
          ],
          verification: 'Running <code>node -v</code> shows a version (v22.x.x or similar) and <code>npm -v</code> shows a version (10.x.x or similar).'
        }
      ]
    },
    {
      id: 'skills-install',
      title: 'Skills Installation',
      steps: [
        {
          id: 'install-skills',
          title: 'Install Domo Skills',
          minutes: 3,
          instructions: [
            'Open the <strong>integrated terminal in VS Code</strong> (Terminal &rarr; New Terminal, or Ctrl+`).',
            'Run the skills install command below (from the <a href="https://github.com/stahura/domo-ai-vibe-rules" target="_blank"><strong>Domo AI Vibe Rules repo</strong></a>). When prompted, press <strong>Y</strong> to confirm.',
            'The installer will find all available skills and install them to your Claude agents.',
            'Skills are installed into the <code>~/.claude/</code> hidden folder on your system.'
          ],
          callouts: [
            { type: 'info', text: 'The <code>~/.claude/</code> folder is hidden by default. In Finder, press <strong>Cmd+Shift+.</strong> to toggle hidden files.' }
          ],
          commands: [
            { label: 'Install Domo skills', cmd: 'npx skills', output: 'Need to install the following packages:\n  skills\nOk to proceed? (y) y\n\nFound XX skills\nInstalling to XX agents...\n✓ Installed skill-1 to agent-1\n✓ Installed skill-2 to agent-2\n...\nDone!' }
          ],
          troubleshooting: [
            { symptom: '"npx: command not found"', fix: 'Make sure Node/NPM are installed (Step 10). Close and reopen your terminal, then try again.' },
            { symptom: 'Install fails or hangs', fix: 'Check your internet connection. The installer downloads skills from the <a href="https://github.com/stahura/domo-ai-vibe-rules" target="_blank">GitHub repo</a>. If you\'re on VPN, try toggling it.' }
          ],
          verification: 'The terminal shows "Done!" with a summary of skills installed.'
        },
        {
          id: 'verify-skills',
          title: 'Verify Skills in Claude',
          minutes: 2,
          instructions: [
            'Open a new Claude session in VS Code (click the Claude icon in the sidebar).',
            'Type the prompt below and send it.',
            'Claude should respond with a list of skills, including both general skills and <strong>Domo-specific platform skills</strong> (card creation, dataset querying, App Studio, etc.).'
          ],
          callouts: [],
          commands: [
            { label: 'Prompt to test skills', cmd: 'What skills do you have? List all Domo-specific skills.', output: 'I have access to the following skills:\n\n**General Skills:**\n- ...\n\n**Domo Platform Skills:**\n- card-creation: Create and validate Domo cards...\n- dataset-query: Query datasets...\n- app-studio: Build App Studio pages...\n- manifest: Configure manifest mappings...\n- beast-mode-creation: Create beast modes...\n...and more' }
          ],
          troubleshooting: [
            { symptom: 'Claude doesn\'t list any Domo skills', fix: 'Verify the skills folder exists at <code>~/.claude/skills/</code>. If it\'s empty or missing, re-run <code>npx skills</code> from your VS Code terminal.' },
            { symptom: 'Claude lists some but not all skills', fix: 'Run <code>npx skills</code> again — it will update/install any missing skills.' }
          ],
          verification: 'Claude lists Domo-specific skills like card-creation, dataset-query, app-studio, etc.'
        },
        {
          id: 'install-rules',
          title: 'Install Rules',
          minutes: 3,
          instructions: [
            'Rules are separate from skills and must be installed manually. Go to the <a href="https://github.com/stahura/domo-ai-vibe-rules" target="_blank"><strong>Domo AI Vibe Rules repo</strong></a>.',
            'Navigate to the <strong>rules/</strong> folder in the repo.',
            'Download each rule file.',
            'Place the rule files into <code>~/.claude/rules/</code> — this folder should be a peer (sibling) of the <code>~/.claude/skills/</code> folder.',
            'That\'s it — rules are loaded automatically in every Claude session.'
          ],
          callouts: [
            { type: 'info', text: '<strong>Rules vs Skills:</strong> Rules are always present in every prompt — they provide constant context. Skills are invoked on-demand when needed. Keep rules minimal and only include things that are always applicable.' },
            { type: 'warning', text: 'The <code>npx skills</code> command does NOT install rules. You must download and place them manually.' }
          ],
          commands: [
            { label: 'Verify rules folder exists', cmd: 'ls ~/.claude/rules/', output: 'orchestrator.md\nbest-practices.md' }
          ],
          troubleshooting: [
            { symptom: 'The rules/ folder doesn\'t exist', fix: 'Create it manually: <code>mkdir -p ~/.claude/rules/</code> and then copy the rule files in.' }
          ],
          verification: 'Running <code>ls ~/.claude/rules/</code> shows the rule files you downloaded.'
        }
      ]
    },
    {
      id: 'connect-domo',
      title: 'Connect to Domo',
      steps: [
        {
          id: 'create-access-token',
          title: 'Create a Domo Access Token',
          minutes: 3,
          instructions: [
            'Log in to the Domo instance you want to connect Claude to.',
            'Go to <strong>Admin</strong> (gear icon) &rarr; <strong>Authentication</strong> &rarr; <strong>Access Tokens</strong>.',
            'Click <strong>Create</strong> (or "Generate New Token").',
            'Assign the token to <strong>yourself</strong>.',
            'Give it a descriptive name like <strong>"Claude"</strong> or <strong>"Claude Code"</strong>.',
            'Click <strong>Generate</strong> and <strong>copy the token</strong> immediately — you won\'t be able to see it again.'
          ],
          callouts: [
            { type: 'warning', text: '<strong>You are responsible for everything Claude does with this token.</strong> The token inherits your permissions, and any content Claude creates will show as created by you. Keep the token secure.' },
            { type: 'info', text: 'Access tokens are a temporary solution. In the future, a CLI tool will use your role and permissions directly without needing a token.' }
          ],
          commands: [],
          troubleshooting: [
            { symptom: 'Can\'t find the Access Tokens page', fix: 'You may need admin access in the Domo instance. The path is: Admin &rarr; Authentication &rarr; Access Tokens.' },
            { symptom: 'Lost the token after generating', fix: 'You\'ll need to generate a new one. The token is only shown once at creation time.' }
          ],
          verification: 'You have an access token copied to your clipboard or saved securely.'
        },
        {
          id: 'authenticate-and-test',
          title: 'Authenticate & Test Connection',
          minutes: 5,
          instructions: [
            'Open a Claude session in VS Code.',
            'Type the prompt below, replacing <code>[instance]</code> with your Domo instance name and pasting your access token.',
            'Claude will use the Domo skills to attempt to list datasets. If successful, it will report how many datasets it found.',
            'Once connected, try creating some sample cards to confirm everything works end-to-end.'
          ],
          callouts: [],
          commands: [
            { label: 'Test connection prompt', cmd: 'Can you see datasets in [instance].domo.com? Here\'s my access token: [paste your token here]', output: 'Yes! I can see datasets in [instance].domo.com.\nI found 13,000 datasets. Here are some examples:\n- Salesforce Opportunities\n- Marketing Campaign Data\n- HR Employee Records\n...' },
            { label: 'Create sample cards prompt', cmd: 'Can you create me some example cards using a dataset in [instance].domo.com?', output: 'I\'ll create some sample cards for you. Let me find a good dataset...\n\nUsing: Salesforce Opportunities dataset\n\nCreating 5 cards:\n✓ Summary Card - Total Pipeline Value\n✓ Donut Chart - Opportunities by Stage\n✓ Bar Chart - Revenue by Region\n✓ Pie Chart - Win Rate by Rep\n✓ Line Chart - Monthly Trend\n\nHere are the links to your new cards:\n- https://[instance].domo.com/card/...' }
          ],
          troubleshooting: [
            { symptom: 'Claude says it can\'t connect or finds 0 datasets', fix: 'Double-check that your access token is correct (no extra spaces) and that you\'re using the right instance name. The instance name is the part before .domo.com.' },
            { symptom: 'Card link shows "no access"', fix: 'This is a Domo permissions issue. The card was created successfully but you may not have the right page-level access. Ask an admin to check.' },
            { symptom: 'Claude doesn\'t use the Domo skills', fix: 'Make sure skills are installed (Step 11-12). Start a fresh Claude session — sometimes restarting is needed after installing skills.' }
          ],
          verification: 'Claude reports finding datasets in your instance, and you can click the card links and see them in Domo.'
        }
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      steps: [
        {
          id: 'modes-and-tips',
          title: 'Modes, Sessions & Tips',
          minutes: 5,
          instructions: [
            '<strong>Plan Mode:</strong> Before building anything complex, switch to Plan Mode. Claude will ask you clarifying questions and create a markdown plan before writing any code. Spend 10-20 minutes on planning — it dramatically improves output quality.',
            '<strong>Auto Mode:</strong> The default mode. Claude will ask for permission before making edits.',
            '<strong>Bypass Permissions Mode:</strong> Lets Claude make changes without asking. Enable it in VS Code &rarr; Extensions &rarr; Claude Code &rarr; Settings (gear icon) &rarr; check <strong>"Allow Bypass Permissions Mode"</strong>. A new mode option appears in the Claude panel.',
            '<strong>Session Management:</strong> The VS Code extension saves all your sessions. Use the search feature in the Claude panel to find and resume previous sessions.',
            '<strong>CLAUDE.md:</strong> This file provides persistent instructions to Claude across all sessions. Use it sparingly — too many instructions can cause Claude to make unwanted assumptions. Only include things that are truly always applicable.',
            '<strong>Rules vs Skills:</strong> Rules are loaded into every prompt (always-on context). Skills are invoked on-demand. For Domo work, the skills handle specific tasks (create a card, query a dataset). Rules provide general routing and best practices.',
            '<strong>Pro tip:</strong> While Claude is working, you can keep adding messages to queue up additional instructions. Claude will take them into account as it works.'
          ],
          callouts: [
            { type: 'info', text: 'Riley\'s advice: <em>"You\'ll be a lot more successful with whatever you\'re trying to do with Claude the more effort you put into the planning phase."</em> The best users spend 10-20 minutes on their initial prompt and almost never have to fix issues.' },
            { type: 'warning', text: 'Be cautious with CLAUDE.md. Some practitioners recommend not using it at all because it can negatively impact agent performance. If you do use it, keep it short and focused.' }
          ],
          commands: [],
          troubleshooting: [
            { symptom: 'Don\'t see Auto Mode or Bypass Permissions as options', fix: 'Go to VS Code &rarr; Extensions &rarr; Claude Code &rarr; click the gear icon &rarr; Settings &rarr; check "Allow Bypass Permissions Mode". The new modes will appear.' }
          ],
          verification: 'You understand the three modes (Plan, Auto, Bypass) and can switch between them in the Claude panel. You can find and resume previous sessions.'
        }
      ]
    }
  ]
};

// Flatten steps for easy indexing
const ALL_STEPS = GUIDE_DATA.phases.flatMap((phase, pi) =>
  phase.steps.map((step, si) => ({ ...step, phaseIndex: pi, phaseTitle: phase.title, phaseId: phase.id }))
);

// All troubleshooting items with step references
const ALL_TROUBLESHOOTING = ALL_STEPS.flatMap((step, idx) =>
  step.troubleshooting.map(t => ({ ...t, stepIndex: idx, stepTitle: step.title }))
);

// === STATE ===

const STORAGE_KEY = 'domo-claude-setup-progress';

const State = {
  currentView: 'wizard',
  currentStepIndex: 0,
  completedSteps: new Set(),

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        this.completedSteps = new Set(data.completedSteps || []);
        this.currentStepIndex = data.currentStepIndex || 0;
        if (this.currentStepIndex >= ALL_STEPS.length) this.currentStepIndex = 0;
      }
    } catch (e) { /* ignore corrupt data */ }
  },

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      completedSteps: [...this.completedSteps],
      currentStepIndex: this.currentStepIndex,
      lastUpdated: new Date().toISOString()
    }));
  },

  toggleComplete(stepId) {
    if (this.completedSteps.has(stepId)) {
      this.completedSteps.delete(stepId);
    } else {
      this.completedSteps.add(stepId);
    }
    this.save();
  },

  markCompleteAndNext() {
    const step = ALL_STEPS[this.currentStepIndex];
    if (!this.completedSteps.has(step.id)) {
      this.completedSteps.add(step.id);
    }
    if (this.currentStepIndex < ALL_STEPS.length - 1) {
      this.currentStepIndex++;
    }
    this.save();
  },

  goToStep(index) {
    this.currentStepIndex = Math.max(0, Math.min(index, ALL_STEPS.length - 1));
    this.save();
  },

  reset() {
    this.completedSteps.clear();
    this.currentStepIndex = 0;
    this.save();
  },

  progress() {
    return this.completedSteps.size / ALL_STEPS.length;
  }
};

// === RENDERING ===

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function stripHtml(str) {
  return str.replace(/<[^>]*>/g, '');
}

function renderApp() {
  renderSidebar();
  renderProgressBar();
  renderMainContent();
  updateBottomNav();
  updateViewTabs();
}

function updateViewTabs() {
  document.querySelectorAll('.view-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.view === State.currentView);
    tab.setAttribute('aria-selected', tab.dataset.view === State.currentView);
  });
}

function renderProgressBar() {
  const pct = Math.round(State.progress() * 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressLabel').textContent =
    `${State.completedSteps.size} of ${ALL_STEPS.length} steps complete`;
}

function renderSidebar() {
  const nav = document.getElementById('sidebarNav');
  let html = '';
  GUIDE_DATA.phases.forEach((phase, pi) => {
    html += `<div class="phase-group"><div class="phase-label">${escapeHtml(phase.title)}</div>`;
    phase.steps.forEach((step, si) => {
      const globalIdx = ALL_STEPS.findIndex(s => s.id === step.id);
      const isActive = globalIdx === State.currentStepIndex && State.currentView === 'wizard';
      const isCompleted = State.completedSteps.has(step.id);
      html += `<button class="step-link${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}" data-index="${globalIdx}">
        <span class="step-check">${isCompleted ? '&#10003;' : (globalIdx + 1)}</span>
        <span class="step-link-text">${escapeHtml(step.title)}</span>
        ${step.optional ? '<span class="step-link-optional">Optional</span>' : ''}
      </button>`;
    });
    html += '</div>';
  });
  nav.innerHTML = html;
}

function renderMainContent() {
  const main = document.getElementById('mainContent');
  if (State.currentView === 'wizard') {
    main.innerHTML = renderStepCard(ALL_STEPS[State.currentStepIndex], State.currentStepIndex);
  } else if (State.currentView === 'reference') {
    main.innerHTML = renderReferenceView();
  } else if (State.currentView === 'troubleshooting') {
    main.innerHTML = renderTroubleshootingView();
  }
  main.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function renderStepCard(step, index) {
  let html = `<div class="step-card">`;

  // Breadcrumb
  html += `<div class="step-breadcrumb">
    <span class="phase-badge">Phase ${step.phaseIndex + 1}</span>
    <span>Step ${index + 1} of ${ALL_STEPS.length}</span>
  </div>`;

  // Title
  html += `<h2 class="step-title">${escapeHtml(step.title)}${step.optional ? ' <span class="step-link-optional">Optional</span>' : ''}</h2>`;
  html += `<div class="step-time">&#9201; ~${step.minutes} minutes</div>`;

  // Instructions
  html += '<div class="instructions"><ol>';
  step.instructions.forEach(inst => {
    html += `<li>${inst}</li>`;
  });
  html += '</ol></div>';

  // Callouts
  step.callouts.forEach(c => {
    const label = c.type === 'warning' ? 'Warning' : c.type === 'danger' ? 'Important' : c.type === 'success' ? 'Tip' : 'Note';
    html += `<div class="callout callout-${c.type}">
      <div class="callout-label">${label}</div>
      ${c.text}
    </div>`;
  });

  // Commands
  if (step.commands.length > 0) {
    step.commands.forEach(cmd => {
      html += '<div class="command-group">';
      html += `<div class="command-block">
        <div class="command-block-header">
          <span class="command-block-label">${escapeHtml(cmd.label)}</span>
          <button class="copy-btn" data-copy="${escapeHtml(cmd.cmd)}">Copy</button>
        </div>
        <div class="command-code"><span class="prompt">$ </span>${escapeHtml(cmd.cmd)}</div>
      </div>`;
      if (cmd.output) {
        html += `<div class="output-block">
          <div class="output-block-header">
            <span class="output-block-label">Expected Output</span>
          </div>
          <div class="output-code">${escapeHtml(cmd.output)}</div>
        </div>`;
      }
      html += '</div>';
    });
  }

  // Troubleshooting
  if (step.troubleshooting.length > 0) {
    html += `<details class="troubleshooting-section">
      <summary class="troubleshooting-toggle">Troubleshooting (${step.troubleshooting.length} known issue${step.troubleshooting.length > 1 ? 's' : ''})</summary>
      <div class="troubleshooting-list">`;
    step.troubleshooting.forEach(t => {
      html += `<div class="troubleshooting-item">
        <div class="troubleshooting-symptom">${escapeHtml(t.symptom)}</div>
        <div class="troubleshooting-fix">${t.fix}</div>
      </div>`;
    });
    html += '</div></details>';
  }

  // Verification
  if (step.verification) {
    html += `<div class="verification-box">
      <div class="verification-label">&#10004; Verification</div>
      <div class="verification-text">${step.verification}</div>
    </div>`;
  }

  html += '</div>';
  return html;
}

function renderReferenceView() {
  let html = `<div class="reference-view">
    <h2>Quick Reference — All Commands</h2>
    <p style="color:var(--color-text-muted);margin-bottom:20px;font-size:0.9rem;">Every terminal command from the setup guide in one place. Click "Copy" to copy any command.</p>`;

  GUIDE_DATA.phases.forEach(phase => {
    html += `<div class="ref-phase-title">${escapeHtml(phase.title)}</div>`;
    phase.steps.forEach(step => {
      html += `<div class="ref-step-title">${escapeHtml(step.title)}</div>`;
      if (step.commands.length === 0) {
        html += '<div class="ref-no-commands">No terminal commands for this step</div>';
      }
      step.commands.forEach(cmd => {
        html += '<div class="command-group">';
        html += `<div class="command-block">
          <div class="command-block-header">
            <span class="command-block-label">${escapeHtml(cmd.label)}</span>
            <button class="copy-btn" data-copy="${escapeHtml(cmd.cmd)}">Copy</button>
          </div>
          <div class="command-code"><span class="prompt">$ </span>${escapeHtml(cmd.cmd)}</div>
        </div>`;
        if (cmd.output) {
          html += `<div class="output-block">
            <div class="output-block-header"><span class="output-block-label">Expected Output</span></div>
            <div class="output-code">${escapeHtml(cmd.output)}</div>
          </div>`;
        }
        html += '</div>';
      });
    });
  });

  html += '</div>';
  return html;
}

function renderTroubleshootingView() {
  let html = `<div class="troubleshoot-view">
    <h2>Troubleshooting Index</h2>
    <p style="color:var(--color-text-muted);margin-bottom:12px;font-size:0.9rem;">All known issues from the setup process. Search by symptom or error message.</p>
    <input type="text" class="troubleshoot-search" id="tsSearch" placeholder="Search issues (e.g. 'command not found')...">
    <div id="tsResults">`;

  ALL_TROUBLESHOOTING.forEach((item, i) => {
    html += `<div class="ts-item" data-search="${escapeHtml(stripHtml(item.symptom + ' ' + item.fix).toLowerCase())}">
      <div class="ts-item-symptom">${escapeHtml(item.symptom)}</div>
      <div class="ts-item-fix">${item.fix}</div>
      <div class="ts-item-step" data-step-index="${item.stepIndex}">&#8594; Step ${item.stepIndex + 1}: ${escapeHtml(item.stepTitle)}</div>
    </div>`;
  });

  html += '</div></div>';
  return html;
}

function updateBottomNav() {
  const bottomNav = document.getElementById('bottomNav');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  bottomNav.classList.toggle('hidden', State.currentView !== 'wizard');

  prevBtn.disabled = State.currentStepIndex === 0;
  prevBtn.style.visibility = State.currentStepIndex === 0 ? 'hidden' : 'visible';

  const step = ALL_STEPS[State.currentStepIndex];
  const isCompleted = State.completedSteps.has(step.id);
  const isLast = State.currentStepIndex === ALL_STEPS.length - 1;

  if (isCompleted && isLast) {
    nextBtn.textContent = 'All Done!';
    nextBtn.classList.add('completed-state');
  } else if (isCompleted) {
    nextBtn.innerHTML = 'Next &rarr;';
    nextBtn.classList.remove('completed-state');
  } else if (isLast) {
    nextBtn.textContent = 'Mark Complete';
    nextBtn.classList.remove('completed-state');
  } else {
    nextBtn.innerHTML = 'Mark Complete & Next &rarr;';
    nextBtn.classList.remove('completed-state');
  }
}

// === CLIPBOARD ===

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1500);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1500);
  });
}

// === EVENT LISTENERS ===

document.addEventListener('DOMContentLoaded', () => {
  State.load();
  renderApp();

  // View switching
  document.querySelectorAll('.view-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      State.currentView = tab.dataset.view;
      renderApp();
    });
  });

  // Sidebar step clicks
  document.getElementById('sidebarNav').addEventListener('click', (e) => {
    const link = e.target.closest('.step-link');
    if (link) {
      State.currentView = 'wizard';
      State.goToStep(parseInt(link.dataset.index));
      renderApp();
      // Close sidebar on mobile
      document.getElementById('sidebar').classList.remove('open');
    }
  });

  // Bottom nav
  document.getElementById('prevBtn').addEventListener('click', () => {
    State.goToStep(State.currentStepIndex - 1);
    renderApp();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    State.markCompleteAndNext();
    renderApp();
  });

  // Copy buttons (delegated)
  document.getElementById('mainContent').addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
      copyToClipboard(e.target.dataset.copy, e.target);
    }
    // Troubleshooting step links
    if (e.target.classList.contains('ts-item-step')) {
      const idx = parseInt(e.target.dataset.stepIndex);
      State.currentView = 'wizard';
      State.goToStep(idx);
      renderApp();
    }
  });

  // Troubleshooting search (delegated)
  document.getElementById('mainContent').addEventListener('input', (e) => {
    if (e.target.id === 'tsSearch') {
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.ts-item').forEach(item => {
        const text = item.dataset.search || '';
        item.style.display = (!query || text.includes(query)) ? '' : 'none';
      });
    }
  });

  // Sidebar toggle (mobile)
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Close sidebar when clicking outside on mobile
  document.getElementById('mainContent').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
  });

  // Reset modal
  document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('resetModal').classList.add('visible');
  });
  document.getElementById('resetCancel').addEventListener('click', () => {
    document.getElementById('resetModal').classList.remove('visible');
  });
  document.getElementById('resetConfirm').addEventListener('click', () => {
    State.reset();
    document.getElementById('resetModal').classList.remove('visible');
    renderApp();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (State.currentView !== 'wizard') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (State.currentStepIndex < ALL_STEPS.length - 1) {
        State.goToStep(State.currentStepIndex + 1);
        renderApp();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (State.currentStepIndex > 0) {
        State.goToStep(State.currentStepIndex - 1);
        renderApp();
      }
    }
  });
});
