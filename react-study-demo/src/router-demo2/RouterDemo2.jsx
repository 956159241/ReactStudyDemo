import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



export default function RouterDemo2() {
  return (
    <Router>
      <div>
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/itemlist">项目列表</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/itemlist" component={ItemList} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>首页</h2>
    </div>
  );
}

function ItemList() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>项目列表</h2>
      <ul>
        <li>
          <Link to={`${url}/item1`}>项目一</Link>
        </li>
        <li>
          <Link to={`${url}/item2`}>项目二</Link>
        </li>
        <li>
          <Link to={`${url}/item3`}>项目三</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>选择一个项目</h3>
        </Route>
        <Route path={`${path}/:itemId`} component={Item} />
      </Switch>
    </div>
  );
}

function Item() {
  let { itemId } = useParams();
  return (
    <div>
      <h3>{itemId}</h3>
    </div>
  );
}
