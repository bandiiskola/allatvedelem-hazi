import { Component, OnInit } from '@angular/core';
import { AllatService, Allat } from '../allat-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allatok-listaja',
  templateUrl: './allatok-listaja.component.html',
  styleUrls: ['./allatok-listaja.component.css']
})
export class AllatokListajaComponent implements OnInit {
  allatok: Allat[] = [];
  szurtAllatok: Allat[] = [];
  fajok: string[] = [];
  kivantFaj = '';

  constructor(private allatService: AllatService, private router: Router) {}

  ngOnInit(): void {
    this.allatok = this.allatService.getAllatok();
    this.szurtAllatok = this.allatok;
    this.fajok = Array.from(new Set(this.allatok.map(a => a.faj)));
  }

  szurFajSzerint(): void {
    this.szurtAllatok = this.kivantFaj ? this.allatok.filter(a => a.faj === this.kivantFaj) : this.allatok;
  }

  reszletek(id: number): void {
    this.router.navigate(['/allatok', id]);
  }
}
