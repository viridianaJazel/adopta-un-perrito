
// Import component decorator
import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
  
})

// Component class
export class HeroComponent {
	title: string = '¡Adopta un perrito!';
	description: string = 'Aquí podrás encontrar algunos perritos esperando un hogar. No esperes más y conoce a tu próximo mejor amigo';
}
