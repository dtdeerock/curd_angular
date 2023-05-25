import { Component, OnInit, Input } from '@angular/core';
import { Laptop } from '../laptop';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.scss']
})
export class LaptopDetailsComponent implements OnInit {
  @Input() laptop?: Laptop;
  router: any;

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLaptop();
  }

  getLaptop(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.laptop = this.laptopService.getLaptop(id);
  }

  goBack(): void {
    this.location.back();
  }

  editLaptop(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/laptops', id, 'edit']);
  }

}
