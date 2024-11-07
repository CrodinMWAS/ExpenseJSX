import { useContext } from "react";
import { GlobalContext } from "../UseContext.tsx/UseContext";
import Transaction from "./Transaction";

const TransactionList = () => {

  const {transactions} = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul className="list">
       {transactions.map(transaction => (
        <Transaction {...transaction}></Transaction>
       ))}
      </ul>
    </>
  );
};

export default TransactionList;
