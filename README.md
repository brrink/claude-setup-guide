# Claude Code Setup Guide

A Domo custom app that provides a step-by-step wizard for setting up Claude Code with Domo-specific skills and rules.

## Overview

This app walks users through the full setup process — from installing prerequisites (Homebrew, FNM, Node.js) to configuring Claude Code with Domo platform skills and rules. It includes copyable terminal commands, troubleshooting tips, and progress tracking.

## Development

This is a static Domo custom app (HTML/CSS/JS, no build step).

- **Source files:** `index.html`, `app.js`, `app.css`
- **Publish directory:** `dist/`

### Publishing

Copy updated source files into `dist/`, then publish from that directory:

```bash
cp app.js app.css index.html manifest.json thumbnail.png dist/
cd dist && domo publish
```
