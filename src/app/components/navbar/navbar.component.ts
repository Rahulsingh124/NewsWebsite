import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();
  menuOpen = false; 

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  navigateToCategory(category: string) {
    this.categorySelected.emit(category);
    this.menuOpen = false; 
    //  Force UI update
    this.cdr.detectChanges(); 
  }

  toggleMenu() {
    //  Toggle menu open/close hogi
    this.menuOpen = !this.menuOpen; 
    console.log("Menu Open:", this.menuOpen);
    this.cdr.detectChanges(); 
  }
}
