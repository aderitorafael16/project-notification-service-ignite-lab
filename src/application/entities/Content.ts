export class Content {
  private readonly content: string;

  get Value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('content length error must be more than 5 ');
    }

    this.content = content;
  }
}
