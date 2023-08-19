import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/book-service.service';
import { Books } from 'src/app/books';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{


  constructor(private acrouter : ActivatedRoute , private bookservie:BookServiceService , private router :Router){}
  book2:Books=new Books();

  bookid!: number;


  ngOnInit(): void{
    this.bookid=this.acrouter.snapshot.params['bookid'];
    console.log(this.bookid);

      this.bookservie.getbookbyID(this.bookid).subscribe(data=>{
        this.book2=data;
      })

      console.log("book data= "+this.book2)
  }


  updatebook() {
    console.log(this.book2)
      this.bookservie.updatebookdata(this.book2).subscribe(data=>{
        alert("Data Updated ...");
        this.router.navigate(['listOfBooks']);
      },error=>alert("SORRY UNABLE TO UPDATE..."))
  }
}
