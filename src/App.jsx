import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <h1>React Router Demo</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="meow" element={<About />} />
          <Route path="bark" element={<Dashboard />} />
          <Route path="moo" element={<Cow />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav className="layout">
        <ul className="list">
          <li>
            <Link id="cssButs" to="/">Home</Link>
          </li>
          <li>
            <Link id="cssButs" to="/meow">Meow</Link>
          </li>
          <li>
            <Link id="cssButs" to="/bark">Bark</Link>
          </li>
          <li>
            <Link id="cssButs" to="/moo">Moo</Link>
          </li>
          <li>
            <Link id="cssButs" to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Shelton-McMurphey-Johnson_House_3.jpg/640px-Shelton-McMurphey-Johnson_House_3.jpg"/>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Meow</h2>
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"></img>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Bark</h2>
      <img src="https://www.desktopbackground.org/download/o/2011/01/18/144199_wallpapers-iphone-5-s-labrador-puppy-640-x-1136-640-x-1136_640x1136_h.jpg"/>
    </div>
  );
}

function Cow() {
  return (
    <div>
      <h2>Moo</h2>
      <img src="https://i.pinimg.com/736x/bc/37/a9/bc37a97d4077a568ee329a4d032db473.jpg"/>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
