import { Input } from '@nextui-org/input'
import React from 'react'

const AdvancedForm = () => {
  return (
    <form autoComplete="off">
    <Input id="username" label='User Name' type="text"  />
  </form>
  )
}

export default AdvancedForm