
import { CommonModule  } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();
  //List of available categories that users can select from
  categories = ['general', 'entertainment', 'science', 'health', 'business', 'technology'];

  constructor(private router: Router) {}

  selectCategory(category: string) {
    console.log(`Navigating to category: ${category}`);
      // Emitting the selected category to the parent component
    this.categorySelected.emit(category);  
    
  }
}