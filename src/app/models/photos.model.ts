export class Photo {
  public author: string;
  public category: string;
  public imagePath: string;
  public content: string;
  public loveIts: number;
  public created_at: Date;


  constructor(author: string, category: string, imagePath: string, content: string, loveIts: number, created_at: Date) {
    this.author = author;
    this.category = category;
    this.imagePath = imagePath;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}
