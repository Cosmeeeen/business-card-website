import './App.css';
import Title from './components/Title.jsx';
import ProfileImage from './components/ProfileImage.jsx';
import SocialButtons from './components/SocialButtons.jsx';
import ContactInformation from './components/ContactInformation.jsx';
import ChangingColorLetters from './components/ChangingColorLetters';
import mainImage from './images/mainImage.jpeg';

function App() {
  return (
    <div className="App">
      <Title>
        <i className="fas fa-code"></i> {/* FontAweosme Custom Icon */}
        <ChangingColorLetters>Cosmin Ilie</ChangingColorLetters> {/* Name */}
        <h3>Frontend + CMS Developer</h3> {/* Description */}
      </Title>

      <ProfileImage image={mainImage}/>
      <SocialButtons />
      <ContactInformation phone="+4074 016 077" email="iliemcosmin@yahoo.ro"/>
    </div>
  );
}

export default App;
