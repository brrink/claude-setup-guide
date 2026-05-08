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
            'In VS Code, press <strong>Cmd+Shift+X</strong> (Mac) or <strong>Ctrl+Shift+X</strong> (Windows/Linux) to open the Extensions view.',
            'Search for <strong>"Claude Code"</strong> and install the extension published by <strong>Anthropic</strong>.',
            'After installation you\'ll see the <strong>Spark icon</strong> (✱) in several places: the top-right of the editor toolbar (when a file is open), the Activity Bar on the left, the bottom-right Status Bar, and the Command Palette under "Claude Code".',
            'Click any Spark icon to open the Claude Code panel.',
            'Click <strong>Sign in</strong> on the welcome screen and complete the OAuth flow in your browser using your Domo enterprise Claude account.',
            'When the panel returns, the <strong>Learn Claude Code</strong> checklist appears — work through it or dismiss it with the X.'
          ],
          callouts: [
            { type: 'info', text: 'The 2026 extension uses a single browser-based <strong>Sign in</strong> button — no separate "console" or "Max/Pro" buttons. Just sign in with the Domo enterprise account you registered in step 1.' },
            { type: 'warning', text: 'Requires VS Code 1.98 or later. If the Spark icon doesn\'t appear, check Help → About, then run <strong>Developer: Reload Window</strong> from the Command Palette (Cmd+Shift+P).' }
          ],
          commands: [],
          troubleshooting: [
            { symptom: 'No Spark icon visible after install', fix: 'Open a file (the editor-toolbar icon needs an open file). Otherwise check the bottom-right Status Bar for <strong>✱ Claude Code</strong>, or run <strong>Developer: Reload Window</strong> from the Command Palette.' },
            { symptom: 'Sign-in screen reappears after authenticating', fix: 'If <code>ANTHROPIC_API_KEY</code> is set in your shell, VS Code may not have inherited it — relaunch VS Code from a terminal with <code>code .</code>, or just sign in with your Claude account.' },
            { symptom: '"Not logged in · Please run /login"', fix: 'Type <code>/login</code> in the prompt box, or run <strong>Developer: Reload Window</strong> and the sign-in screen will reopen.' }
          ],
          verification: 'The Spark icon is visible in VS Code, the panel opens to a prompt box, and your account shows under <code>/</code> → settings.'
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
            'Run the <strong>Set up FNM environment</strong> command to enable FNM in your current terminal, then <strong>Install Node.js</strong> to download the latest LTS.',
            '<strong>Persist FNM for future terminals.</strong> FNM doesn\'t install <code>node</code>/<code>npm</code> into a fixed PATH location — it relies on a shell hook (the <code>eval</code> line). Without persisting it, every new terminal will fail with "command not found." Run the <strong>Persist FNM in ~/.zshrc</strong> command to add the hook to your zsh startup file. The <code>grep -q</code> guard makes it safe to re-run.',
            '<strong>Open a fresh terminal window</strong> (or run <code>source ~/.zshrc</code>) so the new shell startup file takes effect.',
            'In the fresh terminal, verify with the <code>node -v</code> and <code>npm -v</code> commands.'
          ],
          callouts: [
            { type: 'warning', text: 'After installing Node via FNM, you <strong>must</strong> open a fresh terminal (or <code>source ~/.zshrc</code>) before <code>node</code> resolves. The PATH only updates in new shell sessions.' },
            { type: 'info', text: '<strong>Using bash instead of zsh?</strong> macOS defaults to zsh since Catalina (2019), but if your shell is bash, replace <code>~/.zshrc</code> with <code>~/.bashrc</code> in the persist command. Check your shell with <code>echo $SHELL</code>.' }
          ],
          commands: [
            { label: 'Set up FNM environment (current session)', cmd: 'eval "$(fnm env --use-on-cd)"', output: '' },
            { label: 'Install Node.js (latest LTS)', cmd: 'fnm install --lts', output: 'Installing Node vXX.x.x (arm64)\ninstalled successfully' },
            { label: 'Persist FNM in ~/.zshrc (safe to re-run)', cmd: 'grep -q \'fnm env\' ~/.zshrc 2>/dev/null || echo \'eval "$(fnm env --use-on-cd)"\' >> ~/.zshrc', output: '' },
            { label: 'Verify Node (in a NEW terminal)', cmd: 'node -v', output: 'v22.x.x' },
            { label: 'Verify NPM', cmd: 'npm -v', output: '10.x.x' }
          ],
          troubleshooting: [
            { symptom: '"node: command not found" in a fresh terminal', fix: 'You probably skipped the <strong>Persist FNM</strong> command. Run it now, then open a new terminal. Confirm the line is there with <code>grep \'fnm env\' ~/.zshrc</code> — you should see <code>eval "$(fnm env --use-on-cd)"</code>.' },
            { symptom: 'I ran the persist command but new terminals still don\'t see node', fix: 'Check your shell with <code>echo $SHELL</code>. If it shows <code>/bin/bash</code> (not <code>/bin/zsh</code>), run the same persist command against <code>~/.bashrc</code> instead. Also confirm VS Code\'s integrated terminal isn\'t pinned to a different shell in Settings → Terminal → Integrated → Default Profile.' },
            { symptom: '"npx: command not found"', fix: 'Same root cause — the FNM hook isn\'t in your shell startup. Persist it as above; <code>node</code>, <code>npm</code>, and <code>npx</code> all share the same FNM-managed PATH.' },
            { symptom: 'Worried about duplicate lines in ~/.zshrc', fix: 'The <code>grep -q ... || echo ...</code> guard prevents dupes — re-running the persist command is a no-op once the line is already in the file. To inspect: <code>grep \'fnm env\' ~/.zshrc</code>.' }
          ],
          verification: 'Open a brand new terminal window and run <code>node -v</code> and <code>npm -v</code> — both print versions without "command not found." Running <code>grep \'fnm env\' ~/.zshrc</code> shows the persisted hook line.'
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
            { type: 'info', text: 'The <code>~/.claude/</code> folder is hidden by default. In Finder, press <strong>Cmd+Shift+.</strong> to toggle hidden files.' },
            { type: 'info', text: 'Skills are organized into feature subdirectories in the source repo (<code>custom-apps/</code>, <code>app-studio/</code>, <code>domo-everywhere/</code>, <code>cli/</code>, <code>connectors/</code>, <code>(demo-skills)/</code>, …). The <code>--all</code> flag flattens them into <code>~/.claude/skills/</code> regardless.' },
            { type: 'success', text: 'Alternative: just ask Claude — <em>"Install the Domo skills from https://github.com/stahura/domo-ai-vibe-rules/skills"</em> — and it will run the install command for you.' }
          ],
          commands: [
            { label: 'Install Domo skills', cmd: 'npx skills add https://github.com/stahura/domo-ai-vibe-rules/skills --all -g', output: 'Need to install the following packages:\n  skills\nOk to proceed? (y) y\n\nFound XX skills\nInstalling to XX agents...\n✓ Installed skill-1 to agent-1\n✓ Installed skill-2 to agent-2\n...\nDone!' }
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
            { symptom: 'Claude doesn\'t list any Domo skills', fix: 'Verify the skills folder exists at <code>~/.claude/skills/</code>. If it\'s empty or missing, re-run <code>npx skills add https://github.com/stahura/domo-ai-vibe-rules/skills --all -g</code> from your VS Code terminal.' },
            { symptom: 'Claude lists some but not all skills', fix: 'Run <code>npx skills add https://github.com/stahura/domo-ai-vibe-rules/skills --all -g</code> again — it will update/install any missing skills.' }
          ],
          verification: 'Claude lists Domo-specific skills like card-creation, dataset-query, app-studio, etc.'
        },
        {
          id: 'install-rules',
          title: 'Install Rules',
          minutes: 3,
          instructions: [
            'Rules are separate from skills and must be installed manually. Go to the <a href="https://github.com/stahura/domo-ai-vibe-rules/tree/main/rules" target="_blank"><strong>rules/ folder</strong></a> of the Domo AI Vibe Rules repo.',
            'Download each rule file (currently <code>core-custom-apps-rule.md</code> and <code>custom-app-gotchas.md</code>).',
            'Place the rule files into <code>~/.claude/rules/</code> — this folder should be a peer (sibling) of the <code>~/.claude/skills/</code> folder. Create it with <code>mkdir -p ~/.claude/rules/</code> if it doesn\'t exist yet.',
            'That\'s it — rules are loaded automatically in every Claude session.'
          ],
          callouts: [
            { type: 'info', text: '<strong>Rules vs Skills:</strong> Rules are always present in every prompt — they provide constant context. Skills are invoked on-demand when needed. Keep rules minimal and only include things that are always applicable.' },
            { type: 'warning', text: 'The <code>npx skills add</code> command does NOT install rules. You must download and place them manually.' }
          ],
          commands: [
            { label: 'Verify rules folder', cmd: 'ls ~/.claude/rules/', output: 'core-custom-apps-rule.md\ncustom-app-gotchas.md' }
          ],
          troubleshooting: [
            { symptom: 'The rules/ folder doesn\'t exist', fix: 'Create it manually: <code>mkdir -p ~/.claude/rules/</code> and then copy the rule files in.' },
            { symptom: '<code>ls</code> shows the files but Claude doesn\'t seem aware of them', fix: 'Start a fresh Claude session. Rules are loaded once at session start, so existing sessions won\'t pick up newly added rule files.' }
          ],
          verification: 'Running <code>ls ~/.claude/rules/</code> shows <code>core-custom-apps-rule.md</code> and <code>custom-app-gotchas.md</code> (plus any others you added).'
        }
      ]
    },
    {
      id: 'connect-domo',
      title: 'Connect to Domo',
      steps: [
        {
          id: 'install-domo-clis',
          title: 'Install the Domo CLIs',
          minutes: 5,
          instructions: [
            'The Domo skills drive two CLIs under the hood: <code>ryuu</code> (the official Domo CLI, used for <code>domo login</code> / <code>domo dev</code> / <code>domo publish</code>) and <code>community-domo-cli</code> (used by skills for Product API calls — datasets, App Studio, cards, dataflows, AppDB, Code Engine, filesets, etc.).',
            'Run the <strong>Install ryuu</strong> command below in your VS Code terminal. This installs the <code>domo</code> command globally via npm.',
            'Run the <strong>Install pipx</strong> command — pipx isolates Python CLIs so they don\'t conflict with system Python. Then run <code>pipx ensurepath</code> and <strong>open a new terminal</strong> so the PATH update takes effect.',
            'In the new terminal, run the <strong>Install community-domo-cli</strong> command. pipx will pull the CLI from GitHub and put a <code>community-domo-cli</code> command on your PATH.',
            'Verify both CLIs respond to <code>--help</code>.'
          ],
          callouts: [
            { type: 'info', text: 'These CLIs are installed once and used by Claude for the rest of your work — you don\'t run their commands directly very often. Claude reads the skills and invokes the right CLI for whatever you ask.' },
            { type: 'warning', text: 'After <code>pipx ensurepath</code>, <strong>open a new terminal</strong> before running <code>pipx install</code>. Otherwise you\'ll see "command not found" for community-domo-cli even after install.' }
          ],
          commands: [
            { label: 'Install ryuu (Domo CLI)', cmd: 'npm install -g ryuu', output: 'added 1 package in Xs' },
            { label: 'Install pipx (Python CLI installer)', cmd: 'brew install pipx && pipx ensurepath', output: '==> Installing pipx\n...\nSuccess! Added /Users/you/.local/bin to PATH.' },
            { label: 'Install community-domo-cli (in a NEW terminal)', cmd: 'pipx install "git+https://github.com/stahura/community-domo-cli.git"', output: '  installed package community-domo-cli, ...\n  These apps are now globally available\n    - community-domo-cli\ndone! ✨' },
            { label: 'Verify domo (ryuu)', cmd: 'domo --help', output: 'Usage: domo <command> [options]\n\nCommands:\n  login       Log in to a Domo instance\n  dev         Run a custom app locally\n  publish     Publish a custom app\n  ...' },
            { label: 'Verify community-domo-cli', cmd: 'community-domo-cli --help', output: 'Usage: community-domo-cli [OPTIONS] COMMAND [ARGS]...\n\nCommands:\n  datasets, app-studio, cards, dataflows,\n  appdb, code-engine, filesets, workflows, ...' }
          ],
          troubleshooting: [
            { symptom: '"command not found: pipx" after brew install', fix: 'Close your terminal and open a new one. <code>pipx ensurepath</code> updates your shell profile, but the change only takes effect in new sessions.' },
            { symptom: '"command not found: community-domo-cli" after pipx install', fix: 'Run <code>pipx ensurepath</code> again, then close and reopen the terminal. If still missing, run <code>echo $PATH | tr \':\' \'\\n\' | grep .local/bin</code> — if no match, manually add <code>~/.local/bin</code> to your PATH.' },
            { symptom: 'pipx install fails on git clone', fix: 'Check your network/VPN — pipx is pulling from GitHub. If you\'re on a corporate proxy, configure pip to use it: <code>pipx install --pip-args="--proxy=http://your-proxy" "git+https://github.com/stahura/community-domo-cli.git"</code>.' },
            { symptom: '"npm: command not found"', fix: 'Go back to step 10 (Install Node.js & NPM). Close/reopen your terminal so the FNM-installed Node is on PATH.' }
          ],
          verification: 'Both <code>domo --help</code> and <code>community-domo-cli --help</code> print usage info without errors.'
        },
        {
          id: 'authenticate-and-test',
          title: 'Log In & Test Connection',
          minutes: 5,
          instructions: [
            'Run <strong>domo login</strong> below, replacing <code>[instance]</code> with your Domo instance name (the part before <code>.domo.com</code>). A browser window will open — sign in with your Domo account. The CLI saves a session file at <code>~/.config/configstore/ryuu/[instance].json</code>.',
            'Set the environment variables <code>DOMO_INSTANCE</code> and <code>DOMO_AUTH_MODE=ryuu-session</code>. <strong>Add these to your shell profile</strong> (<code>~/.zshrc</code> or <code>~/.zprofile</code>) so they persist across terminal sessions.',
            'Sanity check the CLI from your terminal with <code>community-domo-cli datasets list</code>. If it returns rows, auth is working.',
            'Now open Claude Code in VS Code and ask Claude to confirm the connection using the prompt below — Claude will use the skills + community-domo-cli to enumerate datasets.',
            'Once connected, try creating some sample cards to confirm everything works end-to-end.'
          ],
          callouts: [
            { type: 'danger', text: '<strong>Token auth is deprecated.</strong> The old workflow of pasting an access token into a Claude prompt no longer works — community-domo-cli will reject <code>auth_mode=token</code>. The ryuu-session flow below is the only supported path.' },
            { type: 'warning', text: '<strong>You are responsible for everything Claude does in this session.</strong> The CLI uses your Domo identity, so anything Claude creates will be attributed to you. Treat a Claude session like a remote shell with your credentials.' }
          ],
          commands: [
            { label: 'Log in to Domo', cmd: 'domo login -i [instance].domo.com', output: 'Opening browser to authenticate...\n✓ Logged in as you@domo.com\nSession saved to ~/.config/configstore/ryuu/[instance].json' },
            { label: 'Set env vars (add to ~/.zshrc to persist)', cmd: 'export DOMO_INSTANCE=[instance]\nexport DOMO_AUTH_MODE=ryuu-session', output: '' },
            { label: 'Sanity check from terminal', cmd: 'community-domo-cli datasets list --limit 3', output: '[\n  {"id": "abc-123", "name": "Salesforce Opportunities", ...},\n  {"id": "def-456", "name": "Marketing Campaign Data", ...},\n  {"id": "ghi-789", "name": "HR Employee Records", ...}\n]' },
            { label: 'Test connection prompt (in Claude Code)', cmd: 'Confirm you can see datasets in [instance].domo.com using the community-domo-cli. List a few examples.', output: 'Yes — I ran `community-domo-cli datasets list` against [instance].domo.com.\nI found ~13,000 datasets. Here are some examples:\n- Salesforce Opportunities\n- Marketing Campaign Data\n- HR Employee Records\n...' },
            { label: 'Create sample cards prompt', cmd: 'Create 5 example cards in [instance].domo.com using a Salesforce-style dataset.', output: 'Using: Salesforce Opportunities dataset\n\nCreating 5 cards via the card-creation skill:\n✓ Summary Card - Total Pipeline Value\n✓ Donut Chart - Opportunities by Stage\n✓ Bar Chart - Revenue by Region\n✓ Pie Chart - Win Rate by Rep\n✓ Line Chart - Monthly Trend\n\nLinks:\n- https://[instance].domo.com/card/...' }
          ],
          troubleshooting: [
            { symptom: '"Token auth mode is no longer supported"', fix: 'Run <code>domo login -i [instance].domo.com</code> again and confirm <code>DOMO_AUTH_MODE=ryuu-session</code> is set in your environment. Token auth was removed from community-domo-cli — only ryuu-session is supported now.' },
            { symptom: '<code>community-domo-cli datasets list</code> returns 0 rows or an auth error', fix: 'Verify <code>$DOMO_INSTANCE</code> is just the subdomain (e.g. <code>modocorp</code>, not <code>modocorp.domo.com</code>) and that the session file exists: <code>ls ~/.config/configstore/ryuu/</code>. Re-run <code>domo login</code> if needed.' },
            { symptom: 'Claude doesn\'t use the Domo skills', fix: 'Start a fresh Claude session (skills load at session start). Confirm skills are installed with <code>ls ~/.claude/skills/</code>. If empty, re-run the skills install (step 11).' },
            { symptom: 'Card link shows "no access"', fix: 'A Domo permissions issue, not a Claude issue. The card was created but you may not have page-level access. Ask an admin.' },
            { symptom: 'Env vars don\'t persist after closing the terminal', fix: 'You ran <code>export</code> in the current shell only. Add the two <code>export</code> lines to <code>~/.zshrc</code> (or <code>~/.zprofile</code>), then reload with <code>source ~/.zshrc</code>.' }
          ],
          verification: 'Both <code>community-domo-cli datasets list</code> and Claude (in VS Code) return real datasets from your instance, and you can open created cards in Domo.'
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
            '<strong>Permission modes</strong> control how aggressive Claude is about changes. Click the mode indicator at the bottom of the prompt box to switch. The four core modes:',
            '&nbsp;&nbsp;• <strong>Default</strong> — Claude asks permission before each file edit or shell command.',
            '&nbsp;&nbsp;• <strong>Plan</strong> — Claude describes what it will do and waits for approval. VS Code opens the plan as a full markdown document where you can <em>add inline comments</em> before approving. Best for complex tasks.',
            '&nbsp;&nbsp;• <strong>Accept Edits</strong> — Claude applies file edits without asking, but still asks for shell commands.',
            '&nbsp;&nbsp;• <strong>Bypass Permissions</strong> — no prompts at all (also unlocks <strong>Auto mode</strong>). Hidden by default. Enable in VS Code Settings → Extensions → Claude Code → check <strong>"Allow Dangerously Skip Permissions"</strong>. Only use in sandboxed/disposable workspaces.',
            '<strong>Checkpoints &amp; rewind:</strong> Hover any message in the conversation to reveal a rewind button. You can <em>fork conversation from here</em>, <em>rewind code to here</em>, or do both — undoes Claude\'s edits without losing chat history.',
            '<strong>Session history:</strong> The <strong>Session history</strong> button at the top of the Claude panel lets you search by keyword or browse by time (Today / Yesterday / Last 7 days). New sessions get AI-generated titles you can rename.',
            '<strong>Multiple conversations:</strong> Open additional tabs or windows via <strong>Cmd+Shift+P → "Claude Code: Open in New Tab"</strong>. Each tab keeps its own context — useful for parallel tasks. A small dot on the Spark icon means a permission request is pending or Claude finished while the tab was hidden.',
            '<strong>Useful slash commands:</strong> <code>/usage</code> shows plan usage, <code>/compact</code> manually compacts context, <code>/plugins</code> manages plugins, <code>/login</code> reauthenticates, <code>/mcp</code> manages MCP servers. Type <code>/</code> in the prompt box to see the full list.',
            '<strong>Extended thinking:</strong> Toggle via the <code>/</code> menu — Claude spends more time reasoning before responding. Useful for complex Domo schema or query design.',
            '<strong>CLAUDE.md:</strong> Provides persistent instructions across sessions. Use sparingly — too many instructions can cause unwanted assumptions. Only include things that are always applicable. Some practitioners avoid it entirely.',
            '<strong>Rules vs Skills:</strong> Rules are loaded into every prompt (always-on context). Skills are invoked on-demand based on the task. For Domo work, your two rules (core + gotchas) provide routing context; the ~50 skills handle specific tasks.',
            '<strong>Pro tip:</strong> While Claude is working you can keep typing — additional messages queue up and Claude takes them into account on its next turn.'
          ],
          callouts: [
            { type: 'info', text: 'Riley\'s advice: <em>"You\'ll be a lot more successful with whatever you\'re trying to do with Claude the more effort you put into the planning phase."</em> The best users spend 10-20 minutes setting up the initial prompt (or use Plan mode) and almost never have to fix issues.' },
            { type: 'warning', text: '<strong>Bypass Permissions / Auto mode is dangerous.</strong> Anything Claude does runs against your real Domo identity (cards created, data deleted, etc.) and your real filesystem. The Anthropic docs literally say "use only in sandboxes with no internet access." Default or Accept Edits is safer for most work.' }
          ],
          commands: [],
          troubleshooting: [
            { symptom: 'Don\'t see Bypass Permissions or Auto mode in the mode selector', fix: 'Open VS Code Settings (Cmd+,), search for <strong>"Allow Dangerously Skip Permissions"</strong> under Extensions → Claude Code, and check the box. The new modes appear in the prompt box mode selector.' },
            { symptom: 'Plan mode doesn\'t open a markdown doc', fix: 'Make sure your VS Code extension is up to date — the inline-plan-doc feature is recent. Run <strong>"Extensions: Check for Updates"</strong> from the Command Palette.' },
            { symptom: 'Can\'t find old sessions', fix: 'Use the <strong>Session history</strong> button at the top of the Claude panel — it lists local sessions by recency. Sessions from claude.ai (web) appear under the <strong>Remote</strong> tab if you signed in with a Claude.ai subscription account.' },
            { symptom: 'Want to switch from extension to CLI mid-conversation', fix: 'In VS Code\'s integrated terminal run <code>claude --resume</code> — you can search for and resume the same conversation in the CLI. Conversation history is shared.' }
          ],
          verification: 'You can switch permission modes from the prompt box, find/resume past sessions from the Session history dialog, and use the rewind feature on a message.'
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
