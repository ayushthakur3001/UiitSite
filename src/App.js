
import Header from './components/Header'
import Quote from './components/Quote'
import Feed from './components/Feed'
import Suggest from './components/Suggest'

function App() {
  return (
    <div >
    {/* className="p-0 m-0 bg-gray-500" */}
      <div  >

        {/* Header */}
        
        <Header />
        <Quote />
        
        <Feed />
        <Suggest/>

        
        
        
        {/* Suggestion */}
      </div>
      
    </div>
  )
}

export default App

