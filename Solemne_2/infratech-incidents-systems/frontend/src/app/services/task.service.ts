@Injectable({ providedIn: 'root' })
export class TaskService {

  private apiUrl = 'http://localhost:8080/api/incidents';

  constructor(private http: HttpClient) {}

  getIncidents() {
    return this.http.get<Incident[]>(this.apiUrl);
  }

  createIncident(data: Incident) {
    return this.http.post(this.apiUrl, data);
  }

  updateIncident(id: number, data: Incident) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
