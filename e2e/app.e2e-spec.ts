import { LfelipaPage } from './app.po';

describe('lfelipa App', function() {
  let page: LfelipaPage;

  beforeEach(() => {
    page = new LfelipaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
