import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddStudent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://arcane-thicket-42090.herokuapp.com/student`;
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Student Information addedd successfully !!!');
                    reset();
                }
                else {
                    toast.error('Failed to add information !!')
                    console.log(result)
                }
            })
    };
    return (
        <div className='container py-2'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto'>
                <h3 className='text-primary text-center my-3'>Add New Student Information</h3>

                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Student Name</label>
                    <input placeholder='Student Name' {...register("name")} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputfatherName" className="form-label">Father Name</label>
                    <input placeholder='Father Name' {...register("fatherName")} type="text" className="form-control" id="exampleInputfatherName" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputAge" className="form-label">Age</label>
                    <input placeholder='Age' {...register("age")} type="number" className="form-control" id="exampleInputAge" />
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
                <button type="submit" className="btn btn-primary">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;