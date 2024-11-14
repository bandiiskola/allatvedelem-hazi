import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllatService, Allat } from '../allat-service.service';

@Component({
  selector: 'app-allat-reszletei',
  templateUrl: './allat-reszletei.component.html',
  styleUrls: ['./allat-reszletei.component.css']
})
export class AllatReszleteiComponent implements OnInit {
  allat?: Allat;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private allatService: AllatService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.allat = this.allatService.getAllatById(id);
  }

  vissza(): void {
    this.router.navigate(['/allatok']);
  }
}
