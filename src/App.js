import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import { publicRoutes } from "~/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, idx) => {
              const Page = route.component;
              return <Route key={idx} path={route.path} element={<Page />} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
