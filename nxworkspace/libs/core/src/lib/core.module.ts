import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLibComponent } from './test-lib/test-lib.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TestLibComponent
  ],
  exports:[TestLibComponent]
})
export class CoreModule {}
