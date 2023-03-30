import React from "react";
export default function TailwindTableHeader() {
  return (
    <thead className="table-headrow">
      <tr>
        <th className="col-1">Account #</th>
        <th className="col-2">First Name</th>
        <th className="col-3">Last Name</th>
        <th className="col-4">Title</th>
        <th className="col-5">Email</th>
        <th className="col-6">Phone Number</th>
        <th className="col-7">Company Name</th>
        <th className="col-8">Industry</th>
      </tr>
    </thead>
  );
}
