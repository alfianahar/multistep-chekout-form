import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import BackPageButton from "../components/BackPageButton";
import { MainTittle } from "../components/MainTittle";

const ThanksPageStep = () => {
    const { getValues } = useFormContext();
    const [orderId, setOrderId] = useState('')
    const shipment = getValues('shipment')

    const refresh = () => {
        window.location.reload();
    }

    const alphaNumericGenerator = () => {
        const length = 5
        const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
        let result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return setOrderId(result);
    }
    useEffect(() => {
        alphaNumericGenerator()
    }, [])
    return (
        <div title="Thank You">
            <MainTittle>Thank You</MainTittle>
            <h5>Order ID: {orderId}</h5>
            <p>Your order will be delivered {shipment.estimation} with {shipment.label}</p>
            <BackPageButton thanks back={refresh}>
                <i className='bx bx-left-arrow-alt'></i>
                Go to homepage
            </BackPageButton>


        </div>
    );
}

export default ThanksPageStep