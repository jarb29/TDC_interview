import * as React from 'react'
import Auth from '../auth/Auth'
import { Button } from 'semantic-ui-react'
import SignupPage from './formulario'

interface LogInProps {
  auth: Auth
}

interface LogInState {}

export class LogIn extends React.PureComponent<LogInProps, LogInState> {
  onLogin = () => {
    this.props.auth.login()
  }

  render() {
    return (
      <div  style={{display: 'flex', justifyContent: 'center', margin: '150px'}}>
        <Button onClick={this.onLogin} size="huge" color="blue">
          Registrarse
        </Button>

      </div>
    )
  }
}
