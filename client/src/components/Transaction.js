import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';


export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (

        <li classNa={transaction.amount < 0 ? 'minus' : 'plus'}>

            {transaction.text} <span>{sign}{numberWithCommas(Math.abs(transaction.amount))} din</span>

            <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>

        </li>
    )
}
