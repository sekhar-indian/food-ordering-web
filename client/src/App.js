import React,{useState} from 'react'
import Products from './printitems';
function App() {
  const [search,setSearch]=useState('')
  let arr=new Array[];
 const sumbith=e=>{
  e.preventDefault();
  // console.log(search)
  // fetch(`https://api.edamam.com/api/nutrition-data?app_id=dac77220&app_key=b0e5a6eb5309f4af7186bc5c6ce41e0c%09&nutrition-type=cooking&ingr=${search}`)
  //   .then(
  //     response =>response.json()
  //   ).then(
  //     data=>console.log(data)
  //   )
    let url = 'https://api.sheety.co/3273d09f86888dcd480412c8aa8e3ef9/userDetails/sheet1';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
     // Do something with the data
     console.log("data"+json.sheet1S);
     arr.push(json.sheet1S)
     console.log(json)
    });
 }
  return (
    <div >
      <container>
        <form  onSubmit={sumbith}>
          <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} ></input>
          <input type="submit" value="search"></input>
        </form>
        <Products data={arr}/>
      </container>
    </div>
  );
}

export default App;
