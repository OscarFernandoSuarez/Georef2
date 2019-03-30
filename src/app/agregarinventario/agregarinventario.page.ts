import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Marcador } from '../class/marcador';

@Component({
  selector: 'app-agregarinventario',
  templateUrl: './agregarinventario.page.html',
  styleUrls: ['./agregarinventario.page.scss'],
})
export class AgregarinventarioPage implements OnInit {
  marcadores : Marcador[] = [];
  lat = 4.60972222222;  
  lng = -74.0816666667;

  constructor(
    private navController : NavController,
  ) {
   }

  ngOnInit() { 
  }


  mobiliario(){
    console.log("Hola estoy en mobiliario");
    this.navController.navigateForward('list');

  }

  arboles(){
    console.log("Hola estoy en el metodo arboles");
    this.navController.navigateForward('arboles');
  }
}
