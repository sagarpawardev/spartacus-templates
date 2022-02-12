import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { BannerModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    CustomBannerComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        }
      },
    }),
  ]
})
export class CustomModule { }
