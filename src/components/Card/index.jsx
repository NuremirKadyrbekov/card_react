import './CardStyle.css'
export const Card = ({data}) =>{
  
//   1-case
    // return(
    //     <div className='Card' style={{backgroundColor:data.color}}>
    //         {
    //             data.title
    //         }
    //     </div>
    // );

    // if(data.color){
    //     return <div className='Card' style={{backgroundColor:data.color}}>
    //              { data.title}
    //    </div>
    // }else{
    //     return <div className='Card' style={{backgroundImage:`url(${data.img})`}}>
    //              { data.title}
    //    </div>
    // }
// 2-case
    // switch(data.color){
    //     case null:
    //         return(
    //             <div className='Card' style={{backgroundImage:`url(${data.img})`}}>
    //             { data.title}
    //               </div>
    //         )
    //         default:
    //             return(
    //                 <div className='Card' style={{backgroundColor:data.color}}>
    //                        { data.title}
    //                    </div>
    //             )
    // }
// 3-case
// return (
//     <>
//       {
//         data.color
//         ?
//         <div className='Card' style={{backgroundColor:data.color}}>
//                             { data.title}
//                    </div>
//         :
//         <div className='Card' style={{backgroundImage:`url(${data.img})`}}>
//                   { data.title}
//               </div>
//       }   
    
//     </>
// )

//4-case

return(
   <>
     {data.color &&  <div className='Card' style={{backgroundColor:data.color}}>
                             { data.title}
                   </div>
                   }
                   {
                    data.color === null && <div className='Card' style={{backgroundImage:`url(${data.img})`}}>
                                   { data.title}
                              </div>
                   }
   </>


)
}