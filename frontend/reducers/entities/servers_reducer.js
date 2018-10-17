import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../../actions/server_actions';

let _nullServer = {current: null, joined: null};

const serversReducer = (state = _nullServer, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER:
      // console.log("show: ", action.server);
      return {...state, current: action.server.id, joined: action.server.id}
    case RECEIVE_SERVERS:
      // console.log("index: ", action.servers);
      return {...state, joined: action.servers};
    case REMOVE_SERVER:
      return _nullServer;
    default:
      console.log(action.type);
      return state;
  }
};

export default serversReducer;