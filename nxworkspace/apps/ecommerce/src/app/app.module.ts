import { TestLibComponent } from './../../../../libs/core/src/lib/test-lib/test-lib.component';
//import { CoreModule } from './../../../../libs/core/src/lib';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CoreModule } from '@nxworkspace/core';
import { InventoryComponent } from './inventory/inventory.component';




@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ProductComponent, InventoryComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
