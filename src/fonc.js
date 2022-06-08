
 
export   const List = (props) =>{
    console.log(props);
    const {img,ti,dis} = props.list
    return <article className='itm'>
     <h1><img src={img} alt=""></img></h1>
     <h1>{ti}</h1>
     <h4>{dis}</h4>
   </article>
 }

