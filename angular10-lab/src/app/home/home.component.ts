import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent { 

    public modalRef: BsModalRef;
    constructor(private modalService: BsModalService) { }

    public openModal(creditCardsModal: TemplateRef<any>) {
        this.modalRef = this.modalService.show(creditCardsModal);
    }
}