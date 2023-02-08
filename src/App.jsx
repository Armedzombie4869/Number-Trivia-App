import { useState,useEffect } from 'react'
import Search from './components/Search';
import Card from './components/Card';
import axios from 'axios';
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [info,setInfo] = useState('');
  const url ='http://numbersapi.com/';

  useEffect(() => {
    const finalurl = url+number;
    axios.get(finalurl).then(response => setInfo(response.data));
  },[number])

  const onSubmit = (input) => {
    console.log(input);
    setNumber(input);
  }

  const getRandom = async () => {
    const finalurl = url + 'random';
    const response = await axios.get(finalurl);
    const first = response.data.split(' ')[0];
    setNumber(first);
    setInfo(response.data)
  }

  return (
    <div className="app">
      
      <Search onSubmit = {onSubmit}/>
      <button className="random-button" onClick={getRandom}>Get Random Fact</button>
      <Card number={number} info={info}/>
      
      
    </div>
  )
}

export default App
