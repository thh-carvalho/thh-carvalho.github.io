import { Component } from '@angular/core';
import { animate, trigger, transition, style } from '@angular/animations'

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
])

const fadeIn = trigger("fadeIn", [enterTransition]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations:[fadeIn]
})
export class AboutComponent {

}
