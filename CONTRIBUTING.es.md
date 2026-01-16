# Contribución

Gracias por contribuir a este repositorio base HAFI.

## Objetivo
Mantener un set de plantillas operativas simples, consistentes y versionables.

## Reglas de contribución
1. Mantén las plantillas en **Markdown** (sin dependencias).
2. Evita herramientas o flujos que amarren el repositorio a un proveedor específico.
3. Cualquier cambio debe incluir:
   - motivo (problema observado),
   - impacto esperado,
   - riesgo,
   - y registro en `05_methodology/changes.md`.

## Estructura (no romper)
- No renombrar carpetas principales (00_ a 05_) salvo en una versión mayor.
- Nuevos templates: agregar en la carpeta correspondiente y documentar en `README.md`.

## Estilo de plantillas
- Encabezados claros (`#`, `##`)
- Checklists para criterios
- Campos obligatorios explícitos

## Contribuciones de traducción
Damos la bienvenida a traducciones para hacer HAFI accesible en todo el mundo. Para contribuir con una traducción:

### Guías de traducción
1. **Nombres de archivos**: Usa códigos de idioma (ej: `README.es.md`, `vision.es.md`)
2. **Estructura de directorios**: Coloca traducciones en carpetas `locales/{código}/`
3. **Calidad**: Las traducciones deben ser precisas y mantener el significado original
4. **Consistencia**: Usa terminología consistente en todos los archivos traducidos

### Cómo enviar una traducción
1. Crea una nueva carpeta en `locales/` con el código ISO 639-1 del idioma
2. Agrega plantillas traducidas en `locales/{código}/templates/`
3. Agrega documentación traducida en `locales/{código}/docs/`
4. Actualiza el `README.md` principal para listar el nuevo idioma
5. Envía un PR con:
   - Lista de archivos traducidos
   - Información del idioma
   - Notas sobre adaptaciones culturales

### Idiomas actualmente soportados
- Inglés (principal): `README.md`, `CONTRIBUTING.md`
- Español: `README.es.md`, `CONTRIBUTING.es.md`

## Propuesta de cambios
Abre un PR con:
- resumen,
- archivos modificados,
- ejemplo de uso (si aplica),
- actualización de `CHANGELOG.md`.
