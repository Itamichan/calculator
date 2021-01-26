import {UserTypes} from "../productsDictionary"

export const calculateBasePrice = (product) => {

    const ProductTypesPrices = {
        old: 35,
        new: 25
    }
    return product.price + ProductTypesPrices[product.type]
}

export const calculateUserDiscount = (userType) => {

    const UserDiscounts = {
        [UserTypes.Company]: 5,
        [UserTypes.Normal]: 0
    }

    return UserDiscounts[userType]
}

export const calculateSpecialDiscount = (product) => {

    const productPublishedToday = new Date().toDateString() === product.publishedDate.toDateString()


    if (product.type === "new" && productPublishedToday) {
        return 10
    }

    return 0
}