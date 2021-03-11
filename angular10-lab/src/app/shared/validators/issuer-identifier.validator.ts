import { AbstractControl, ControlContainer } from '@angular/forms';

export function issuerValidator(control: AbstractControl) {

    if (control.value.startsWith('4')) {
            console.log('Visa');
    } else if (
            control.value.startsWith('51') ||
            control.value.startsWith('52') ||
            control.value.startsWith('53') ||
            control.value.startsWith('54') ||
            control.value.startsWith('55') ||
            control.value.startsWith('222100') ||
            control.value.startsWith('272099')) {
        console.log('Mastercard');
    } else if (control.value.startsWith('34') ||
                control.value.startsWith('37')) {
        console.log('American Express');
    } else if (control.value.startsWith('6011') ||
                //between('622126','622925') ||
                control.value.startsWith('644') ||
                control.value.startsWith('645') ||
                control.value.startsWith('646') ||
                control.value.startsWith('647') ||
                control.value.startsWith('648') ||
                control.value.startsWith('649') ||
                control.value.startsWith('65')) {
        console.log('Discover');
    } else if (control.value.startsWith('36')) {
        console.log('Diners Club International');
    } // Implement JCB - 3528 to 3589
}
        // Improve this logic to get range and not fixed values (Mastercard 51 to 55)
        