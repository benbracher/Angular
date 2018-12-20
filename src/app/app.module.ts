import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatabaseService } from './services/database.service';

// ng g c "" in command line makes new terminal

@NgModule({
  declarations: [
    AppComponent,
    DisplayBooksComponent,
    CreateBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
