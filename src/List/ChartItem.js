import React,{useState,useEffect} from 'react'

export default function ChartItem() {
    const listChart = [
        {prodId : 1, prodName:'Shampoo', qty:1, salary:5000},
        {prodId : 2, prodName:'Shoap', qty:1, salary:4000},
        {prodId : 3, prodName:'Tooth Paste', qty:1, salary:6000},
    ]
    const [cart,setCart] = useState(listChart)
    const [total,setTotal] = useState(0)
    const [totalQty, setTotalQty] = useState(0)

    useEffect(()=>{
        const TotalHarga = cart.reduce((sum,el)=>sum + (el.salary * el.qty),0)
        setTotal(TotalHarga)
        const TotalQuantity = cart.reduce((sum,el)=> sum + el.qty,0)
        setTotalQty(TotalQuantity)
    }, [cart]) // tambah cart lagi di parameter ke 2 biar enggak infinity loop 

    // add Qty
    const addQty = (id) => {
        setCart(
            [...cart.map(cart=>{
                if (id === cart.prodId) {
                    cart.qty += 1
                    return cart
                }
                else{
                    return cart
                }
            })]
        )
    }

    // reduce Qty
    const reduceQty = (id) => {
        setCart(
            [...cart.map(cart=>{
                if (id === cart.prodId) {
                    // cart.qty -= 1 // gini aja juga bisa tapi ntar bisa sampe minus
                    // biar gak minus
                    (cart.qty === 0) ? cart.qty = 0 : cart.qty -= 1
                    return cart
                }
                else{
                    return cart
                }
            })]
        )
    }
    
  return (
    <div>
        <h2>List of Carts</h2>
        <table>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sub Total</th>
            <th>Action</th>
            <tbody>
                {
                    (cart||[]).map(carts=>(
                        <tr key={carts.prodId}>
                            <td>{carts.prodId}</td>
                            <td>{carts.prodName}</td>
                            <td>{carts.qty}</td>
                            <td>{carts.salary}</td>
                            <td>{carts.qty * carts.salary}</td>
                            <td>
                                <button onClick={()=>addQty(carts.prodId)}>+</button>
                                <button onClick={()=>reduceQty(carts.prodId)}>-</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <h3>Total Harga : Rp.{total} </h3>
        <h3>Total Quantity : {totalQty} </h3>
    </div>
  )
}
