import { CommonAction } from './commonAction';

export class ContactPageAction extends CommonAction {

  inputSubjectField(text: string) {
    cy.log('Input Subject Field')
    cy.xpath('//input[@name="Subject"]')
      .should('exist')
      .clear()
      .type(text)
    return this;
  }

  inputDescriptionField(text: string) {
    cy.log('Input Description Field')
    cy.xpath('//textarea[@name="Description"]')
    .should('exist')
    .clear()
    .type(text);
    return this;
  }

  inputWebField(text: string) {
    cy.log('Input Web Field')
    cy.xpath('//input[@name="SuppliedEmail"]')
    .should('exist')
    .clear()
    .type(text)
    return this;
  }

  clickSubmitBtn() {
    cy.log('Click Submit btn')
    return this
      .clickElement('#submitButton')
  }

}