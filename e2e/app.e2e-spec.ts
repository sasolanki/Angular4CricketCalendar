import { Angular4CricketPage } from './app.po';

describe('angular4-cricket App', () => {
  let page: Angular4CricketPage;

  beforeEach(() => {
    page = new Angular4CricketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
