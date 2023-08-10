import  PropTypes from 'prop-types';
// const F1 = () => {

// return 'Ale Belmar'
// }

const newMessage = {
    message: 'Hola Mundo',
    title: 'Ale' 
};

export const FirstApp = ({title, subTitle, name,}) => {

  //console.log(props)
    // const F1 = () => {  //dentro o fuera del functional component va a funcionar igual
    //     return 'Ale Belmar'
    //     }

    /* if( !title) { esto es para obligar  a mandar el titulo
      pero se puede hacer con propTypes en React
      throw new Error('el titulo no existe');
    } */
    
    return (
    <>
    {/* <h1>Hola Mundo</h1> */}
    <h1> { title }</h1>
        {/* <code> { JSON.stringify(newMessage) } </code> */}
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>       
  )
}
//para definir los tipos de las properties
FirstApp.propTypes = {
  title: PropTypes.string.isRequired, 
  subTitle: PropTypes.number.isRequired,
  
}
//estos entran antes que los proptypes
FirstApp.defaultProps = {
  title : 'No hay título',
  subTitle : 'No hay subtítulo',
  name: 'Alexander'
}