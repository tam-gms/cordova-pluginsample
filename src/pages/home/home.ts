import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goSearchPage() {
  cordova.plugins.CustomPlugin.PrintLog(function(res){
   //success
   this.navCtrl.push(SearchPage);
 }, function(err){
      //error
 }, "beep")
    }
}
