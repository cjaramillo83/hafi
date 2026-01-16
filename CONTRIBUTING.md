# Contribution

Thank you for contributing to this HAFI base repository.

## Objective
Maintain a set of simple, consistent, and versionable operational templates.

## Contribution rules
1. Keep templates in **Markdown** (no dependencies).
2. Avoid tools or workflows that tie the repository to a specific provider.
3. Any change must include:
   - reason (observed problem),
   - expected impact,
   - risk,
   - and record in `05_methodology/changes.md`.

## Structure (do not break)
- Do not rename main folders (00_ to 05_) except in a major version.
- New templates: add in the corresponding folder and document in `README.md`.

## Template style
- Clear headers (`#`, `##`)
- Checklists for criteria
- Explicit mandatory fields

## Translation contributions
We welcome translations to make HAFI accessible worldwide. To contribute a translation:

### Translation guidelines
1. **File naming**: Use language codes (e.g., `README.es.md`, `vision.es.md`)
2. **Directory structure**: Place translations in `locales/{code}/` folders
3. **Quality**: Translations should be accurate and maintain the original meaning
4. **Consistency**: Use consistent terminology across all translated files

### How to submit a translation
1. Create a new folder in `locales/` with the ISO 639-1 language code
2. Add translated templates in `locales/{code}/templates/`
3. Add translated documentation in `locales/{code}/docs/`
4. Update the main `README.md` to list the new language
5. Submit a PR with:
   - List of translated files
   - Language information
   - Any cultural adaptation notes

### Currently supported languages
- English (primary): `README.md`, `CONTRIBUTING.md`
- Spanish: `README.es.md`, `CONTRIBUTING.es.md`

## Change proposal
Open a PR with:
- summary,
- modified files,
- usage example (if applicable),
- update of `CHANGELOG.md`.
