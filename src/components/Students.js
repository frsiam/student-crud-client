import React, { useEffect, useState } from 'react';

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
        <div className='container'>
            Total: {students?.length}
        </div>
    );
};

export default Students;