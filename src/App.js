import './App.css';
import Title from './components/Title.jsx';
import ProfileImage from './components/ProfileImage.jsx';
import SocialButtons from './components/SocialButtons.jsx';
import ContactInformation from './components/ContactInformation.jsx';

function App() {
  return (
    <div className="App">
      <Title />
      <ProfileImage />
      <SocialButtons />
      <ContactInformation />
    </div>
  );
}

export default App;
