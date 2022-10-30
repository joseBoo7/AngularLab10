import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  //Atributos 
  art = {
    codigo: 0,
    descripcion: "",
    precio: 0
  }

  articulos = [
    { codigo: 1, descripcion: "papas", precio: 10.55 },
    { codigo: 2, descripcion: "manzanas", precio: 2.50 },
    { codigo: 3, descripcion: "melon", precio: 5.40 },
    { codigo: 4, descripcion: "cebollas", precio: 1.55 },
    { codigo: 5, descripcion: "sandia", precio: 1.85 }
  ]

  constructor() { }

  //Metodos 
  ngOnInit(): void {
  }

  hayRegistros() {
    return this.articulos;
  }

  borrar(codigo: number) {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        this.articulos.splice(x, 1);
        return;
      }
  }

  agregar() {
    if (this.art.codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio
    });
    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;

  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar() {

    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
    alert('No existe el código de articulo ingresado');

  }

}