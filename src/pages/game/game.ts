import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  title; players; level;
  game = { players:'', level:'0'};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) 
    { 
      this.title = "Nouvelle partie";
    }
  createGame(){
    this.players = this.game.players;
    this.level = this.game.level;
    console.log(this.game);
    //this.game.level; 
  }
}
