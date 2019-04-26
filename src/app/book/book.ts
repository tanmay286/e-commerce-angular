export class Auhtor{
    firstName:string;
    lastName:string;
}

export class Book {
    bookId:number;
    imageUrl:string;
    title:string;
    authors: Auhtor[];
    category: string;
    publisher: string;
    noOfPages: number;
    rating: number;
    edition: number;
    price:number;
    releaseDate:Date;
}