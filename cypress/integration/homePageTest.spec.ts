import { HomePageAction } from '../pages/homePageAction';
import { SearchPageAction } from '../pages/searchPageAction';
import { ContactPageAction } from '../pages/contactPageAction';
import { CommonAction } from '../pages/commonAction';

describe('Home page', () => {

  const homePageAction = new HomePageAction();
  const searchPageAction = new SearchPageAction();
  const contactPageAction = new ContactPageAction();
  const commonAction = new CommonAction();

  it('Test case 1', () => {
    homePageAction
      .gotoHomePage()
      .inputSearchField('Los Angeles Rams')
      .clickSearchBtn()
    
    searchPageAction
      .navigateItemLeftMenu('Articles')
      .selectResult()
      .closePopup()
      .wait(1000)

    commonAction
      .isTextDisplayed('Article Number');
  })

  it('Test case 2', () => {
    homePageAction
      .gotoHomePage()
      .clickContactSupportBtn()

    contactPageAction
      .wait(2000)
      .inputSubjectField('Help!')
      .inputDescriptionField("I'm trying to do X, but I keep getting Z.")
      .inputWebField('test@mctest.com')
      .clickSubmitBtn()
    
    commonAction
      .isTextDisplayed('Your case was created.');
  })

});