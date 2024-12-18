import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    additem: (item:MenuItem) => void
}

export default function MenuItem({item, additem} : MenuItemProps) {
  return (
    <>
    <button className="border-2 border-[#303036] hover:bg-[#CA2E55] w-full p-3 flex justify-between"
            onClick={() => additem(item)}
    > 
       <p> {item.name}</p>
       <p> ${item.price}</p>
    
    </button>
    </>

  )
}

