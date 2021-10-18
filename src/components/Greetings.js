import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { getMessages } from '../redux/Messages';

const Greeting = () => {
  const messages = useSelector((state) => state.messageReducer);

  const [message, setMessage] = useState({});
  const { greeting, id } = message;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      dispatch(getMessages());
    }
  }, [dispatch, messages.length]);

  const collade = () => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <ListGroup>
      <Button variant="primary" onClick={collade}>Load Messages</Button>
      <ListGroupItem key={id}>
        <h4>{greeting}</h4>
      </ListGroupItem>
      </ListGroup>
  );
};

export default Greeting;