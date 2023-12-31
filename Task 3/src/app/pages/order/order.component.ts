import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  getMenuId : any;
  menuData: any;
  constructor(private param:ActivatedRoute,private service:OrderDetailsService){

  }
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData = this.service.foodDetails.filter((value)=>
        {return value.id == this.getMenuId;}
      )
    }
  }

}
