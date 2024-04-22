import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus: string = 'No server was created';
  serverName = 'tessst';

  constructor(){
    setTimeout(() => {
      console.log("executed");
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerMethod(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
