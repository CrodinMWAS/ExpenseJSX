const AddTransaction = () => {
  return (
    <div className="addTransaction">
      <label htmlFor="text">Text</label>
      <input type="text" name="" id="" />
      <label htmlFor="amount">Amount (negative-expense, positive-income)</label>
      <input type="number" />
    </div>
  );
};

export default AddTransaction;