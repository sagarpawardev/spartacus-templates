import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomOrderDetailsOverviewComponent } from './custom-order-details-overview/custom-order-details-overview.component';
import { ConfigModule } from '@spartacus/core';
import { OrderDetailsModule } from '@spartacus/order/components';



@NgModule({
  declarations: [
    CustomOrderDetailsOverviewComponent
  ],
  imports: [
    CommonModule,
    OrderDetailsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AccountOrderDetailsShippingComponent: {
          component: CustomOrderDetailsOverviewComponent,
        },
      },
    }),
  ]
})
export class CustomModule { }
