export interface Incident {
  id: number;
  tipo: string;
  area: string;
  descripcion: string;
  estado: 'Nuevo' | 'En Proceso' | 'Resuelto';
  prioridad: 'Alta' | 'Media' | 'Baja';
  tecnico: string;
  fechaCreacion: Date;
  fechaResolucion?: Date;
}
