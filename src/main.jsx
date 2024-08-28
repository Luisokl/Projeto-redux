import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'

import { store } from './redux/store' //Importando a store
import { Provider } from 'react-redux' //Importando o provider do Redux

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
