import React, { useState, useEffect } from 'react';
const Table = ({ products, handleEdit, handleDelete }) => {
  products.forEach((product, i) => {
    product.id = i + 1;
  });

  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: null,
  // });
  const [Role, setRole] = useState(false);
  useEffect(() => {
    const role = JSON.parse(localStorage.getItem('role'));
    if(role === "admin") setRole(true);
  }, []);

  return (
    <div className="contain-table"  style={{overflowX : 'scroll',width:"100%"}}>
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Selected By</th>
            <th>Image Link</th>
            <th>Age</th>
            <th>Enrolled Date</th>
            {(Role) && ( <th colSpan={2} className="text-center">
              Actions
            </th>)}
          </tr>
        </thead>
        <tbody >
          {products.length > 0 ? (
            products.map((product, i) => (
              <tr key={product.id}>
                <td style={{ maxWidth:"10rem", whiteSpace: "nowrap",  overflow: "hidden",textOverflow: "ellipsis"}}>{i + 1}</td>
                <td style={{ maxWidth:"10rem", whiteSpace: "nowrap",  overflow: "hidden",textOverflow: "ellipsis"}}>{product.title}</td>
                <td style={{ maxWidth:"20rem", whiteSpace: "nowrap",  overflow: "hidden",textOverflow: "ellipsis"}}>{product.createdBy}</td>
                <td style={{ maxWidth:"20rem", whiteSpace: "nowrap",  overflow: "hidden",textOverflow: "ellipsis"}}>{product.image}</td>
                <td style={{ maxWidth:"20rem", whiteSpace: "nowrap",  overflow: "hidden",textOverflow: "ellipsis"}}>{product.price}</td>
                <td style={{ maxWidth:"20rem", whiteSpace: "nowrap",  overflow: "hidden",textOverflow: "ellipsis"}}>{product.createdAt} </td>
                {(Role) && (<><td className="text-right">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td></>)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Student</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
