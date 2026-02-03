// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Manejo global de excepciones no capturadas.
// Ignora errores provenientes de scripts cross-origin (p. ej. "Script error")
// pero los registra en la consola para facilitar el debugging.
Cypress.on('uncaught:exception', (err) => {
	const msg = err && err.message ? err.message : ''
	if (msg.includes('Script error') || msg.toLowerCase().includes('cross origin')) {
		// Registrar para depuración y evitar que el test falle por CORS externos
		// eslint-disable-next-line no-console
		console.warn('Ignored cross-origin error in test:', msg)
		return false
	}
	// Para otros errores, dejar que fallen los tests
})