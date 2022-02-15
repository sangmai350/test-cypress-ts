import { CommonAction } from './commonAction';

export class SearchPageAction extends CommonAction {

  navigateItemLeftMenu(item: string) {
    cy.log(`Navigate to ${item}`)
    return this
      .clickElement(`a[title="${item}"]`, true)
  }

  selectResult() {
    cy.log('Click search result')
      .wait(1000)
    cy.xpath('//knowledgeui-result-stencil//p//a')
      .should('be.visible')
      .click({ force: true})
    
    return this;
  }

  closePopup() {
    cy.log('Close the popup')
    return this
      .clickElement('.modal-header button')
  }
}
