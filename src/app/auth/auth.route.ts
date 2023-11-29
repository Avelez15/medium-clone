import {Route} from '@angular/router'
import {registerComponent} from './components/register/register.component'

export const registerRoutes: Route[] = [
  {
    path: '',
    component: registerComponent,
  },
]
