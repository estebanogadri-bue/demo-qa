import FormPage from '../../pages/FormPage'

describe('Smoke - Form @smoke', () => {
  beforeEach(() => {
    FormPage.visit('/')  })

  it('debe cargar el formulario', () => {
    FormPage.elements.formTitle().should('be.visible')
  })

  it('debe permitir escribir datos básicos del usuario', () => {
    cy.fixture('formData').then(({ valid }) => {
      FormPage.elements.firstName().type(valid.firstName)
      FormPage.elements.lastName().type(valid.lastName)
      FormPage.elements.email().type(valid.email)
      FormPage.elements.genderLabel(valid.gender).click()
      FormPage.elements.mobile().type(valid.mobile)

      // Verificaciones simples
      FormPage.elements.firstName().should('have.value', valid.firstName)
      FormPage.elements.email().should('have.value', valid.email)
    })
  })

  it('no debe enviar el formulario con campos obligatorios vacíos', () => {
    FormPage.elements.submit().scrollIntoView().click({ force: true })

    // No se envía el formulario
    cy.get('#example-modal-sizes-title-lg').should('not.exist')

    // Campos requeridos inválidos (HTML5)
    cy.get('#lastName:invalid').should('exist')
    cy.get('#userNumber:invalid').should('exist')

    // Gender no seleccionado
    cy.get('input[name="gender"]').should('not.be.checked')
  })
})