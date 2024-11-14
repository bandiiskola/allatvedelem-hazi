import { Injectable } from '@angular/core';

export interface Allat {
  id: number;
  nev: string;
  faj: string;
  kor: number;
  leiras: string;
  orokbefogadhato: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AllatService {
  private allatok: Allat[] = [
    { id: 1, nev: 'Buksi', faj: 'kutya', kor: 3, leiras: 'Barátságos és energikus', orokbefogadhato: true },
    { id: 2, nev: 'Cirmos', faj: 'macska', kor: 2, leiras: 'Nyugodt természetû', orokbefogadhato: true },
    { id: 3, nev: 'Paci', faj: 'ló', kor: 8, leiras: 'Erõs és játékos', orokbefogadhato: false },
    { id: 4, nev: 'Füles', faj: 'nyúl', kor: 1, leiras: 'Kicsi és szelíd', orokbefogadhato: true },
    { id: 5, nev: 'Mancs', faj: 'kutya', kor: 5, leiras: 'Védelmezõ és hûséges', orokbefogadhato: false }
  ];

  getAllatok(): Allat[] {
    return this.allatok;
  }

  getAllatById(id: number): Allat | undefined {
    return this.allatok.find(allat => allat.id === id);
  }
}
