import "./App.css";
import Ironhacklogo from "./images/Ironhack.png";
import menuTop from "./images/menuTop.png";
import Icon1 from "./images/Icon1.png";
import Icon2 from "./images/Icon2.png";
import Icon3 from "./images/Icon3.png";
import Icon4 from "./images/Icon4.png";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Header-head">
          <img src={Ironhacklogo} className="Ironhacklogo" alt="Ironhacklogo" />
          <img src={menuTop} className="menuTop" alt="menuTop" />
        </div>
        <div className="Header-container">
          <h2 className="Header-title">Say hello to Reactjs</h2>
          <div className="Header-text">
            <h6>
              You will learn how to use the most popular fronted library, and
              become a super Ninja developer
            </h6>
          </div>
          <button className="Header-button">Awesome!</button>
        </div>
      </header>

      <div className="Images">
        <div className="Cards">
          <div className="card">
            <div className="Icon">
              <img src={Icon1} alt="Icon" className="cards" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Declarative</h4>
              <p className="card-text">
                react makes it painless to create interactive UIs.
              </p>
            </div>
          </div>
        </div>

        <div className="Cards">
          <div className="card">
            <div className="Icon">
              <img src={Icon2} alt="Icon" className="cards" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Components</h4>
              <p className="card-text">
                Build encapsulated components that mange their state.
              </p>
            </div>
          </div>
        </div>

        <div className="Cards">
          <div className="card">
            <div className="Icon">
              <img src={Icon3} alt="Icon" className="cards" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Single-Way</h4>
              <p className="card-text">
                A set of immutable values are passed to the component's.
              </p>
            </div>
          </div>
        </div>

        <div className="Cards">
          <div className="card">
            <div className="Icon">
              <img src={Icon4} alt="Icon" className="cards" />
            </div>
            <div className="card-body">
              <h4 className="card-title">JSX</h4>
              <p className="card-text">
                Statically-typed designed to run on modern browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
