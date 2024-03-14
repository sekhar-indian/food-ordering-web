import React,{useState} from 'react';
import Products from './menuItem/printitems';


function App() {
  const [data,setdata]=useState([])
    if (data.length === 0) {
      fetch('https://api.sheety.co/3273d09f86888dcd480412c8aa8e3ef9/userDetails/sheet1')
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.sheet1[0]); 
          setdata(data.sheet1);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  return (
    <div>
        
          <Products data={data}/>
          
      
    </div>
   
  );
}

export default App;
