import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showAlert = false;
  text = 'Show Alert';

  constructor() { }

  ngOnInit() {
  }

  openAlert() {
    if (!this.showAlert) {
      this.showAlert = true;
      this.text = 'Hide Alert';
    } else {
      this.showAlert = false;
      this.text = 'Show Alert';
    }

  }

}
