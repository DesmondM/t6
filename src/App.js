import './App.css';
import {useFetch} from './useFetch';

function App() {
    const [data, loading]= useFetch('https://jsonplaceholder.typicode.com/todos');
    
  return (
    <>
    <div style={{margin:'auto'}}>{loading &&<div>Loading....</div>}</div>
    {data && 
        data.map((item)=>{
            return(
                <div key={item.id}>
                 <p>Item: {item.title} </p>   
                 <p>Completed: {item.completed? ('✅'):('❌')} </p>   
                </div>
            )
        }
    
    )}
    </>
   
  );
}

export default App;
