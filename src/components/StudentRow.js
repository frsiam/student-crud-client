import React from 'react';

const StudentRow = ({ stu, index }) => {
    // console.log(stu)
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.religion}</td>
                <td>
                    <button className="btn btn-warning me-4">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default StudentRow;