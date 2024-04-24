import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [DatePipe]
})
export class FooterComponent {
  currentDateAndTime: string;

  constructor(private datePipe: DatePipe) {

    this.currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
}
