import React, { FC } from 'react'

// function ShoeCard() {
//   return (
//     <button className='bg-white rounded-md shadow-pink-300 shadow-sm hover:shadow-lg hover:shadow-pink-300'>
//         <div className='flex flex-col items-center w-full h-full'>
//             <div className='w-full h-2/3 bg-slate-500 justify-center items-center rounded-t-md'>
//                 <img 
//                 src='https://images.lululemon.com/is/image/lululemon/blissfeel2_ece_minkberry_mar23' 
//                 className='w-full h-full object-cover rounded-t-md'
//                 />
//             </div>
//             <div>
//                 <p>Snikes talon</p>
//             </div>
//             <div>
//                 <p>price: 293</p>
//             </div>
//             <div>
//                 <p>
//                     envio gratis
//                 </p>
//             </div>
//         </div>
//     </button>
//   )
// }

interface Props {
    id?: number,
    name: string,
    price: number
    img: string
}

const ShoeCard: FC<Props> = ({id, name, price, img}) => {
  return (
    <button onClick={()=> console.log(id)} className='bg-white rounded-md shadow-pink-300 shadow-sm hover:shadow-lg hover:shadow-pink-300'>
        <div className='flex flex-col items-center w-full h-full'>
            <div className='w-full h-2/3 bg-slate-500 justify-center items-center rounded-t-md'>
                <img 
                src={img} 
                className='w-full h-full object-fit rounded-t-md'
                />
            </div>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <p>$ {price}</p>
            </div>
            <div>
                <p>
                    envio gratis
                </p>
            </div>
        </div>
    </button>
  )
}

export default ShoeCard