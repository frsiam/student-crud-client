import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

const UpdateStudent = () => {
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const [student, setStudent] = useState()
    const url = `http://localhost:5000/student/${id}`;
    useEffect(() => {
        fetch(`http://localhost:5000/student/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStudent(data)
            })
    }, [id])
    const onSubmit = data => {
        console.log(data);
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount === 1) {
                    toast.success('Successfully Updated Information !!!')
                }
                else {
                    toast.error('Failed to update !!!')
                }
            })
    };
    return (
        <div className='container py-2'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto'>
                <h3 className='text-primary text-center my-3'>Update Student Information</h3>

                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Student Name</label>
                    <input placeholder={student?.name} {...register("name")} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputfatherName" className="form-label">Father Name</label>
                    <input placeholder={student?.fatherName} {...register("fatherName")} type="text" className="form-control" id="exampleInputfatherName" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputAge" className="form-label">Age</label>
                    <input placeholder={student?.age} {...register("age")} type="number" className="form-control" id="exampleInputAge" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputReligion" className="form-label">Religion</label>
                    <select {...register("religion")} className="form-select" aria-label="Default select example">
                        <option value="Islam">Islam</option>
                        <option value="Hindu">Hindu</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                    <select {...register("gender")} className="form-select" aria-label="Default select example">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdateStudent;