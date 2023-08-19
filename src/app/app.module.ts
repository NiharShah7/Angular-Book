import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { BookListDisplayComponent } from './Components/book-list-display/book-list-display.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { SearchBookComponent } from './Components/search-book/search-book.component';
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookListDisplayComponent,
    UpdateBookComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
