import { Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-root',
  template: `<nx-workspace-product-list></nx-workspace-product-list> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
}
