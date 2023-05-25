import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent implements OnInit {
  laptops: Laptop[] = [];

  constructor(private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.getLaptops();
  }

  getLaptops(): void {
    this.laptops = this.laptopService.getLaptops();
  }

  deleteLaptop(id: number): void {
    this.laptopService.deleteLaptop(id);
    this.getLaptops(); // Refresh the laptop list
  }
}
