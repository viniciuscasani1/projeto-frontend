import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ordem} from '../../domain/ordem.domain';
import {OrdemService} from '../../providers/ordem.service';

@Component({
  selector: 'app-modal-ordem',
  templateUrl: './modal-ordem.component.html',
  styleUrls: ['./modal-ordem.component.scss']
})
export class ModalOrdemComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  ordem = new Ordem();

  constructor(public dialogRef: MatDialogRef<ModalOrdemComponent>, private fb: FormBuilder, private ordemService: OrdemService) {
  }

  ngOnInit() {

    this.form = this.fb.group({
      valorOrdem: ['', [Validators.required, Validators.min(1)]],
      descricaoOrdem: ['', Validators.required]
    });
  }

  insertOrdem() {
    this.submitted = true;
    console.log(this.form);
    if (this.form.valid) {
      this.ordem.valorOrdem = this.form.get('valorOrdem').value;
      this.ordem.descricaoOrdem = this.form.get('descricaoOrdem').value;
      this.ordem.status = 'AGUARDANDO';
      this.ordemService.create(this.ordem).subscribe(
        res => {
          console.log(res);
          this.dialogRef.close();
        }
      );
      console.log(this.ordem);

    }
  }

}
