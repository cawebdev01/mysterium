import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**  pages **/
import { GamePage } from '../game/game'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) { }
  public game(){
    console.log("Nouvelle Partie");
    this.navCtrl.push(GamePage);
  }
}
