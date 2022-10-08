import { Input } from 'antd'
import React, { Dispatch, SetStateAction } from 'react'

const { Search } = Input

interface IProps {
  placeholder: string
  allowClear?: boolean
  setUUID: Dispatch<SetStateAction<string>>
  onSearch: () => void
}

const UUIDInput: React.FC<IProps> = ({
  placeholder,
  allowClear,
  setUUID,
  onSearch,
}) => (
  <Search
    placeholder={placeholder}
    allowClear={allowClear ?? true}
    enterButton="Extract date/time"
    size="large"
    onChange={(e) => setUUID(e.target.value)}
    onSearch={onSearch}
  />
)

export { UUIDInput }
