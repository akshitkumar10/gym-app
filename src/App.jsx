import { useState } from 'react'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import {generateWorkout} from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if(muscles.length < 1){
      return
    }

    let newWorkout = generateWorkout({poison, muscles, goal})
    setWorkout(newWorkout)

    window.location.href = "#workout"
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      setGoal={setGoal}
      goal={goal}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} setWorkout={setWorkout}/>)}
    </main>
  )
}

export default App
