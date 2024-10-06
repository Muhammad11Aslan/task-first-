import React, { useState } from 'react';

const SumPairs = () => {
    const [numbers] = useState([0, 2, 4, 3, 5, 6, 8, 1]);
    const ChoseNumber = 9;

    const pairsValueFine = (arr1, TwoValueSum) => {
        const pairsNumber = [];
        const seen = new Set();

        for (const number of arr1) {
            const complement = TwoValueSum - number;
            if (seen.has(complement)) {
                pairsNumber.push([complement, number]);
            }
            seen.add(number);
        }

        return pairsNumber;
    };

    const pairsNumber = pairsValueFine(numbers, ChoseNumber);

    return (
        <div>
            <h1>PairsNumber of sum {ChoseNumber}:</h1>
            {pairsNumber.map((items, index) => (
                <h4 key={index}>{items[0]} + {items[1]} = {ChoseNumber}</h4>
            ))}
        </div>
    );
};

export default SumPairs;
