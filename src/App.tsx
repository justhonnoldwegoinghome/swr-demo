import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { AnyJokeCard } from "./AnyJokeCard";
import { ProgrammingJokeCard } from "./ProgrammingJokeCard";
import { Unbrokered } from "./Unbrokered";
import { UnbrokeredTwo } from "./UnbrokeredTwo";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f2f3f5",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <div style={{ display: "flex", gap: "15px" }}>
                  <Link to="/">
                    <Button primary style={{ width: "140px" }}>
                      For all
                    </Button>
                  </Link>
                  <Link to="/programming">
                    <Button secondary style={{ width: "140px" }}>
                      For nerds
                    </Button>
                  </Link>
                </div>
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<AnyJokeCard />} />

            <Route path="/programming" element={<ProgrammingJokeCard />} />
          </Route>
          <Route path="/unbrokered" element={<Unbrokered />} />
          <Route path="/unbrokered2" element={<UnbrokeredTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
