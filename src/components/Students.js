import React, { useEffect, useState } from 'react';
import StudentRow from './StudentRow';

const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return setStudents(data.result)
            })
    }, [])
    return (
        <div className='container my-5'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((stu, index) => <StudentRow key={index} stu={stu} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Students;