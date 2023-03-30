import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker/locale/en_CA";
import CSSTable from "./CSSComponents/Table";
import { User } from "./Interfaces";
import TableHeader from "./CSSComponents/TableHeader";
import TailwindTableHeader from "./TailwindComponents/TailwindTableHeader";
import TailwindTable from "./TailwindComponents/TailwindTable";

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);
  function createUser(): User {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    return {
      id: faker.datatype.uuid(),
      title: faker.name.jobTitle(),
      lastName,
      firstName,
      email,
      phone: faker.phone.number(),
      account: faker.finance.account(),
      company: faker.company.name(),
      industry: faker.company.bsNoun(),
    };
  }
  const usersArray: User[] = [];
  for (let i = 0; i < 16; i++) {
    let user = createUser();
    usersArray.push(user);
  }
  useEffect(() => {
    setUsersList(usersArray);
  }, []);
  const cssTableElements: any = usersList.map((user) => {
    return (
      <CSSTable
        account={user.account}
        firstName={user.firstName}
        lastName={user.lastName}
        title={user.title}
        email={user.email}
        phone={user.phone}
        company={user.company}
        industry={user.industry}
        key={user.id}
        id={user.id}
      />
    );
  });
  const tailwindTableElements: any = usersList.map((user) => {
    return (
      <TailwindTable
        account={user.account}
        firstName={user.firstName}
        lastName={user.lastName}
        title={user.title}
        email={user.email}
        phone={user.phone}
        company={user.company}
        industry={user.industry}
        key={user.id}
        id={user.id}
      />
    );
  });
  return (
    <div>
      <div className="table-wrapper">
        <h1>CSS Table</h1>
        <table className="table">
          <TableHeader />
          <tbody>{cssTableElements}</tbody>
        </table>
        <h1>Tailwind Table</h1>
        <table className="table">
          <TailwindTableHeader />
          <tbody>{tailwindTableElements}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
