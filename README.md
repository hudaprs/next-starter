# My Next.js 14 App (WIP)

This is a Next.js 14 application set up with TypeScript, ESLint, Prettier, and JSDoc for a robust and maintainable codebase. The project aims to ensure code quality and consistency by integrating several linting and formatting tools.

## Project Overview

This application is built using Next.js, a React framework that enables server-side rendering and static site generation. It uses TypeScript for type safety and better developer experience. The app includes:

- **Next.js** for the core framework
- **TypeScript** for type safety
- **ESLint** for linting
- **Prettier** for code formatting
- **JSDoc** for documentation

## Prerequisites

### Node Version Manager (NVM)

We recommend using NVM (Node Version Manager) to manage Node.js versions.

- [NVM for Windows](https://github.com/coreybutler/nvm-windows/releases)
- [NVM for macOS/Linux](https://github.com/nvm-sh/nvm)

### Node.js

Ensure you have Node.js v18 (LTS/Hydrogen) installed. You can install it using NVM:

```bash
nvm install 18
nvm use 18
```

### Code Editor

You can use any code editor, but we recommend using Visual Studio Code (VSCode).

- [VSCode](https://code.visualstudio.com/)
- JetBrains (WebStorm, IntelliJ IDEA)
- Any latest code or text editor

### VSCode Recommended Extensions

For VSCode users, we recommend installing the following extensions to enhance your development experience:

- [**ESLint** (required)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint into VSCode.
- [**GitLens** (required)](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Enhances the Git capabilities within VSCode.
- [**Prettier** (required)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Integrates Prettier for code formatting.
- [**Prettier - ESLint** (required)](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint): Integrates Prettier with ESLint.
- [**Tailwind CSS IntelliSense** (required)](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Provides Tailwind CSS class name completion and linting.
- [**Auto Rename Tag** (optional)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Automatically renames paired HTML/XML tags.
- [**Auto Close Tag** (optional)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Automatically adds a closing tag.
- [**Code Spell Checker** (optional)](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): Minimizes typos by checking spelling in code.
- [**Multiple Cursor Case Preserve** (optional)](https://marketplace.visualstudio.com/items?itemName=Cardinal90.multi-cursor-case-preserve): Preserves case when using multiple cursors.

## Getting Started

Install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ESLint Configuration

This project uses ESLint to maintain code quality and Prettier for consistent code formatting.

### ESLint

ESLint is configured to use recommended rules from TypeScript, Next.js, and JSDoc. The configuration is extended with Prettier to avoid conflicts between ESLint and Prettier rules.

#### Key ESLint Plugins and Extensions

- `plugin:@typescript-eslint/recommended`: Recommended rules for TypeScript.
- `next`: Next.js specific linting rules.
- `next/core-web-vitals`: Core Web Vitals rules for Next.js.
- `plugin:jsdoc/recommended-typescript-error`: JSDoc rules with TypeScript error checking.
- `prettier`: Integrates Prettier for code formatting.

## Resource

- [Husky, Commitlint, and Prettier Configuration](https://theodorusclarence.com/shorts/husky-commitlint-prettier)
- [Setting Up ESLint for Next.js 14 Projects](https://borstch.com/blog/development/setting-up-eslint-for-nextjs-14-projects)
