import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store/index';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter.counter)

  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} >Increment by 5</button>
        <button onClick={decrementHandler} >Decrement  by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
