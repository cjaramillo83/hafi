# HAFI Scripts

This directory contains utility scripts for the HAFI methodology.

## Available Scripts

### `setup_locale.js`
Helps set up your preferred language for HAFI templates.

**Usage:**
```bash
node scripts/setup_locale.js [language-code]
```

**Examples:**
```bash
# Set up English templates
node scripts/setup_locale.js en

# Set up Spanish templates
node scripts/setup_locale.js es

# Show help
node scripts/setup_locale.js --help
```

**What it does:**
1. Checks if the requested language is supported
2. Copies template files from `locales/{code}/templates/` to the main template directories
3. Provides feedback on the setup process

## Adding New Scripts

When adding new scripts:
1. Place them in this `scripts/` directory
2. Document them in this README.md file
3. Ensure they follow Node.js best practices
4. Include proper error handling and help text

## Requirements
- Node.js 12 or higher
- File system access permissions
