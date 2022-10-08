import { UUIDDateAndTime, UUIDInput } from './components'
import './App.css'
import React, { useState } from 'react'
import { UUIDV1ToDate } from './utils'

function App() {
  const [UUID, setUUID] = useState<string>('')
  const [date, setDate] = useState<Date>()
  
  const handleUUIDDecode = () => {
    if (UUID) {
      const date = UUIDV1ToDate(UUID);
      if (date) setDate(date);
    };
  } ;

  return (
    <React.Fragment>
      <div className="container">
        <UUIDInput placeholder="UUID" setUUID={setUUID} onSearch={handleUUIDDecode} />
      </div>
      <div className="container">
        {
          date && <UUIDDateAndTime date={date} />
        }
      </div>
    </React.Fragment>
  )
}

export default App
