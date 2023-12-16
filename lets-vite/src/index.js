class Employee extends React.Component {
    addEmployee = () => {
        alert('Clicked on addEmployee Method');
    }    

    render() {
        return <div>
            <h2>
            Employee Component
            </h2>
            <button onClick={this.addEmployee}>Add Employee</button>
        </div>
    }
}

const element1 = <Employee></Employee>

ReactDOM.createRoot(element1, document.getElementById('root'));