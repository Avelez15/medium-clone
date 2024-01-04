import {createAction, props} from '@ngrx/store'
import {registerRequestInterface} from '../types/registerRequest.interface'

export const register = createAction(
  '[Auth] Register',
  props<{request: registerRequestInterface}>()
)
