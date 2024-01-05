import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {register} from '../../store/actions'
import {registerRequestInterface} from '../../types/registerRequest.interface'
import {RouterLink} from '@angular/router'
import { selectIsSubmitting } from '../../store/reducers'
import {AuthStateInterface} from '../../types/authState.interface'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class registerComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  isSubmitted$ = this.store.select(selectIsSubmitting)

  constructor(
    private fb: FormBuilder,
    private store: Store<{auth: AuthStateInterface}>
  ) {}

  ngSubmit() {
    console.log('form', this.form.getRawValue())
    const request: registerRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(register({request}))
  }
}
