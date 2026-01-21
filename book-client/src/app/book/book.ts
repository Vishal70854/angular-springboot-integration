import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit{
  
  books: any;
  
  constructor(private service : BookService) {}
  ngOnInit(): void {
    console.log('Book component initialized');
    
    this.books = this.service.getBooks().subscribe(data => this.books=data);
    
    console.log('Book component executed!!')
  }


}
