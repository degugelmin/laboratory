import { AbstractControl, ControlContainer } from '@angular/forms';

export function issuerValidator(control: AbstractControl) {
    if (control.value.length >= 1 && control.value.length < 7) {
        if (control.value == '4') {
            console.log('Visa');
        } else if (
            control.value == '51' || 
            control.value == '52' || 
            control.value == '53' ||
            control.value == '54' ||
            control.value == '55' ||
            control.value == '222100' ||
            control.value == '272099') {
                console.log('Mastercard');
        } else if (control.value == '34' || control.value == '37') {
            console.log('American Express');
        }

        // Improve this logic to verify the card numbers that starts with, and not equal these values
        // Improve this logic to get range and not fixed values (Mastercard 51 to 55)
        // Implement Discover - 6011, 622126 to 622925, 644, 645, 646, 647, 648, 649, 65
        // Implement Diners Club International - 36
        // Implement JCB - 3528 to 3589
    }   
}