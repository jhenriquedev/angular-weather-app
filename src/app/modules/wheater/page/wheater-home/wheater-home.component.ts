import { Component, OnInit } from '@angular/core';
import { WheaterService } from '../../service/wheater.service';
import { WheaterInterface } from 'src/app/models/interfaces/wheater.interface';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit{
  initialCityName = 'São Paulo';
  wheaterDatas!: WheaterInterface;

  constructor(private wheaterService: WheaterService){}

  ngOnInit(): void {
    this.getWheaterData(this.initialCityName);
  }

  getWheaterData(cityName: string): void {
    this.wheaterService.getWheaterData(cityName)
    .subscribe({
      next: (response) => {
        response && (this.wheaterDatas = response);
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }
}
