
// Import component decorator
import { Component } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
   providers: [DogService]
  
})

// Component class
export class DogListComponent {
  dogs = [];

   constructor(private dogService: DogService) { }

   getDogs(): void {
    this.dogs = this.dogService.getDogsList();
  }
  ngOnInit(): void {
    this.getDogs();
  }

}

