import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { CreateBookComponent } from './create-book/create-book.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
