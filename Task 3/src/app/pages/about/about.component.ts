import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  var3=" ";

  constructor(private serv:OrderDetailsService){}

  ngOnInit(){


  }
   send(var3:string){
    
    this.serv.value(this.var3);
   }

}
