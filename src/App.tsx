// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Balance></Balance>
        <IncomeExpense></IncomeExpense>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </>
  );
}

export default App;
