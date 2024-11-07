// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./UseContext.tsx/UseContext";

function App() {
  return (
    <>
      <div className="container">
        <GlobalProvider>
          <Header></Header>
          <Balance></Balance>
          <IncomeExpense></IncomeExpense>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
