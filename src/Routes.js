import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route exact path="/" component={lazy(() => import("./views/Home"))} />
        <Route
          exact
          path="/login"
          component={lazy(() => import("./views/auth/Login"))}
        />
        <Route
          exact
          path="/register"
          component={lazy(() => import("./views/auth/Register"))}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
