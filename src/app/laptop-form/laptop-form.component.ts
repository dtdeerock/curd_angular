import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.scss']
})
export class LaptopFormComponent implements OnInit {
  laptop: Laptop = {
    id: 0,
    brand: '',
    model: '',
    price: 0
  };

  constructor(private laptopService: LaptopService) { }

  ngOnInit(): void {
  }

  addLaptop(): void {
    this.laptopService.addLaptop(this.laptop);
    this.laptop = {
      id: 0,
      brand: '',
      model: '',
      price: 0
    }; // Reset the form
  }
}
