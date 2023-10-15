import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  text: any;
  varo = "jgkdjgkl";
  constructor(private serv:OrderDetailsService){}

  ngOnInit() {
    this.text = this.serv.text;
  }

}
