import { SCSitePage } from './app.po';

describe('scsite App', function() {
  let page: SCSitePage;

  beforeEach(() => {
    page = new SCSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
