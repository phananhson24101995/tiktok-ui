import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layouts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, idx) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
              return <Route key={idx}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
