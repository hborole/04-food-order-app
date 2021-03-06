import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const itemsNo =
    cartCtx.items.length === 0
      ? 0
      : cartCtx.items.reduce((currentNumber, item) => {
          return currentNumber + item.quantity;
        }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{itemsNo}</span>
    </button>
  );
};

export default HeaderCartButton;
