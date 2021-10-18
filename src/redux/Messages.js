const GET_MESSAGES = 'GREETINGS/GET_MESSAGES';

const loadMessages = (json) => ({
  type: GET_MESSAGES,
  json,
});

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.json.map((message) => {
        const {
          id,
          greeting,
        } = message;
        return {
          id, greeting,
        };
      });
    default:
      return state;
  }
};

const getMessages = () => (dispatch) => {
  fetch('http://127.0.0.1:3000/api/v1/messages')
    .then((response) => response.json())
    .then((json) => dispatch(loadMessages(json)));
};

export {
  loadMessages,
  messageReducer,
  getMessages,
};
