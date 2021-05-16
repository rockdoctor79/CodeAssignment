import "./styles.css";
import transactions from "./data-6.json";
import cust from "./customers-2.json";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  point(x) {
    if (x >= 100) {
      return 50 + (x - 100) * 2;
    } else {
      if (x >= 50) {
        return x - 50;
      }
      return 0;
    }
  }
  render() {
    const transa = transactions;
    const customer = cust;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;

    return (
      <ul>
        {customer.map((cust_id, ind) => {
          count1 = 0;
          count2 = 0;
          count3 = 0;

          transa
            .filter((pup) => pup.customer === cust_id.id)
            .map((item, index) => {
              if (item.date >= "3/1/2021" && item.date < "4/1/2021") {
                count1 += this.point(item.amount);
              }
              if (item.date >= "4/1/2021" && item.date < "5/1/2021") {
                count2 += this.point(item.amount);
              }
              if (item.date >= "5/1/2021" && item.date < "6/1/2021") {
                count3 += this.point(item.amount);
              }
              return <p> ok </p>;
            });
          return (
            <p key={cust_id.ip_address}>
              {" "}
              {cust_id.first_name} {cust_id.last_name} , Month 1 : ({count1}{" "}
              points), Month 2 : ({count2} points), Month 3 : ({count3} points),
              Total: ({count1 + count2 + count3}){" "}
            </p>
          );
        })}
        {}
      </ul>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
