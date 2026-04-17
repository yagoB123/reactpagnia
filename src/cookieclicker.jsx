import styles from "./cookieclicker.module.css";
import { useState } from "react";

export function CookieClicker() {
      let [counter, setCount] = useState(0);
  let [cookieSize, setCookieSize] = useState(200);
  let [grandmas, setGrandmas] = useState(0);

  return (
    <div>
      <h1>Click cookie!</h1>

      <div>
        <strong>Cookies: {counter}</strong> | 
        <strong>minion's: {grandmas}</strong>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXnQQ9igePrB-08ffOTUzadJ3Z2J94wsl6rsprsnAu9wqpVySlM6qkdiU_DKvJ7i7zKU&usqp=CAU"
        onClick={cookieClicked}
      />
      
      <div>
        <button onClick={buyGrandma} disabled={counter < 100}>
          Buy minion (100 cookies)
        </button>
      </div>
    </div>
  );
  function cookieClicked() {
    setCount(counter + 1);
  }
  
  function buyGrandma() {
    if (counter >= 100) {
      setCount(counter - 100);
      setGrandmas(grandmas + 1);
    }
  }
}