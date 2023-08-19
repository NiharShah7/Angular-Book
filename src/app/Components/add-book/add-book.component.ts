import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  book:Books=new Books();

  constructor(private bookservie:BookServiceService){}
  ngOnInit(): void {
  
  }
  addbooks(){
    console.log(this.book);

    this.bookservie.addbooksinDB(this.book).subscribe(data=>{
      alert("Records Added Sucessfully........."+data)
    },error=>alert("Sorry unable to insert data..."));
  }

  deletebook(){
    console.log(this.book);

    this.bookservie.deletebookinDB(this.book).subscribe(data=>{
      alert("Records Added Sucessfully........."+data)
    },error=>alert("Sorry unable to insert data..."));
  }
}
