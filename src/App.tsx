import { UUIDDateAndTime, UUIDInput } from './components'
import { message } from 'antd'
import './App.css'
import React, { useEffect, useState } from 'react'
import { getUUIDVersion, UUIDV1ToDate } from './utils'

function App() {
  const [UUID, setUUID] = useState<string>('')
  const [date, setDate] = useState<Date | null>()

  const error = () => {
    message.error('Invalid UUID version or invalid UUID!', 1)
  }

  const handleUUIDDecode = () => {
    if (UUID) {
      const UUIDVersion = getUUIDVersion(UUID)
      if (UUIDVersion === 1) {
        const date = UUIDV1ToDate(UUID)
        if (date) setDate(date)
        return
      }
      setDate(null)
      error()
    }
  }

  useEffect(() => {
    if (!UUID) setDate(null);
  }, [UUID]);

  return (
    <React.Fragment>
      <div className="container">
        <UUIDInput
          placeholder="Version 1 UUID"
          setUUID={setUUID}
          onSearch={handleUUIDDecode}
        />
      </div>
      <div className="container">{date && <UUIDDateAndTime date={date} />}</div>
    </React.Fragment>
  )
}

export default App
