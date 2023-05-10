import { Content } from './Content';

describe('Notification Content', () => {
  it('Should be able to create content', () => {
    const content = new Content('Voçê recebeu uma solicitação  de amizade');
    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('Should not be able to create a notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
