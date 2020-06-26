import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {  

  mediasub: Subscription;

  private mobile: Subject<any> = new Subject<any>(); 
  private tablet: Subject<any> = new Subject<any>(); 
  private pc: Subject<any> = new Subject<any>(); 

  public mobileObs = this.mobile.asObservable();
  public tabletObs = this.tablet.asObservable();
  public pcObs = this.pc.asObservable();

  constructor(public mediaObserver:MediaObserver) {
    this.getResolution();
}
  public getResolution(): void {
    this.mediasub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.mobile.next(result.mqAlias === 'xs' ? true : false);
        this.tablet.next(result.mqAlias === 'sm' ? true : false);
        this.pc.next(result.mqAlias === 'md' ? true : false);
      }
    )
  }

}
