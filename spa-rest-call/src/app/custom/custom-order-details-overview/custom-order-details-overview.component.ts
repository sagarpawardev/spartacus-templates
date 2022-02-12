import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConverterService, Occ, OccEndpointsService } from '@spartacus/core';
import { ORDER_HISTORY_NORMALIZER } from '@spartacus/order/core';
import { OrderFacade } from '@spartacus/order/root';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-order-details-overview',
  templateUrl: './custom-order-details-overview.component.html',
  styleUrls: ['./custom-order-details-overview.component.scss'],
})
export class CustomOrderDetailsOverviewComponent implements OnInit {
  constructor(
    protected orderService: OrderFacade,
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {
  }

  orderList$: Observable<any>;

  ngOnInit() {
    //TODO: Option 1 Call exisiting service
    this.orderList$ = this.orderService.getOrderHistoryList(5);
    this.orderList$.subscribe(order => {
      console.log("%c service call: ", "color:red;", order);
    });
    
    //TODO: Option 2 Call occ api directly with normalization
    const params: { [key: string]: string } = {};
    const userId = "current";
    const url = this.occEndpoints.buildUrl('orderHistory', {
      urlParams: { userId },
      queryParams: params,
    });
    this.http
      .get<Occ.OrderHistoryList>(url)
      .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER))
      .subscribe( order => {
        console.log("%c http call (with normalization): ",  "color:green;", order);
      });


    //TODO: Option 3
    this.http
      .get<Occ.OrderHistoryList>(url)
      .subscribe( order => {
        console.log("%c http call: ",  "color:blue;", order);
      });

  }
}
