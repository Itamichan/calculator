import {calculateBasePrice, calculateSpecialDiscount, calculateUserDiscount} from "./priceAdjustments";


export const calculatePrice = (userType, product) => {

    try {

        const basePrice = calculateBasePrice(product)

        const userDiscount = calculateUserDiscount(userType)

        const specialDiscount = calculateSpecialDiscount(product)

        return basePrice - userDiscount - specialDiscount

    } catch (e) {
        console.log("error:", e);
        return "something went wrong"
    }
}
