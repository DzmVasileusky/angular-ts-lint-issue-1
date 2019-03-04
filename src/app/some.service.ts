import { Injectable, Renderer2 } from '@angular/core';

const propGenerator = function(text) {
  console.log(this.renderer);
  return text;
};

@Injectable()
export class SomeService {
  someProp: string = propGenerator.call(this, 'Hello');
  constructor(private renderer: Renderer2) {}
}
