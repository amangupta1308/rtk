import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const ShowList = () => {

    const userData = useSelector((state) => {
        return state.users;
    });

    return (<>
        {userData.map((val, ind) => {
            // return <li key={ind}>{val}</li>;
            // console.log(ind);
            return <ListItem key={ind} val={val} id={ind} />
        })}
    </>)
}

export default ShowList;