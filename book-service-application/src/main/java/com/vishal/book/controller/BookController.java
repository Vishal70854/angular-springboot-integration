package com.vishal.book.controller;
import com.vishal.book.dto.Book;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping
public class BookController {

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/findAllBooks")
    public List<Book> getBooks() {
        return Stream.of(
                new Book(101,"Java",999),
                new Book(102,"Golang",234),
                new Book(103,"C#",543),
                new Book(104,"Python",656),
                new Book(105,"Ruby",754),
                new Book(106,"Nodejs",399)
        ).collect(Collectors.toList());
    }
}
