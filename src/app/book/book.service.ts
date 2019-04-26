import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable()

export class BookService {

    baseUrl = "http://10.246.93.33:8000/";

    constructor(private http:HttpClient){}

    findBookbycategory(category: string) : Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl +"books/"+category);
    }

    findBookbyId(bookId: number) : Observable<Book> {
        return this.http.get<Book>(this.baseUrl +"book/" + bookId);

    }
}