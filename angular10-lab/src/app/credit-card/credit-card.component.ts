import { DirectiveResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { issuerValidator } from '../shared/validators/issuer-identifier.validator';

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
                    Validators.maxLength(19),
                    issuerValidator
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

        /* This code was inspired in an implementation from here:
        https://medium.com/hootsuite-engineering/a-comprehensive-guide-to-validating-and-formatting-credit-cards-b9fa63ec7863
        */

        var cardNumber = this.creditCardForm.get('inputCardNumber').value.replace(/\D/g, '');
        console.log('Card Number received and formatted: ' + cardNumber);

        var sum = 0;
        var shouldDouble = false;
        var accepted = false;

        var acceptedCreditCards = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
            amex: /^3[47][0-9]{13}$/,
            discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
            diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
        };

        // Loop through values starting at the rightmost side
        for (var i = cardNumber.length - 1; i >= 0; i--) {
            var digit = parseInt(cardNumber.charAt(i));

            if (shouldDouble) {
                if ((digit *= 2) > 9) digit -= 9;
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        var valid = (sum % 10) == 0;

        if (valid) {
            
        }

        // Loop through the keys (visa, mastercard, amex, etc.)
        Object.keys(acceptedCreditCards).forEach(function(key) {
            var regex = acceptedCreditCards[key];
            console.log(regex.test(cardNumber));
            if (regex.test(cardNumber)) {
                console.log(regex.test(cardNumber));
                accepted = true;
            }
            
        });

        console.log('valid: ' + valid);
        console.log('accepted: ' + accepted)

        return valid && accepted;



        //console.log('Credit card number: ' + this.creditCardForm.get('inputCardNumber').value);
        //console.log('card number formatted: ' + this.cardNumber);    
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