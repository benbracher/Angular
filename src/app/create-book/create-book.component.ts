import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  useBtn: boolean = false
  createBook: FormGroup
  books: Array<any> = []

  constructor(private _fb: FormBuilder) { 
    setTimeout(() => {
      this.useBtn = true
    }, 3000)
  }

  ngOnInit() {
    this.createBook = this._fb.group({
      nameOfBook: new FormControl(),
      author: new FormControl(),
      genre: new FormControl(),
      pubYear: new FormControl(),
      rating: new FormControl()
    })

    this.onFindBooks()
  }

  onCreateBook() : void{
    this.books.push(this.createBook.value)
  }

  onFindBooks(): void {

  }
}
