# HAFI Repo Base (v1.0)

Repositorio base para operar la metodología **HAFI (Human‑AI Full‑Stack Iterative)** en proyectos donde una persona aumentada por IA actúa como unidad completa de desarrollo.

## Estructura
```
/hafi-project
├── 00_direction/ (dirección)
├── 01_backlog/ (backlog)
│   ├── value_node_template.md
│   └── nodos/ (nodos de valor)
├── 02_execution/ (ejecución)
│   └── ciclos/ (ciclos)
├── 03_validation/ (validación)
├── 04_learning/ (aprendizaje)
├── 05_methodology/ (metodología)
└── README.md
```

## Cómo usar (operación mínima)
1. Completa `00_direction/vision.md`, `metrics.md` y `risks.md`.
2. Crea un Nodo de Valor en `01_backlog/nodos/` copiando `01_backlog/value_node_template.md`.
3. Ejecuta el ciclo en `02_execution/ciclos/`.
4. Registra validación en `03_validation/`.
5. Registra aprendizaje en `04_learning/retrospectives.md`.
6. Si cambias el proceso, registra el cambio en `05_methodology/changes.md`.

## Reglas HAFI
1. Ningún nodo se ejecuta sin objetivo claro.
2. No más de un nodo activo a la vez.
3. La IA no toma decisiones irreversibles.
4. Todo nodo deja aprendizaje.
5. La metodología puede cambiar, pero solo conscientemente.

## Convenciones
- IDs de Nodos: `NV-001`, `NV-002`, ...
- Estados: `Pendiente | En progreso | Validado | Descartado`
- Fechas: `YYYY-MM-DD`

---

**Sugerencia:** usa Issues/Projects de GitHub/GitLab solo como vista; la fuente de verdad es este repositorio (Markdown).

## Archivos de gobierno del repositorio
- `LICENSE`: licencia MIT (puedes cambiarla si lo necesitas).
- `CONTRIBUTING.md`: guía de contribución.
- `CHANGELOG.md`: historial de cambios.
- `.github/workflows/markdown-check.yml`: verificación básica de estructura en GitHub Actions (opcional).
