import {Fragment} from "react";
import mealsImage from '../../assets/img/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
          <header className={classes.header}>
            <h1>React My Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
          </header>
          <div className={classes['main-image']}>
            <img className={classes.img} src={mealsImage} alt=" A table full of delecious food!" />
          </div>
        </Fragment>
    )
}

export default Header
