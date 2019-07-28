import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';


@Component({
  selector: 'calcy-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  private window = remote.getCurrentWindow();
  constructor() { }

  ngOnInit() {
  }

  public close() {
    this.window.close();
  }

  public mimimize() {
    this.window.minimize();
  }

}
