import { TestProjPage } from './app.po';

describe('test-proj App', () => {
  let page: TestProjPage;

  beforeEach(() => {
    page = new TestProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
