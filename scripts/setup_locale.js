#!/usr/bin/env node

/**
 * HAFI Locale Setup Script
 * 
 * This script helps users set up their preferred language for HAFI templates.
 * Usage: node scripts/setup_locale.js [language-code]
 * Example: node scripts/setup_locale.js es
 */

const fs = require('fs');
const path = require('path');

const SUPPORTED_LANGUAGES = {
  'en': 'English',
  'es': 'Spanish'
};

const TEMPLATE_FILES = [
  'value_node_template.md',
  // Add more template files as they become available
];

function showHelp() {
  console.log(`
HAFI Locale Setup Script
========================

Usage: node scripts/setup_locale.js [language-code]

Supported language codes:
${Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => `  ${code} - ${name}`).join('\n')}

Examples:
  node scripts/setup_locale.js en  # Set up English templates
  node scripts/setup_locale.js es  # Set up Spanish templates

This script will:
1. Check if the requested language is supported
2. Copy template files from locales/{code}/templates/ to the main template directories
3. Update README references if needed
`);
}

function setupLocale(languageCode) {
  if (!SUPPORTED_LANGUAGES[languageCode]) {
    console.error(`Error: Language code "${languageCode}" is not supported.`);
    console.error(`Supported codes: ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`);
    process.exit(1);
  }

  console.log(`Setting up ${SUPPORTED_LANGUAGES[languageCode]} (${languageCode}) templates...\n`);

  const sourceDir = path.join(__dirname, '..', 'locales', languageCode, 'templates');
  const targetDir = path.join(__dirname, '..', '01_backlog');

  // Check if source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.error(`Error: Source directory not found: ${sourceDir}`);
    console.error('Please make sure the language pack is properly installed.');
    process.exit(1);
  }

  // Copy template files
  let copiedCount = 0;
  TEMPLATE_FILES.forEach(templateFile => {
    const sourceFile = path.join(sourceDir, templateFile);
    const targetFile = path.join(targetDir, templateFile);

    if (fs.existsSync(sourceFile)) {
      try {
        fs.copyFileSync(sourceFile, targetFile);
        console.log(`✓ Copied: ${templateFile}`);
        copiedCount++;
      } catch (error) {
        console.error(`✗ Error copying ${templateFile}: ${error.message}`);
      }
    } else {
      console.log(`⚠ Template not available: ${templateFile}`);
    }
  });

  console.log(`\n✅ Setup complete!`);
  console.log(`Copied ${copiedCount} template file(s) to ${targetDir}`);
  console.log(`\nNext steps:`);
  console.log(`1. Review the templates in 01_backlog/`);
  console.log(`2. Start creating value nodes in 01_backlog/nodos/`);
  console.log(`3. Refer to README.md for usage instructions`);
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

const languageCode = args[0].toLowerCase();
setupLocale(languageCode);
