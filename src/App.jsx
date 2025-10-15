
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Testimonials from './Components/Testimonials'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 mx-auto">
        <Stats title="50+" description="Complete projects" />
        <Stats title="20+" description="Ongoing projects" />
        <Stats title="100+" description="Total tasks" />
        <Stats title="5+" description="Team members " />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 mx-auto' >
        <Testimonials testimonials="This service is fantastic! Highly recommend." client="Jane Smith" clientName="Happy Client" />
        <Testimonials testimonials="A game changer for our business." client="John Doe" clientName="Satisfied Customer" />
        <Testimonials testimonials="Exceptional quality and support." client="Alice Johnson" clientName="Loyal Client" />
      </div>

    </>

  )
}

export default App
