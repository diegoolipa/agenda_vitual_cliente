export interface Agenda {
  content:          Agenda[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}

export interface Agenda {
  id:                 number;
  nombres:            string;
  apellidos:          string;
  nombreCompleto:     string;
  email:              string;
  direccion:          string;
  celular:            string;
  telefono:           null;
  estado:             string;
  fechaCreacion:      Date;
  fechaActualizacion: Date;
}

export interface Pageable {
  sort:       Sort;
  offset:     number;
  pageSize:   number;
  pageNumber: number;
  unpaged:    boolean;
  paged:      boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
