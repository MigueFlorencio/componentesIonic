import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) infinitiScroll: IonInfiniteScroll; 

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    //console.log( event ); ya no es necesario por el @viewChild

    setTimeout(() => {

      if ( this.data.length > 50 ) {
        this.infinitiScroll.complete();
        this.infinitiScroll.disabled=true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);


      //event.target.complete();
      this.infinitiScroll.complete();
    }, 1500);
  }

}
