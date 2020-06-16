import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'lalista-ng';
  mediasub: Subscription;
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;

  constructor(public mediaObserver:MediaObserver) { 
  }
  ngOnInit(): void {

    this.mediasub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
        this.deviceSm = result.mqAlias === 'sm' ? true : false;
        this.deviceMd = result.mqAlias === 'md' ? true : false;
      }
    )
  }
  ngOnDestroy(): void {
    this.mediasub.unsubscribe();
  }

  reloadPage(): void{
    window.location.reload();
  }

}


