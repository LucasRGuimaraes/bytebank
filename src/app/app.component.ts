import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  newTransfer: any ={};

  transfer($event: any) {
    this.newTransfer = $event
  }
}
