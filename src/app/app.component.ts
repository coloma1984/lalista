import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'lalista-ng';
  /*deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;*/

  constructor(public authService: AuthService) { 
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    //this.mediasub.unsubscribe();
  }

  reloadPage(): void{
    window.location.reload();
  }

}


