import { Injectable } from '@angular/core';
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private laptops: Laptop[] = [];
  private nextId = 1;

  constructor() { }

  getLaptops(): Laptop[] {
    return this.laptops;
  }

  getLaptop(id: number): Laptop | undefined {
    return this.laptops.find(laptop => laptop.id === id);
  }

  addLaptop(laptop: Laptop): void {
    laptop.id = this.nextId++;
    this.laptops.push(laptop);
  }

  updateLaptop(updatedLaptop: Laptop): void {
    const index = this.laptops.findIndex(laptop => laptop.id === updatedLaptop.id);
    if (index !== -1) {
      this.laptops[index] = updatedLaptop;
    }
  }

  deleteLaptop(id: number): void {
    const index = this.laptops.findIndex(laptop => laptop.id === id);
    if (index !== -1) {
      this.laptops.splice(index, 1);
    }
  }
  getLaptopById(id: number): Laptop | undefined {
    return this.laptops.find(laptop => laptop.id === id);
  }


}
