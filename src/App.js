import ExpenseItem from "./components/ExpenseItem";
function App() {
  let expenseDate = new Date()
  let expenseTitle = "Loan Payment";
  let expenseAmount = 100;

  return (
    <>
      <ExpenseItem
        date={expenseDate}
        title={expenseTitle}
        amount={expenseAmount}
      />
    </>
  );
}

export default App;
