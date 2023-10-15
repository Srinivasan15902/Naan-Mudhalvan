import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private service:OrderDetailsService){}
  foodData: any;
  value: any;

  ngOnInit(): void {
      this.foodData= this.service.foodDetails;
      this.value=this.foodData.value;
  }

}
