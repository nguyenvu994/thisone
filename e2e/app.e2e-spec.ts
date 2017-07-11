import { Myaapp1Page } from './app.po';

describe('myaapp1 App', () => {
  let page: Myaapp1Page;

  beforeEach(() => {
    page = new Myaapp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
