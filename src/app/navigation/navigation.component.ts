import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = "Navigation Bar" 
  }

}
