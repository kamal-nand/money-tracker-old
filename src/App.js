import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({name, description, datetime})
    }).then(response => {
      response.json().then(json => {
        console.log('result', json);
      });
    });
  }

  return (
    <main>
    <h1>$400.<span>00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type='text' 
            value={name}
            onChange={ev => setName(ev.target.value)}
          placeholder={'new Samsung TV'} />
          <input type='datetime-local'
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
          />
        </div>
        <div className='description'>
          <input type='text' 
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          placeholder={'Description'}/>
        </div>
        <button type='submit'>Add new transaction</button> 
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung TV</div>
              <div className="description">I needed a new TV</div>
            </div>
            <div className="right">
              <div className="price red">-$500.00</div>
              <div className="datetime">2024-03-02 12:54</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Refrigerator</div>
              <div className="description">I needed a new refrigerator</div>
            </div>
            <div className="right">
              <div className="price red">-$530.00</div>
              <div className="datetime">2024-03-02 12:54</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Sold Old OnePlus+ TV</div>
              <div className="description">Not working well</div>
            </div>
            <div className="right">
              <div className="price green">+$500.00</div>
              <div className="datetime">2024-03-02 12:54</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">Grocery</div>
              <div className="description">Atta, Rice</div>
            </div>
            <div className="right">
              <div className="price red">-$34.00</div>
              <div className="datetime">2024-03-02 12:54</div>
            </div>
          </div>
        </div>
        </form>
    </main>
  );
}

export default App;
