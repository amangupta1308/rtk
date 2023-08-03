import React from 'react';
import DeleteAllUsers from './DeleteAllUsers';
import { fakeData } from '../api/index';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/userSlice';
import ShowList from '../components/ShowList';

const UserDetails = () => {

  const dispatch = useDispatch();
  const addNew = (payload) => {
    dispatch(addUser(payload));
  }

  return (<>
    <h1>List of All users</h1>
    <hr />
    <button onClick={() => dispatch(addUser(fakeData()))}>Add new user</button>
    {/* <button onClick={()=>addNew(fakeData())}>Add new user</button> */}
    <hr />
    <ul>
      <ShowList />
    </ul>
    <hr />
    <DeleteAllUsers />
  </>)
}

export default UserDetails;