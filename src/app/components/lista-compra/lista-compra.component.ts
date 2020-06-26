import { Component, OnInit, Input} from '@angular/core';
import { Router} from '@angular/router';
import { ApplicationStateService } from '../../services/application-state-service.service'


@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.scss']
})
export class ListaCompraComponent implements OnInit {

  elementos = [];
  new: string;
  listTitle: string; 
  list = [];
  activated: boolean = true;
  router: Router;
  toggle: boolean = true;
  spliced: boolean = false;

  deviceResolution: String = '';

  isMobile: boolean = true;
  isTablet: boolean;
  isPC: boolean;

  buttonStatus = 'Enable';

  constructor(public applicationStateService: ApplicationStateService) { 
    this.elementos = [];
    this.activated = false;
    this.getResolution();
  }

  defList(){
    this.elementos = ['Tomate', 'Lechuga', 'Cebolla', 'Manzana', 'Plátano', 'Frutos Secos', 'Pan', 'Agua', 'Leche', 'Vino', 'Cerveza'];
    this.activated = true;
    this.whenClicked = [false,false];
  }

  getResolution(): void{
    this.applicationStateService.mobileObs.subscribe((mobile) => {
      this.isMobile = mobile;
  })
    this.applicationStateService.tabletObs.subscribe((tablet) => {
      this.isTablet = tablet;
  })
    this.applicationStateService.pcObs.subscribe((pc) => {
      this.isPC = pc;
  })
  }

  activar(){
    this.activated = true;
  }

  clearNew(){
  }

  addElement(elemento){
    if (elemento.value != ''){
    this.elementos.push(elemento.value);
    console.log("Se ha introducido el elemento: "+ elemento.value);
    elemento.value = '';
    this.new ='';
    elemento.focus();
    this.whenClicked[this.elementos.length -1] = false;
    return false;
    }
  }
  deleteElement(elemento){
    this.spliced = false;
    console.log("Se ha eliminado el elemento: "+ elemento.value);
    for(let i=0; i< this.elementos.length; i++) {
      if(elemento == this.elementos[i]){
        this.elementos.splice(i,1);
        this.spliced = true;
      }
      if (this.spliced == true){
        this.whenClicked[i] = this.whenClicked[i+1];
        if (i == this.elementos.length -1){
          this.spliced = false;
        }
      }
    };
  }

  whenClicked = [false,false];

  tracked(item, index){
    return index;
  }

  ngOnInit() {
  }

}