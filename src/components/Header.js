import Button from './Button'

const onClick = () => {
    console.log('Click')
}

const Header = (props) => {
    return (
       <header className ='header'>
           <h1>{props.title}</h1>
           <Button color='green' text='Add' onClick = {onClick} />
           
       </header>
    )
}


export default Header
