import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  template: `<div>
    <a href="/">Angular 2 App</a> |
    <a href="#/demo">Angular JS</a>
    <h1>this is from angular app</h1>
  <div ng-view></div>
</div>`
})
export class DemoComponent {}
