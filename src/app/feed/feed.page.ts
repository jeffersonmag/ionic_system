import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nome : string = 'Jefferson';

  public retornaNome() : void {
    alert(this.nome);
  }

  constructor() { }

  ngOnInit() {
    this.retornaNome();
  }

}
