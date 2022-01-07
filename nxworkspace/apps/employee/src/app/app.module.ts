import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { ListMgrComponent } from './list-mgr/list-mgr.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { CoreModule } from '@nxworkspace/core';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListMgrComponent, ListStaffComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
