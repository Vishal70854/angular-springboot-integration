import { Component, signal } from '@angular/core';
import { Book } from './book/book';

@Component({
  selector: 'app-root',
  imports: [ Book],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Spring Boot + Angular -> @Get Method';
}
