import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Incident } from '../models/incident.model';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html'
})
export class IncidentListComponent implements OnInit {

  incidents: Incident[] = [];

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getIncidents().subscribe(data => this.incidents = data);
  }

  resolver(incident: Incident) {
    this.service.updateIncident(incident.id!, 'Resuelto').subscribe(() => this.load());
  }

  alerta48h(inc: Incident): boolean {
    if (inc.estado === 'Resuelto') return false;
    const diff = Date.now() - new Date(inc.fechaCreacion!).getTime();
    return diff > 48 * 3600000;
  }
}
