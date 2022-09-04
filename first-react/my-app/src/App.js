import logo from './logo.svg';
import './App.css';
import Box from './box.jsx';
import MyGallery from './myCode.jsx';
// import myGallery from './myCode.jsx'


function App() {
  return (
    <main>
      <Box name="일번" number="1" />
      <Box name="이번" number="2" />
      <Box name="삼번" number="3" />
      <Box name="사번" number="4" />

      <ul className='gallery'>
        <MyGallery num="1" />
        <MyGallery num="2" />
        <MyGallery num="3" />
        <MyGallery num="4" />
      </ul>
    </main>
  );
}

export default App;
