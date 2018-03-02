import { Component } from '@angular/core';
import { ModalPublicAgent, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'nz-demo-modal-confirm-promise',
  template: `
    <button nz-button nzType="info" (click)="showConfirm()">Confirm</button>
  `,
  styles  : []
})
export class NzDemoModalConfirmPromiseComponent {
  confirmModal: ModalPublicAgent; // For testing by now

  constructor(private modal: NzModalService) { }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () => new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'))
    });
  }
}