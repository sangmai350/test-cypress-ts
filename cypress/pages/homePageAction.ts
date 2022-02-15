import { CommonAction } from './commonAction';
export class HomePageAction extends CommonAction {
  gotoHomePage() {
    cy.log('Go to home page')
      .visit('https://sandbox-cypress.cs43.force.com/s/');
    return this;
  }

  inputSearchField(text: string) {
    cy.log('Input search field')
    return this.inputTextField('form[type="search"] input', text)
  }

  clickSearchBtn() {
    cy.log('Click Search btn')
    this
      .clickElement('button[title="Search"].search-button', true)
    
    // bypass search popup
    cy.get('body')
      .click(0, 0)

    return this;
  }

  clickContactSupportBtn() {
    cy.log('Click Contact Support btn')
    return this
      .clickElementOnText('#contactSupport button', 'Contact Support')
  }
}
