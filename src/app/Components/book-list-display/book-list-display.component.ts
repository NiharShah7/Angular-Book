import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/book-service.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-book-list-display',
  templateUrl: './book-list-display.component.html',
  styleUrls: ['./book-list-display.component.css']
})
export class BookListDisplayComponent implements OnInit {

  constructor(private bookservie: BookServiceService , private router:Router,private acrouter2 : ActivatedRoute) { }
  
  books: Books[] = [];
  book:Books=new Books();


 


  ngOnInit(): void {

    this.bookservie.getAllBooks().subscribe(data => {
      this.books = data;
    })
  }

  UpdateBooks(bookid:number){

      console.log("book id is  = "+bookid);
      this.router.navigate(["updatebook",bookid]);
  }

  deletebook(){
    console.log(this.book);

    this.bookservie.deletebookinDB(this.book).subscribe(data=>{
      alert("Records Deleted Sucessfully........."+data)
      this.router.navigate([""]);
    },error=>alert("Sorry unable to insert data..."));
  }





}
