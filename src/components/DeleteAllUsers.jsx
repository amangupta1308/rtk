import React from 'react';
import { useDispatch } from 'react-redux';
// import {removeAllUsers} from '../store/slices/userSlice';
import { clearAllUsers } from '../store/actions';
import { clear } from '@testing-library/user-event/dist/clear';

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(clearAllUsers());
  }
  return (<>
    <button onClick={()=>deleteAll()}>Delete all</button>
  </>)
}

export default DeleteAllUsers;