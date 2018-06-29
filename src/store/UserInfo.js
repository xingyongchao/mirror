import { actions } from "mirrorx";
import { get } from 'public/utils';

export default {
  name: "UserInfo",
  initialState: {
    userinfo: {
      name: "邢永超"
    },
  },
  reducers: {
    saveState(state, data) { 
      return {
        ...state,
        ...data,
      }
    },
  },
  effects: {
    
  }
};
