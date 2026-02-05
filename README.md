# Cypress E2E Automation – DemoQA Form

Framework de **QA Automation E2E** desarrollado con **Cypress**, orientado a **calidad con foco en negocio**, priorización por riesgo y validación de flujos críticos.

> El objetivo no es “automatizar por automatizar”, sino **detectar defectos que impactan en la experiencia del usuario y en la confiabilidad del producto**.

---

## Objetivo del Proyecto

Automatizar el formulario **DemoQA – Practice Form** aplicando buenas prácticas reales de QA Automation:

- Priorización por riesgo
- Separación clara entre lógica de test y UI
- Tests estables, mantenibles y escalables
- Diseño preparado para CI/CD

---

## Alcance de Testing

### Smoke Tests
Validaciones rápidas para asegurar que la aplicación:

- Carga correctamente
- Bloquea el submit con campos obligatorios vacíos
- Aplica validaciones HTML5 nativas

> Pensados para ejecución rápida en pipelines CI/CD.

### Regression E2E
Validación del flujo completo de negocio:

- Completar el formulario con datos válidos
- Enviar el formulario
- Verificar el resumen final en el modal de confirmación

Incluye:
- Casos positivos y negativos
- Manejo de componentes complejos (React Select, DatePicker, Upload)

---

## Arquitectura y Buenas Prácticas

- **Page Object Model (POM)** para desacoplar UI de la lógica de test
- **Fixtures** para evitar hardcodeo de datos
- **Custom Commands** para acciones reutilizables
- Selectores estables y semánticos
- Evitar `force: true` salvo casos justificados
- Aserciones orientadas a comportamiento, no a estilos

---

## Stack Tecnológico

- Cypress
- JavaScript
- E2E Testing
- Page Object Model (POM)
- Fixtures & Custom Commands
- HTML5 Validations
- Git

---

## Estructura del Proyecto

demo-qa/
├─ cypress/
│ ├─ e2e/
│ │ ├─ smoke/
│ │ │ └─ form-smoke.cy.js
│ │ └─ regression/
│ │ └─ form-e2e.cy.js
│ ├─ fixtures/
│ │ ├─ formData.json
│ │ └─ sample.jpg
│ ├─ pages/
│ │ ├─ FormPage.js
│ │ └─ ConfirmationModal.js
│ └─ support/
│ ├─ commands.js
│ └─ e2e.js
├─ cypress.config.js
├─ package.json
├─ .gitignore
└─ README.md

---

## Autor

Esteban Ogadri
QA Analyst | QA Automation
estebanogadri@gmail.com

Proyecto desarrollado como parte de un plan de crecimiento profesional hacia QA Automation / SDET, con foco en calidad, riesgo y producto.

Siempre abierto a feedback técnico y mejora continua.