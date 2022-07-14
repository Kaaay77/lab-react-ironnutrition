
// src/App.js
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
const [ food, setFood ] = useState(foods)
const [input, setInput] = useState('')
const [comidaFiltrada, setComidaFiltrada] = useState(food)
const addNewFood = (newFood) =>{
  const updateFood = [...food, newFood];
  setFood(updateFood);
}

const searchFood = (e) => {
  console.log(e,e.target.value)
  setInput(e.target.value) 
  const valueInput = e.target.value.toLocaleLowerCase()
  const filteredFood = food.filter((comida)=>{
   const incluyeComida = comida.name.toLocaleLowerCase()
   return incluyeComida.includes(valueInput)
  })
  setComidaFiltrada(filteredFood)
 }

 const clickToDelete = (name) => {
  const comidaF = comidaFiltrada.filter((food) => {
    
    return food.name !== name;
})
setComidaFiltrada(comidaF)
}

  return <div className="App App-Contain">
<h1 style={{color:'#fff'}} >FOOD LIST 🍔🥑🌮</h1>

     <div className='form'>
  <AddFoodForm addFood={addNewFood}/>
     </div>  

     <div>
       <Search input={input} searchFood={searchFood}/>
     </div>   

      <div className='foodBox'>
          
        {
          comidaFiltrada.map((comida) => {
            
            return(

                <div>
                  <FoodBox  
                    key={comida.name}
                    name={comida.name} 
                    image={comida.image}
                    calories={comida.calories}
                    servings={comida.servings}
                    clickToDelete={clickToDelete}
                  />

              </div>
            )
          }) 

        }
      </div>



  </div>;
}
export default App;