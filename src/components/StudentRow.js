import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const StudentRow = ({ stu, index, isReload, setIsReload }) => {
    // console.log(stu)
    const navigate = useNavigate()
    const handleEdit = (id) => {
        navigate(`singleStudent/${id}`)
    }
    const handleDelete = id => {
        const isAgree = window.confirm("Are you sure ?");
        if (isAgree) {
            fetch(`https://arcane-thicket-42090.herokuapp.com/deleteStudent/${id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        setIsReload(!isReload)
                        toast.success('Successfully Deleted !!!')
                    }
                })

        }
    }
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{stu.name}</td>
                <td>{stu.fatherName}</td>
                <td>{stu.gender}</td>
                <td>{stu.age}</td>
                <td>{stu.religion}</td>
                <td>
                    <button onClick={() => handleEdit(stu._id)} className="btn btn-success me-4">Edit</button>
                    <button onClick={() => handleDelete(stu._id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default StudentRow;