import { Angular4MaterialFrontendPage } from './app.po';

describe('angular4-material-frontend App', () => {
  let page: Angular4MaterialFrontendPage;

  beforeEach(() => {
    page = new Angular4MaterialFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
