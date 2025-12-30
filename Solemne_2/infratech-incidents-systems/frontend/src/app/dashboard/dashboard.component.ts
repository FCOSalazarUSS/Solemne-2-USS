import jsPDF from 'jspdf';
import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  template: `<button (click)="pdf()">Generar PDF</button>`
})
export class DashboardComponent {

  constructor(private service: TaskService) {}

  pdf() {
    this.service.getIncidents().subscribe(data => {
      const pdf = new jsPDF();
      pdf.text('Reporte de Incidentes', 10, 10);
      data.forEach((i, idx) => {
        pdf.text(`${i.tipo} - ${i.estado}`, 10, 20 + idx * 10);
      });
      pdf.save('incidentes.pdf');
    });
  }
}
