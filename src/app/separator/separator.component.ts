
// Import component decorator
import { Component } from '@angular/core';

@Component({
  selector: 'separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
  
})

// Component class
export class SeparatorComponent {
	title: string = '¿Sabías que los dueños de perros son menos propensos a sufrir de depresión?';
	icon: string = 'fa fa-4x fa-heart';
}
