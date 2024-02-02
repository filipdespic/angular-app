import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  serverCreated = false;
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer  = true;
    },2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
