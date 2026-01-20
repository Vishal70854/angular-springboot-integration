import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit{
  
  books:any;
  
  constructor(private service:BookService){}
  ngOnInit(): void {
    this.service.getBooks().subscribe((data: any) => {
      this.books = data;
    });
  }


}
