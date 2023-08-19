import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {




  baseURL = "http://localhost:8080/addbook";
  baseURL2 = "http://localhost:8080/deletebook";

  baseURL3 = "http://localhost:8080/showallbooks";

  baseURL4 = "http://localhost:8080/book"

  baseURL5=  "http://localhost:8080/updatebooks" 

  constructor(private httpclient: HttpClient) { }

  addbooksinDB(book: Books) {

    console.log(book);
    return this.httpclient.post(`${this.baseURL}`, book);
  }


  deletebookinDB(book: Books) {
    console.log(book);
    return this.httpclient.delete(`${this.baseURL2}` + "/" + book.bookid);
  }

  getAllBooks(): Observable<Books[]> {


    return this.httpclient.get<Books[]>(`${this.baseURL3}`);
  }

  getbookbyID(bookid: number): Observable<Books> {
    console.log(bookid);
    return this.httpclient.get<Books>(`${this.baseURL4}` + "/" + bookid);
  }

  updatebookdata(book2: Books):Observable<Books> {
    console.log("new data ="+book2)
    return this.httpclient.put<Books>(`${this,this.baseURL5}`,book2);
  }

}


