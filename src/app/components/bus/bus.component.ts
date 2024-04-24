import {Component, OnInit} from '@angular/core';
import {BusModel} from "../../models/bus.model";


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent implements OnInit{

  buses: any[] = [];
  newBus: BusModel = {busNumber: null, source: '', destination: '', departureTime: '', departureDate: '', arrivalTime: '', arrivalDate: '', ticketPrice: null, capacity: null};

  ngOnInit() {

  }


  addBus(): void {
    if (this.validateBus(this.newBus)) {
      this.buses.push({...this.newBus});
      this.newBus = {busNumber: null, source: '', destination: '', departureTime: '', departureDate: '', arrivalTime: '', arrivalDate: '', ticketPrice: null, capacity: null};
    }
  }

  validateBus(bus: BusModel): boolean {
    return (
      typeof bus.busNumber === 'number' &&
      bus.source.length < 20 &&
      bus.destination.length < 20 &&
      bus.departureTime.length < 12 &&
      bus.departureDate.length < 12 &&
      bus.arrivalTime.length < 12 &&
      bus.arrivalDate.length < 12 &&
      typeof bus.ticketPrice === 'number' &&
      typeof bus.capacity === 'number'
    );
  }

  deleteBus(index: number): void {
    this.buses.splice(index, 1);
  }

  updateBus(index: number): void {
    this.newBus = {...this.buses[index]};
    this.deleteBus(index);
  }


}
