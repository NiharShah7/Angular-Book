import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDisplayComponent } from './book-list-display.component';

describe('BookListDisplayComponent', () => {
  let component: BookListDisplayComponent;
  let fixture: ComponentFixture<BookListDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListDisplayComponent]
    });
    fixture = TestBed.createComponent(BookListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
