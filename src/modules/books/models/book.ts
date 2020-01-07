export default interface Book {
    isbn: string;
    title: string;
    author: string;
    imageUrl: string;
    tagline: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    id?: number;
}
