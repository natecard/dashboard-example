import React from 'react'
import './App.css'
import {faker} from '@faker-js/faker/locale/en_CA'
import TableHeader from './Components/TableHeader'
import UserInfo from './Components/UserInfo'

function App() {
  let Title = faker.name.jobTitle()
  let Client = faker.name.fullName()
  let Email = faker.internet.email()
  let Phone = faker.phone.number()
  let Account = faker.finance.account()
  let Company = faker.company.name()
  let Industry = faker.company.bsNoun()

  return (
<div>
  <h1>Header</h1>
  <TableHeader/>
  <UserInfo Account={Account} Client={Client} Title={Title} Email={Email} Phone={Phone} Company={Company} Industry={Industry}
  />
  </div>
  )
}

export default App
