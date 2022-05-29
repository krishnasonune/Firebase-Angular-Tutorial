import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebasee';

  links = [
      {path: 'main', label: 'Read / Write', icon: 'edit_note'},
      {path: 'home', label: 'Authentication', icon: 'lock'},
      {path: 'storage', label: 'Storage', icon: 'folder_open'}
  ]

}
