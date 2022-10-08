import { Descriptions } from 'antd'
import React from 'react'
import { format } from 'date-fns'

interface IProps {
  date: Date
}

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

const UUIDDateAndTime: React.FC<IProps> = ({ date }) => (
  <Descriptions title="UUID Date and Time">
    <Descriptions.Item label="date">
      {format(date, 'dd/MM/yyyy')}
    </Descriptions.Item>
    <Descriptions.Item label="time">
      {format(date, 'HH:mm:ss.SSSxxx')}
    </Descriptions.Item>
    <Descriptions.Item label="timezone">{tz}</Descriptions.Item>
  </Descriptions>
)

export { UUIDDateAndTime }
