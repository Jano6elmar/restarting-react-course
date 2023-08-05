// const F1 = () => {

// return 'Ale Belmar'
// }

const newMessage = {
    message: 'Hola Mundo',
    title: 'Ale' 
};

export const FirstApp = ({title, subTitle}) => {

  //console.log(props)
    // const F1 = () => {  //dentro o fuera del functional component va a funcionar igual

    //     return 'Ale Belmar'
    //     }

  return (
    <>
    <h1>Hola Mundo</h1>
    <h3> { title }</h3>
        {/* <code> { JSON.stringify(newMessage) } </code> */}
        <p>{ subTitle + 1}</p>
    </>       
  )
}
