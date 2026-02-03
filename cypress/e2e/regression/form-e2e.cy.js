import FormPage from '../../pages/FormPage'
import ConfirmationModal from '../../pages/ConfirmationModal'

describe('Regression - DemoQA Form (E2E)', () => {
  it('debe enviar el formulario con datos válidos y mostrar el resumen', () => {
    cy.fixture('formData').then(({ valid }) => {
      FormPage.visit()
      FormPage.elements.formTitle().should('be.visible')

      FormPage.fillName(valid.firstName, valid.lastName)
      FormPage.fillEmail(valid.email)
      FormPage.selectGender(valid.gender)
      FormPage.fillMobile(valid.mobile)
      FormPage.addSubjects(valid.subjects)
      FormPage.selectHobbies(valid.hobbies)
      FormPage.uploadFile(valid.picture)
      FormPage.fillAddress(valid.address)
      FormPage.selectStateCity(valid.state, valid.city)

      FormPage.submitForm()

      // Validación de negocio (modal)
      ConfirmationModal.assertVisible()
      ConfirmationModal.assertRow('Student Name', `${valid.firstName} ${valid.lastName}`)
      ConfirmationModal.assertRow('Student Email', valid.email)
      ConfirmationModal.assertRow('Gender', valid.gender)
      ConfirmationModal.assertRow('Mobile', valid.mobile)
      ConfirmationModal.assertRow('Subjects', valid.subjects.join(', '))
      ConfirmationModal.assertRow('Hobbies', valid.hobbies.join(', '))
      ConfirmationModal.assertRow('Picture', valid.picture)
      ConfirmationModal.assertRow('Address', valid.address)
      ConfirmationModal.assertRow('State and City', `${valid.state} ${valid.city}`)

      ConfirmationModal.close()
    })
  })
})
