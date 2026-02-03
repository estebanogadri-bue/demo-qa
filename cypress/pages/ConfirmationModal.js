class ConfirmationModal {
  elements = {
    title: () => cy.get('#example-modal-sizes-title-lg'),
    table: () => cy.get('.table-responsive'),
    closeBtn: () => cy.get('#closeLargeModal'),
  }

  assertVisible() {
    this.elements.title().should('be.visible').and('contain.text', 'Thanks for submitting the form')
  }

  assertRow(label, value) {
    this.elements.table()
      .contains('td', label)
      .siblings()
      .should('contain.text', value)
  }

  close() {
    this.elements.closeBtn().click({ force: true })
  }
}

export default new ConfirmationModal()
