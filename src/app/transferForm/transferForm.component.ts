import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-transferForm',
    templateUrl:'./transferForm.component.html',
    styleUrls:['./transferForm.component.scss']
})

export class transferFormComponent {

  @Output() onTransfer = new EventEmitter<any>()

  valor: number;
  destino: number;

  transferir(){
    console.log('Transferencia realizada com sucesso')
    const newTransfer = {value: this.valor, destiny: this.destino}
    this.onTransfer.emit(newTransfer)
    this.limparCampos()
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
