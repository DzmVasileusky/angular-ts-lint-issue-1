import { Component } from '@angular/core';
import { SomeService } from './some.service';

@Component({
  selector: 'hello',
  template: `<h1>{{prop}}</h1>`
})
export class HelloComponent  {
	get prop () {
		return this.someService.someProp;
	}
  constructor(private someService: SomeService) {}
}
