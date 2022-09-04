import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Section from './section.js';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section class="section01" text="SECTION1" />
        <Section class="section02" text="SECTION2" />
        <Section class="section03" text="SECTION3" />
        <Section class="section04" text="SECTION4" />
      </main>
    </div>
  );
}

export default App;
