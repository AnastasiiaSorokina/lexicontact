import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../enums';

@Component({
  selector: 'app-mode-menu',
  templateUrl: './mode-menu.component.html',
  styleUrls: ['./mode-menu.component.css']
})
export class ModeMenuComponent implements OnInit {
  menuItems = MenuItems;
  currentMode: MenuItems;

  ngOnInit(): void {
    this.currentMode = MenuItems.None;
  }

  chooseMode(mode: MenuItems): void {
    this.currentMode = mode;
  }
}
