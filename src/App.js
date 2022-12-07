import './App.css';
import ProfileTitle from './Components/ProfileTitle';
import ProfileExperience from './Components/ProfileExperience';

function App() {
  return (
    <div className="App">
      <div className='portfolioContainer'>
        <div>
        <ProfileTitle name="Sangeetha Ramkumar" role="Front End Developer"/>
        <ProfileExperience />
        </div>
        
        <div>
          contacts and certifications
        </div>
      </div>
      
    </div>
  );
}

export default App;
