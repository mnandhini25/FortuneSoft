import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/styles'
import { MuiThemeProvider } from '@material-ui/core'

import reduxStore from './store'
import * as serviceWorker from './serviceWorker'
import 'styles/index.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const { store, persistor, history } = reduxStore
const App = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <PersistGate loading={null} persistor={persistor}>
          
          </PersistGate>
        </StylesProvider>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'))
serviceWorker.unregister()
