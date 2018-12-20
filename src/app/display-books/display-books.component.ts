import {Component, Input} from '@angular/core'

@Component ({
    selector: 'app-display-books',
//     template: `<h1>This Display Books Component is Working!</h1>`,
    templateUrl: './display-books.component.html',
    styleUrls: ['./display-books.component.css'], 

})

export class DisplayBooksComponent {
    scroll = {}

    @Input()
    get livro(): any {
        return this.scroll
    }

    set livro(script : any) {
        this.scroll = (script)
    }
}