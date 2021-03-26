import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transactions: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer WebSite',
          type: 'deposit',
          category: 'Desenvolvedor',
          amount: 6000,
          createAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Humburguere',
          type: 'withdraw',
          category: 'Comida',
          amount: 50,
          createAt: new Date('2021-02-12 09:30:00'),
        }
      ],
      
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);