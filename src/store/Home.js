import { actions } from "mirrorx";
import { get } from 'public/utils';

export default {
  name: "Home",
  initialState: {
    lists: [],
    title: "博客"
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
    getHomelist(){
      get("/api/home/list").then((data) => {
        console.log(data);
        actions.Home.saveState({
          lists: data
        });
      }, (error) => {
        console.log(error);
      });
    }
  }
};
