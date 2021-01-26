import {calculateBasePrice, calculateSpecialDiscount, calculateUserDiscount} from "./priceAdjustments";


export const calculatePrice = (userType, product) => {

    const basePrice = calculateBasePrice(product)

    const userDiscount = calculateUserDiscount(userType)

    const specialDiscount = calculateSpecialDiscount(product)

    return basePrice - userDiscount - specialDiscount

}
