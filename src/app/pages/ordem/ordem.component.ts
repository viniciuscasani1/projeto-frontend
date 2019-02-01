import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalOrdemComponent} from '../modal-ordem/modal-ordem.component';
import {OrdemService} from '../../providers/ordem.service';


@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.component.html',
  styleUrls: ['./ordem.component.scss']
})
export class OrdemComponent implements OnInit {

  ordens = [];
  displayedColumns: string[] = ['id', 'descricao', 'valor', 'status'];

  constructor(public dialog: MatDialog, private ordemService: OrdemService) {
  }

  ngOnInit() {

    this.findAllOrdens();
  }

  findAllOrdens() {

    this.ordemService.getAll().subscribe(
      res => {
        this.ordens = res;
      }
    );
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalOrdemComponent, {
      width: '700px'

    });

    dialogRef.afterClosed().subscribe(retorno => {
      this.findAllOrdens();
    });
  }

}
