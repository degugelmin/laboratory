import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-credit-card',
    templateUrl: './credit-card.component.html',
    styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

    creditCardForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.creditCardForm = this.formBuilder.group({
            inputName: ['', Validators.required],
            inputCardNumber: ['', Validators.required],
            inputExpirationDate: ['', Validators.required],
            inputCvv: ['', Validators.required]
        });
    }

    validateCard() {
        console.log('Hello world');
    }
}