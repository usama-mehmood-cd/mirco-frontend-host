import { lazy } from "react";

// import { capitalize } from "remote_app/utils";
import { Routes, Route } from "react-router";
import Home from "./components/home";
import RemoteWrapper from "./components/remoteWrapper";
import LayoutWrapper from "./components/layout";

// const RemoteButton = lazy(() => import("remote_app/Button"));
// const RemoteHeader = lazy(() => import("remote_app/Header"));
const RemoteProducts = lazy(() => import("remote_app/Products"));

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutWrapper>
            <Home />
          </LayoutWrapper>
        }
      />
      <Route
        path="/products"
        element={
          <LayoutWrapper>
            <RemoteWrapper>
              <RemoteProducts />
            </RemoteWrapper>
          </LayoutWrapper>
        }
      />
    </Routes>
  );
}
