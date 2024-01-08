import './App.css'
import GroupList from './components/GroupList';
import MessageSection from "./components/MessageSection";

function App() {

  return (
    <div className='mainContainer'>
      <div className='left-container'>
        <GroupList />
      </div>

      <div className='right-container'>
        <MessageSection />
      </div>
      
    </div>
  )
}

export default App
