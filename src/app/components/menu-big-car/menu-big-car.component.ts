import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'big-car',
  templateUrl: './menu-big-car.component.html',
  styleUrls: ['./menu-big-car.component.css']
})
export class MenuBigCarComponent implements OnInit {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
