import React, {useState} from "react";
import {INVENTORY, UserTypes} from "../productsDictionary";
import {calculatePrice} from "../calculator/calculator";
import "./Shop.scss";

const Shop = (props) => {

    const [userType, setUserType] = useState(UserTypes.Normal)
    const [totalPrice, setTotalPrice] = useState(0)
    const [currentProductPrice, setCurrentProductPrice] = useState(undefined)


    const products = INVENTORY.map(product => {
        return (
            <div
                key={product.name}
                className="product-container"
                onClick={() => {
                    setCurrentProductPrice(calculatePrice(userType, product))
                    setTotalPrice(prev => prev + calculatePrice(userType, product))
                }}
            >
                {product.name}
            </div>)
    })

    return (
        <div id="shop-container">
            <div id="user-container">
                What user type are you?
                <div id="user-type-answers">
                    <input type="radio" id="normalUser" value={UserTypes.Normal} name="userChoice"
                           onClick={(event) => setUserType(event.target.value)}
                    />
                    <label htmlFor="normalUser">Normal</label>

                    <input type="radio" id="companyUser" value={UserTypes.Company} name="userChoice"
                           onClick={(event) => setUserType(event.target.value)}
                    />
                    <label htmlFor="companyUser">Company</label>
                </div>
            </div>
            <div id="products">
                {products}
            </div>
            <div id="basket">
                <div>
                    Current Product's Price: {currentProductPrice}
                </div>
                Calculated price: {totalPrice}
            </div>
        </div>
    );
};

export default Shop;