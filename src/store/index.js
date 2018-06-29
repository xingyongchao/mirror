import mirror from "mirrorx";
import Home from './Home';
import UserInfo from './UserInfo';

export default( () => {
  mirror.model(Home);
  mirror.model(UserInfo);
})();