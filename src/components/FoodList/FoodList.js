import "./FoodList"
import foodItems from "../../FoodData"
import FoodCard from "../FoodCard/FoodCard"
import "../../FoodData"

function FoodList() {
    return (
        <>
         <div className="food-list">
            {foodItems.map((food, index) => (
                <FoodCard
                    key={index}
                    name={food.name}
                    image={food.image}
                    description={food.description}
                    price={food.price}
                    
                />
            ))}
        </div>
        </>
    )
}

export default FoodList