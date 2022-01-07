import { Component } from '@angular/core';

@Component({
  selector: 'nxworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'employee';
  display!: boolean;
  display1!: boolean;
  onPress1() {
    this.display = !this.display;
  }
  onPress2() {
    this.display1 = !this.display1;
  }
}
