
import './App.css';
import { Card } from './components/Card';
import pic from '../src/components/img/pic.png'


function App() {
  const data = [
  {
    title:'Psihikal Health',
    color: 'violet'
  },
  {
    title:'Psihikal Health',
    color: '#0052C1',
  },
  {
    title:'Psihikal Health',
    color: null,
    img:pic,
  },
  {
    title:'Psihikal Health',
    color: '#DEE1FF',
  },
  {
    title:'Psihikal Health',
    color: '#8F00FF' ,
  },
  {
    title:'Psihikal Health',
    color:'#DEE1FF' ,
  }
]
  return (
    <div className="App">
     {
      data.map((el,id)=>{
        return <Card key={id} data={el} />
      })
     }
    </div>
  );
}

export default App;
