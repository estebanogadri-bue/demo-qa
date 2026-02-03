class FormPage {
  elements = {
    formTitle: () => cy.contains('h5', 'Student Registration Form'),
    firstName: () => cy.get('#firstName'),
    lastName: () => cy.get('#lastName'),
    email: () => cy.get('#userEmail'),
    mobile: () => cy.get('#userNumber'),
    dateOfBirth: () => cy.get('#dateOfBirthInput'),
    subjects: () => cy.get('#subjectsInput'),
    uploadPicture: () => cy.get('#uploadPicture'),
    address: () => cy.get('#currentAddress'),
    stateInput: () => cy.get('#react-select-3-input'),
    cityInput: () => cy.get('#react-select-4-input'),
    submit: () => cy.get('#submit'),
    genderLabel: (gender) => cy.contains('.custom-control-label', gender),
    hobbyLabel: (hobby) => cy.contains('.custom-control-label', hobby),
  }

  visit() {
    cy.visit('/')
  }

  
  fillName(firstName, lastName) {
    this.elements.firstName().clear().type(firstName)
    this.elements.lastName().clear().type(lastName)
  }

  fillEmail(email) {
    this.elements.email().clear().type(email)
  }

  selectGender(gender) {
    this.elements.genderLabel(gender).click()
  }

  fillMobile(mobile) {
    this.elements.mobile().clear().type(mobile)
  }

  selectDateOfBirth(date) {
    this.elements.dateOfBirth().click()
    cy.get(`.react-datepicker__day[aria-label="${date}"]`).click()
  }

  addSubjects(subjects = []) {
    subjects.forEach((s) => this.elements.subjects().type(`${s}{enter}`))
  }

  selectHobbies(hobbies = []) {
    hobbies.forEach((h) => this.elements.hobbyLabel(h).click())
  }

  uploadFile(fileName) {
    this.elements.uploadPicture()
      .scrollIntoView()
      .selectFile(`cypress/fixtures/${fileName}`, { force: true })
  }

  fillAddress(address) {
    this.elements.address().clear().type(address)
  }

selectStateCity(state, city) {
  // STATE: clic en el contenedor para darle foco
  cy.get('#state').scrollIntoView().click()
  cy.get('#react-select-3-input').type(`${state}{enter}`)

  // CITY: clic en el contenedor para darle foco
  cy.get('#city').click()
  cy.get('#react-select-4-input').type(`${city}{enter}`)
}

  submitForm() {
    this.elements.submit().scrollIntoView().click({ force: true })
  }
}

export default new FormPage()
