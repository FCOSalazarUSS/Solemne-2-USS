this.form = this.fb.group({
  tipo: ['', Validators.required],
  area: ['', Validators.required],
  descripcion: ['', Validators.required],
  prioridad: ['', Validators.required],
  tecnico: ['', Validators.required]
});
