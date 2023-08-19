import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/book-service.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {


 constructor(private bookservie: BookServiceService , private router:Router,private acrouter2 : ActivatedRoute) { }
 book:Books=new Books();



 ngOnInit(): void{
   
 }

 searchbook(){

   console.log(this.book.bookid);

   this.bookservie.getbookbyID(this.book.bookid).subscribe(data=>{
   
    this.book=data;
   
    this.router.navigate(['searchbook']);
   })
   console.log(this.book);
 }


  }

