
// src/App.js
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';

function App() {
const [ food, setFood ] = useState(foods)

const addNewFood = (newFood) =>{
  const updateFood = [...food, newFood];
  setFood(updateFood);
}

  return <div className="App App-Contain">
<h1 style={{color:'#fff'}} >FOOD LIST 🍔🥑🌮</h1>

     <div className='form'>
  <AddFoodForm addFood={addNewFood}/>
     </div>     

      <div className='foodBox'>
          
        {

          food.map((comida) => {
            return(

                <div>
                  <FoodBox  
                    key={comida.name}
                    name={comida.name} 
                    image={comida.image}
                    calories={comida.calories}
                    servings={comida.servings}
                  />
              </div>
            )
          }) 
        }
      </div>



  </div>;
}
export default App;