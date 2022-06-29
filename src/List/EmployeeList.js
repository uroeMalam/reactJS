import React,{useState} from 'react'

export default function EmployeeList() {
    const listEmployee =[
        {empId : 1, fullName:'Naufal',salary:4500},
        {empId : 2, fullName:'Firdaus',salary:5000},
        {empId : 3, fullName:'Ahmad',salary:5500}
    ]
    const [employee,setEmployee] = useState(listEmployee)

    // penambahan gaji
    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
                    return emp
                }
                else{
                    return emp
                }
            })]
        )
    }

    // pengurangan gaji
    const PenguranganGaji = (id) => {
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary - 500
                    return emp
                }
                else{
                    return emp
                }
            })]
        )
    }

    // raise salary
    const raiseSalary = (id) => {
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary + (emp.salary *0.1)
                    return emp
                }
                else{
                    return emp
                }
            })]
        )
    }

    // cut salary
    const cutSalary = (id) => {
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary - (emp.salary *0.05)
                    return emp
                }
                else{
                    return emp
                }
            })]
        )
    }
    
  return (
    <div>
        <h2>List Employee</h2>
        <ul>
            {
                (employee||[]).map(emp=>(
                    <li key={emp.empId}>
                        <p>Emp Id : {emp.empId}</p>
                        <p>Full Name : {emp.fullName}</p>
                        <p>Salary : {emp.salary}</p>
                        <button onClick={()=>PenambahanGaji(emp.empId)}>Penambahan Gaji</button>
                        <button onClick={()=>PenguranganGaji(emp.empId)}>Pengurangan Gaji</button>
                        <button onClick={()=>raiseSalary(emp.empId)}>Raise salary 10%</button>
                        <button onClick={()=>cutSalary(emp.empId)}>Cut salary 5%</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
