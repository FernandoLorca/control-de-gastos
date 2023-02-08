import { expenses } from "./expenses"

function App() {
  return (
    <div className="text-slate-200">
      <header className="flex justify-center items-center py-7 px-5 text-center">
        <h1 className="text-3xl font-bold">Control de gastos mensuales</h1>
      </header>

      <main className="px-5 flex flex-col items-center">
        <div className="w-full md:w-2/4 mb-10">
          <div className="border-2 border-slate-600 rounded-lg py-4 px-6 mb-5">
            <p className="text-sm">Total gastado este mes:</p>
            <h2 className="text-4xl font-bold">$650.000</h2>
            <p className="text-xs text-slate-400">26/01/2023</p>
          </div>
          <form className="flex flex-col">
            <div className="flex flex-col w-full gap-4">
              <input
                className="h-10 border-slate-600 rounded-lg px-5 border-2 bg-slate-700 text-slate-200 focus:outline-none focus:ring focus:ring-orange-600"
                type="number"
                min="0"
                placeholder="Ingresa un monto"
              />
              <input
                className="h-10 border-slate-600 rounded-lg px-5 border-2 bg-slate-700 text-slate-200 focus:outline-none focus:ring focus:ring-orange-600"
                type="text"
                placeholder="Ingresa título del gasto"
              />
              <select
                name="select"
                id=""
                className="h-10 border-slate-600 rounded-lg px-5 border-2 bg-slate-700 text-slate-200 focus:outline-none focus:ring focus:ring-orange-600"
              >
                <option>Supermercado</option>
                <option>Feria</option>
                <option>Comida a domicilio</option>
                <option>Drogas</option>
                <option>Cariñosas</option>
                <option>Ofrendas a la iglesia</option>
              </select>
              <textarea
                className="h-20 border-slate-600 rounded-lg px-5 pt-2 mb-4 border-2 bg-slate-700 text-slate-200 focus:outline-none focus:ring focus:ring-orange-600"
                placeholder="Descripción del gasto"
              ></textarea>
            </div>
            <button
              type="submit"
              className="h-16 rounded-lg bg-gradient-to-r from-purple-700 via-yellow-600 to-pink-700 cursor-pointer text-3xl font-bold text-slate-100 hover:opacity-90 transition-all duration-200"
            >
              Ok!
            </button>
          </form>
        </div>

        <div className="w-full md:w-2/4 flex flex-col gap-5">
          {expenses.map(({ id, title, description, date, amount }) => (
            <ul key={id}>
              <li>
                <div className="border-2 p-5 rounded-lg border-slate-600 flex gap-5">
                  <div className="w-1/4 flex justify-end">
                    <img
                      src="https://picsum.photos/80/80"
                      className="rounded-full w-16 h-16"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-sm mb-2 ">{description}</p>
                    <p className="text-xs text-slate-400">{date}</p>
                  </div>
                  <div className="w-1/4 text-xl font-bold flex items-center justify-center">
                    <p>${amount}</p>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
