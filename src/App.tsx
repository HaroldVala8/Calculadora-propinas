import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/userOrder"

function App() {
  const {order, addItem} = useOrder()


  return (
    console.log(menuItems),
    <>
      <header className="bg-[#CA2E55] py-5">  
        <h1 className="text-[#fffaff] text-center text-3xl font-black"> Calculadora de propinas y Consumo</h1>

      </header>
      <main className="max-w-7xl mx-auto py-7 text-[#303036] font-black grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl"> Menu </h2>

          <div className="space-y-1 mt-3">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                additem={addItem}
              />
            ))}
          </div>    
        </div>

        <div className="border border-dashed border-[#303036] p-5 rounded-lg space-y-10">
          <OrderContents 
            order={order}
          />
         
        </div>


      </main>
      
    </>
  )
}

export default App
