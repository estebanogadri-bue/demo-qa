# Cypress E2E Automation – DemoQA Form

Proyecto de **QA Automation E2E** desarrollado con **Cypress**, enfocado en buenas prácticas de testing, priorización por riesgo y validación de flujos críticos de negocio.

El objetivo no es “automatizar por automatizar”, sino **detectar defectos que generen impacto real en la experiencia del usuario**.

---

## Alcance del Proyecto

El proyecto automatiza el formulario **DemoQA – Practice Form**, cubriendo:

- Smoke tests (validación rápida de disponibilidad y reglas críticas)
- Regression E2E (flujo completo de envío de formulario)
- Validaciones positivas y negativas
- Manejo de componentes complejos (React Select, DatePicker, Upload)
- Validaciones HTML5 nativas

---

## Stack Tecnológico

- **Cypress**
- **JavaScript**
- **Page Object Model (POM)**
- **Fixtures para datos de prueba**
- **Custom Commands**
- **Validaciones de negocio (UI + HTML5)**

---

## Estructura del Proyecto

demo-qa/
├─ cypress/
│  ├─ e2e/
│  │  ├─ regression/
│  │  │  └─ form-e2e.cy.js
│  │  └─ smoke/
│  │     └─ form-smoke.cy.js
│  ├─ fixtures/
│  │  ├─ formData.json
│  │  └─ sample.jpg
│  ├─ pages/
│  │  ├─ ConfirmationModal.js
│  │  └─ FormPage.js
│  └─ support/
│     ├─ commands.js
│     └─ e2e.js
├─ node_modules/
├─ .gitignore
├─ cypress.config.js
├─ package-lock.json
├─ package.json
└─ README.md


---

Estrategia de Testing

Smoke Tests
-Validan que la aplicación:
-Carga correctamente
-Bloquea el submit con campos obligatorios vacíos
-Aplica validaciones HTML5

Se ejecutan rápido y son ideales para CI/CD.

Regression E2E
-Valida el flujo completo:
-Completar formulario con datos válidos
-Enviar el formulario

Verificar el resumen en el modal final

---

Buenas Prácticas Aplicadas

Separación clara entre test logic y UI selectors
Reutilización mediante Page Object Model
Uso de fixtures para evitar hardcodeo
Evitar force: true salvo en casos justificados
Validaciones estables (sin depender de foco, colores o CSS)

---

Proyecto desarrollado como parte de un plan de crecimiento profesional en QA Automation / SDET, con foco en calidad, riesgo y producto.

Siempre abierto a feedback técnico y mejora continua.

---

Autor

Esteban Ogadri
estebanogadri@gmail.com
QA Analyst - QA Automation