import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book{
  
  books$!: Observable<any[]>;
  
  constructor(private service: BookService) {
    this.books$ = this.service.getBooks();
  }
  
  // ngOnInit(): void {
  // console.log('ngOnInit fired');

  // this.service.getBooks().subscribe({
  //     next: data => {
  //       console.log('API response:', data);
  //       this.books = data;
  //     },
  //     error: err => {
  //       console.error('HTTP ERROR:', err);
  //     }
  //   });
  // }


  // ngOnInit(): void {
  //   this.service.getBooks().subscribe(data => {
  //     this.books = data;
  //   });
  // }    
}
