"use client"
import React, { useState } from 'react';

const Upgrade = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePayment = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {showPayment ? (
        <div className="p-6 rounded-2xl border border-gray-200 shadow-xs text-center">
          <h2 className="text-lg font-medium text-gray-900">Payment Page</h2>
          <p className="mt-2">You are purchasing the <strong>{selectedPlan}</strong> plan.</p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full p-2 mt-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full p-2 mt-2 border rounded-md"
            />
          </div>
          <button
            className="mt-6 block w-full rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
            onClick={() => alert('Payment Successful!')}
          >
            Pay Now
          </button>
          <button
            className="mt-4 text-indigo-600 underline"
            onClick={() => setShowPayment(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {["Pro", "Starter"].map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 shadow-xs sm:px-8 lg:p-12 ${
                plan === "Pro" ? "border-indigo-600 ring-1 ring-indigo-600" : "border-gray-200"
              }`}
            >
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">{plan}</h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    ₹{plan === "Pro" ? "300" : "200"}
                  </strong>
                  <span className="text-sm font-medium text-gray-700">/month</span>
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {(plan === "Pro"
                  ? ["Unlimited Course Generation", "5GB of storage", "Email support", "Community access"]
                  : ["60 Course Generation", "2GB of storage", "Email support", "Help center access"]
                ).map((feature, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 block w-full rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-700"
                onClick={() => handlePayment(plan)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upgrade;
