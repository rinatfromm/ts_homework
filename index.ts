type TotalPriceParams = {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
};

const totalPrice = ({ price, discount, isInstallment, months }: TotalPriceParams): number => {
    const discountedPrice = price * (1 - discount / 100);

    if (isInstallment && months > 0) {
        return discountedPrice / months;
    }

    return discountedPrice;
};


const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });






