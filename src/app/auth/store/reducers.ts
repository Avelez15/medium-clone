import {createFeature, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {register} from './actions'

const initalState: AuthStateInterface = {
  isSubmitting: false,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initalState,
    on(register, (state) => ({...state, isSubmitting: true}))
  ),
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature
