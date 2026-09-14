# parabank-playwright-typescript-pom-project-
End-to-end test automation for ParaBank using Playwright + TypeScript. Covers account creation and fund transfers with the Page Object Model pattern. Built as a hands-on learning project for Playwright fundamentals, TypeScript type-safety, and reliable test design.

# ParaBank Test Automation

A Playwright + TypeScript end-to-end test suite for [ParaBank](https://parabank.parasoft.com), 
Parasoft's demo banking application. Built as a learning project to explore Playwright's 
testing patterns alongside TypeScript's type system.

## What it covers

- **Account creation** — opening a new banking account and verifying the confirmation flow
- **Fund transfers** — transferring funds between a user's own accounts and validating the result

## Structure

- Follows the **Page Object Model (POM)** pattern, separating page interactions 
  (`pages/`) from test logic (`tests/`)
- Uses `test.describe.serial` to model dependent test flows (e.g. a transfer test 
  that relies on an account created in a prior test)
- Type-safe throughout, with Page Object methods returning strict types and 
  failing fast (via thrown errors or assertions) when expected UI elements aren't found

## Tech stack

- [Playwright](https://playwright.dev/)
- TypeScript
- ParaBank demo site (https://parabank.parasoft.com)

## Why this project

This repo exists primarily as a hands-on way to learn:
- Playwright's locator, wait, and assertion APIs
- Structuring a test suite with the Page Object Model
- TypeScript strictness (null-checking, type narrowing) in a real testing context

## Running the tests

\`\`\`bash
npm install
npx playwright test
\`\`\`
