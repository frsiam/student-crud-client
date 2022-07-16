import React from 'react';

const StudentRow = ({ stu, index }) => {
    console.log(stu)
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.height}</td>
            </tr>
        </>
    );
};

export default StudentRow;