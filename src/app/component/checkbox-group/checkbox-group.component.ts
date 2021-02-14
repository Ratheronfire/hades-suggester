import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Asset } from 'src/app/asset';
import { FormControl, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent<T> implements OnInit {
  @Input()
  requiredCount: number = 1;

  @Input()
  rowWidth: number = 3;
  
  @Input()
  preLabel: string = '';

  @Input()
  identifier: string = '';

  @Input()
  checkboxObjects: Asset<T>[] = [];

  @Input()
  formGroup: FormGroup = new FormGroup({});

  @Output()
  checkboxUpdatedEvent = new EventEmitter<Asset<T>>();

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup.validator = this.requireCheckboxesToBeCheckedValidator();
    
    for (let i = 0; i < this.checkboxObjects.length; i++) {
      this.formGroup.addControl(`checkbox-${this.identifier}-${i}`, new FormControl(this.checkboxObjects[i].enabledForSuggesting));
    }
  }

  getCheckboxControl(index: number): FormControl {
    return this.formGroup.get(`checkbox-${this.identifier}-${index}`) as FormControl;
  }

  onCheckboxUpdated(checkboxObject: Asset<T>) {
    checkboxObject.enabledForSuggesting = !checkboxObject.enabledForSuggesting;
    this.checkboxUpdatedEvent.emit(checkboxObject);
  }

  requireCheckboxesToBeCheckedValidator(): ValidatorFn {
    const minRequired = this.requiredCount;

    return function validate(control: AbstractControl) {
        const formGroup = control as FormGroup;

        let checked = Object.values(formGroup.controls).filter(control => control.value == true).length;

        if (checked < minRequired) {
            return {
                requireCheckboxesToBeChecked: true,
            } as ValidationErrors;
        }

        return null;
    };
  }

  get areCheckboxesSelectable(): boolean {
    return Object.values(this.formGroup.controls).filter(control => control.enabled).length > 0;
  }
}
