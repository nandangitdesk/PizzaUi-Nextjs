"use client"
import { useState } from "react"
import ToppingCard, { Topping } from "./ToppingCard"

const toppings = [
    {id:"1",name:"Chicken" , image:"/chicken.png" , price:50, isAvailable:true},
    {id:"2",name:"Mushroom" , image:"/mushroom.png" , price:50, isAvailable:true},
    {id:"3",name:"Cheese" , image:"/Cheese.png" , price:50, isAvailable:true},
]
const ToppingList = () => {
  
    const [selectedToppings , setSelectedToppings] = useState([toppings[0]])
    const handleCheckBoxCheck = (topping:Topping)=>{
        const isAlreadySelected = selectedToppings.some((selectedTopping) => selectedTopping.id === topping.id);

        if (isAlreadySelected) {
            setSelectedToppings((prev)=> prev.filter((selectedTopping) => selectedTopping.id !== topping.id))
            return;
        }

        setSelectedToppings((prev)=>[...prev,topping])
    }

  return (
    <section className="mt-6">
      <h3>Extra Toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-3">
{toppings.map((topping)=>{
    return <ToppingCard topping={topping} key={topping.id} handleCheckBoxCheck={handleCheckBoxCheck} selectedToppings={selectedToppings} />
})}
      </div>
    </section>
  )
}

export default ToppingList