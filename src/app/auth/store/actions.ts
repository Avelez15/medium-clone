import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store'
import {registerRequestInterface} from '../types/registerRequest.interface'
import { currentUserInterface } from 'src/app/shared/types/currentUser.interface'


export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{request: registerRequestInterface}>(),
    "Register Success" : props<{currentUser :currentUserInterface}>(),
    "Register Failure" : emptyProps(),
    }
})

authActions.register


// export const register = createAction(
//   '[Auth] Register',
//   props<{request: registerRequestInterface}>()
// )

// export const registerSuccess = createAction(
//   '[Auth] Register Success',
//   props<{request: registerRequestInterface}>()
// )

// export const registerFailure = createAction(
//   '[Auth] Register Failure',
//   props<{request: registerRequestInterface}>()
// )
 