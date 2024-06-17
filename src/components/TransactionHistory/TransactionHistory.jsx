import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.container}>
  <thead >
    <tr className={css.containerName}>
      <th className={css.nameType}>Type</th>
      <th className={css.nameAmount}>Amount</th>
      <th className={css.nameCurrency}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.containerTotal}>
    <tr className={css.containerValue}>
    {items.map((item) => <td className={css.valueType} key={item.id}>{item.type}</td> )} 
    {items.map((item) => <td className={css.valueAmount} key={item.id}>{item.amount}</td> )} 
                    {items.map((item) => <td className={css.valueCurrency} key={item.id}>{item.currency}</td> )}  
    </tr>
  </tbody>
</table>

        )
};
 
export default TransactionHistory;