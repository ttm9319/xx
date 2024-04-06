import { Component, OnInit, ViewChild, ElementRef, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements  ControlValueAccessor {
 // @ViewChild('input', { static: true }) input: ElementRef;
  @Input() type = 'text';
  @Input() label= '';

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

 /* ngOnInit() {
    const control = this.controlDir.control;
    const validators = control.validator ? [control.validator] : [];
    const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];

    control.setValidators(validators);
    control.setAsyncValidators(asyncValidators);
    control.updateValueAndValidity();
  }

  onChange(event) { }

  onTouched() { } */

  writeValue(obj: any): void {
   // this.input.nativeElement.value = obj || '';
  }

  registerOnChange(fn: any): void {
    //this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
   // this.onTouched = fn;
  }
  get control(): FormControl{
    return this.controlDir.control as FormControl
  }

}