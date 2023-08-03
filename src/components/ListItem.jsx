import React from 'react';
import {removeUser} from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';

const ListItem = ({key, val, id}) => {

    const dispatch= useDispatch();
    const deleteCurr = (payload) => {
        console.log(payload);
        dispatch(removeUser(payload));
    }

  return (<>
    <li>{val}</li>
    <button onClick={()=> deleteCurr(id)}>DEL</button>
  </>)
}

export default ListItem;