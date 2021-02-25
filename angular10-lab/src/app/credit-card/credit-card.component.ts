import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-credit-card',
    templateUrl: './credit-card.component.html',
    styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

    creditCardForm: FormGroup;
    cardNumber: number;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        this.creditCardForm = this.formBuilder.group({
            inputName: ['', [ 
                    Validators.required,
                    Validators.pattern('^[a-zA-ZÀ-ú ]*$'),
                    Validators.minLength(5),
                    Validators.maxLength(40)
                ]
            ],
            inputCardNumber: ['', [
                    Validators.required,
                    Validators.minLength(13),
                    Validators.maxLength(19)
                ]
            ],
            inputExpirationDate: ['', Validators.required],
            inputCvv: ['', [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(4)
                ]
            ],
        
        });
    }

    validateCard() {
        if (this.creditCardForm.valid) {
            console.log('form ok');

            this.validateCreditCardNumber();
        } else {
            this.validateAllFormFields(this.creditCardForm);
        }
    }

    validateCreditCardNumber() {

        this.cardNumber = this.creditCardForm.get('inputCardNumber').value.replace(/\D/g, '');

        console.log('Credit card number: ' + this.creditCardForm.get('inputCardNumber').value);
        console.log('card number formatted: ' + this.cardNumber);    
    }

    validateAllFormFields(formGroup: FormGroup) {         
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);             
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}