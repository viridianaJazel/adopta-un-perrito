import { Injectable } from '@angular/core';

import { Dog } from './dog';
import { DOGS } from './dogs-json';

@Injectable()
export class DogService {
  getDogsList(): Dog[] {
  	return DOGS;
  }
  
}
