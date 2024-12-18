import { formartCurrency } from '../helpers'
import { OrderItem } from '../types'

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({ order }: OrderContentsProps) {
    
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className='space-y-3 mt-5'>
        {order.length === 0 ? 
            <p className='text-center'>No hay nada en tu orden</p> 
            : (
                order.map(item => {
                    const subtotal  = item.price * item.quantity;
                    const iva       = item.price * item.quantity * 0.16;
                    const total     = subtotal + iva;
                    return (
                        <div key={item.id}> 
                            <p className='text-lg'>{item.name} - {formartCurrency(item.price)}</p>
                            <p className='text-sm'>Cantidad: {item.quantity}</p>
                            <p className='text-sm'>Subtotal: {formartCurrency(subtotal)}</p>
                            <p className='text-sm'>IVA (%16): {formartCurrency(iva)}</p>
                            <p className='text-sm'>Total: {formartCurrency(total)}</p>
                        </div>
                    )
                })
          )}
      </div>
    </div>
  )
}