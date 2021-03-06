import { Component , OnDestroy} from '@angular/core';
import { NavController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy{

  constructor(public navCtrl: NavController, private dragulaService: DragulaService) {
    
    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        el.id = "zxczxczxcz";
        return source.id === 'left';
      },
      accepts: (el, target, source, sibling) => {
        console.log(el);
        console.log(target);
        console.log(source);
        console.log(sibling);
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });

  }

  ngOnDestroy(){
    this.dragulaService.destroy("COPYABLE");
  }

}
