import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _dbUrl = "https://efa-jsred-bookapi.herokuapp.com/books"

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(this._dbUrl)
  }
}
