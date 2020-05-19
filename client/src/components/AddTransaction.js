import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {


    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {AddTransaction} = useContext(GlobalContext);

    const onSubmit = e => {

        e.preventDefault();

        const newTransaction = {

            text,
            amount: +amount

        }

        AddTransaction(newTransaction);
    }

    return (
        <>
            <h3>Dodaj Novu Transakciju</h3>
            <form onSubmit={onSubmit}>

                <div className="form-control">
                    <label htmlFor="text">Oznaka plaćanja</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Naziv transakcije..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Iznos plaćanja (+ za potražnju, - za zaduženje)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Unesite iznos..." />
                </div>

            </form>
        </>
    )
}
