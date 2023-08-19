import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { BookListDisplayComponent } from './Components/book-list-display/book-list-display.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { SearchBookComponent } from './Components/search-book/search-book.component';

const routes: Routes = [

{path: "" ,component:BookListDisplayComponent },
{path:"addbook" , component:AddBookComponent},
{path:"listOfBooks",component:BookListDisplayComponent},
{path:"searchbook",component:SearchBookComponent},
      
{path:"updatebook/:bookid",component:UpdateBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
