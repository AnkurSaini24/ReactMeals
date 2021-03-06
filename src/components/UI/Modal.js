import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import CartProvider from '../../store/CartProvider';
import classes from './Modal.module.css';

const Backdrop = (props) =>{
  return (
      <div className={classes.backdrop} onClick={props.onCloseCart} />
  )
}

const ModalOverlay = (props) => {
 return (
     <div className={classes.modal}>
         <div className={classes.content}>{props.children}</div>
     </div>
 )
}

const portalElement= document.getElementById('overlays');

const Modal = (props) => {
    console.log(props);
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onCloseCart={props.ModalClose}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
            {/* <Backdrop/>
            <ModalOverlay>{props.children}</ModalOverlay> */}
        </Fragment>
    )
}

export default Modal
