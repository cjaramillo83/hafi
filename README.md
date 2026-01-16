# HAFI Repo Base (v1.0)

Base repository to operate the **HAFI (Human‑AI Full‑Stack Iterative)** methodology in projects where an AI-augmented human acts as a complete development unit.

## Structure
```
/hafi-project
├── 00_direction/ (direction)
├── 01_backlog/ (backlog)
│   ├── value_node_template.md
│   └── nodos/ (value nodes)
├── 02_execution/ (execution)
│   └── ciclos/ (cycles)
├── 03_validation/ (validation)
├── 04_learning/ (learning)
├── 05_methodology/ (methodology)
└── README.md
```

## How to use (minimum operation)
1. Complete `00_direction/vision.md`, `metrics.md` and `risks.md`.
2. Create a Value Node in `01_backlog/nodos/` by copying `01_backlog/value_node_template.md`.
3. Execute the cycle in `02_execution/ciclos/`.
4. Record validation in `03_validation/`.
5. Record learning in `04_learning/retrospectives.md`.
6. If you change the process, record the change in `05_methodology/changes.md`.

## HAFI Rules
1. No node is executed without a clear objective.
2. No more than one active node at a time.
3. AI does not make irreversible decisions.
4. Every node leaves learning.
5. The methodology can change, but only consciously.

## Conventions
- Node IDs: `NV-001`, `NV-002`, ...
- States: `Pending | In progress | Validated | Discarded`
- Dates: `YYYY-MM-DD`

---

**Suggestion:** use GitHub/GitLab Issues/Projects only as a view; the source of truth is this repository (Markdown).

## Repository governance files
- `LICENSE`: MIT license (you can change it if needed).
- `CONTRIBUTING.md`: contribution guide.
- `CHANGELOG.md`: change history.
- `.github/workflows/markdown-check.yml`: basic structure verification in GitHub Actions (optional).

## Multi-language support
This repository supports multiple languages. Currently available:
- English (primary): `README.md`, `CONTRIBUTING.md`, all main templates
- Spanish: `README.es.md`, `CONTRIBUTING.es.md`, Spanish templates in `locales/es/`

### Setting up your preferred language
Use the locale setup script to configure templates in your preferred language:

```bash
node scripts/setup_locale.js en  # For English
node scripts/setup_locale.js es  # For Spanish
```

### Contributing translations
We welcome translations to make HAFI accessible worldwide. To contribute:
1. See `CONTRIBUTING.md` for detailed guidelines
2. Follow the translation structure in `locales/` directory
3. Submit a PR with your translations

### Language structure
```
locales/
├── en/ (English - source language)
│   ├── templates/ (English templates)
│   └── docs/ (English documentation)
└── es/ (Spanish)
    ├── templates/ (Spanish templates)
    └── docs/ (Spanish documentation)
```

---

*Looking for the Spanish version? See [README.es.md](README.es.md)*
