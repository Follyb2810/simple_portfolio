// BookingPage.jsx

import React, { useState } from "react";
import { FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { BiMessage, BiMoney } from "react-icons/bi";
import { PaystackButton } from "react-paystack";
import axios from "axios";

const BookingPage = () => {
  const [bookDetails, setBookingDetails] = useState({
    name: "",
    date: "",
    email: "",
    amount: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBookingDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePayment = async () => {
    console.log("Processing payment...");
  };
  const paystack =process.env.VITE_APP_Paystack_Key
  const config = {
    reference: new Date().getTime().toString(),
    email: bookDetails.email,
    amount: bookDetails.amount * 100,
    name: bookDetails.name, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: paystack,
  };
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    alert("payment succesfull");
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed not payment made");
  };

  const componentProps = {
    ...config,
    text: "Make Payment ",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Appointment</h1>

      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Folly"
            value={bookDetails.name}
            name="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Booking Date
          </label>
          <div className="relative">
            <input
              type="text"
              id="date"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Select date"
              value={bookDetails.date}
              name="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <FaCalendarAlt className="absolute top-2 right-4 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cardNumber"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="cardNumber"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="enter email"
              value={bookDetails.email}
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <BiMessage className="absolute top-2 right-4 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cardNumber"
          >
            Amount
          </label>
          <div className="relative">
            <input
              type="number"
              id="cardNumber"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Amount"
              name="amount"
              value={bookDetails.amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
            <BiMoney className="absolute top-2 right-4 text-gray-500" />
          </div>
        </div>

        <PaystackButton {...componentProps} className="paystack-button" />
      </div>
    </div>
  );
};

export default BookingPage;

// const url:string=''
// const form = new FormData()
// form.append('name',bookDetails.name)
// form.append('date',bookDetails.date)
// form.append('email',bookDetails.email)
// form.append('amount',bookDetails.amount)
// form.append('cardNumber',bookDetails.cardNumber)

// async function payBooking() {
//    await axios.post(url,form,{
//     headers:{
//       'X-Requested':'XMLHttpRequest'
//     }
//    }).then(res=>{
//     let data = ''
//    }).catch(err =>console.log(err))
// }
