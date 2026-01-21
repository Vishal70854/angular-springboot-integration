import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit{
  
  books: any[] = [];
  
  constructor(private http : HttpClient){}
  ngOnInit(): void {
    console.log('Book component initialized');
    
    let response = this.http.get<any[]>("http://localhost:9090/findAllBooks");
    response.subscribe((data) => this.books = data);
    
    console.log('Book component executed!!')
  }


}
