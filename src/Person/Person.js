import './Person.css'

const Person = (props) => {
    const style = {
        '@media(min-width: 500px)':{
            width: '400px'
        }
    }
    return ( 
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.changed}/>
        </div>
     );
}
 
export default Person;