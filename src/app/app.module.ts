import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations:[
    DemoComponent
  ],
  bootstrap:[
    DemoComponent
  ]
})
export class AppModule {
}
