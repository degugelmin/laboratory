import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
            inputName: ['', [ Validators.required,
                                Validators.pattern('^[a-zA-Z ]*$'),
                                Validators.minLength(5),
                                Validators.maxLength(40)
                            ]
            ],
            inputCardNumber: ['', Validators.required],
            inputExpirationDate: ['', Validators.required],
            inputCvv: ['', Validators.required],
        
        });
    }

    validateCard() {
        if (this.creditCardForm.valid) {
            console.log('form ok');
        } else {
            this.validateAllFormFields(this.creditCardForm);
        }
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