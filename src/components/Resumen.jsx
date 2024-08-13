import useQuiosco from "../hooks/useQuiosco"

export default function Resumen() {
  const { pedido } = useQuiosco();
  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        Mi pedido
      </h1>
      <p className="text-lg my-5">
          Aquí podras ver el resumen y totales de tu pedido
      </p>

      <div className="py-10 ">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">
              No hay elementos en tu pedido aun
          </p>
        ) : (
          <p>si hay algo</p>
        )}
      </div>

      <p className="text-xl mt-10">
        Total: {''}
      </p>

      <form className="w-full">
        <div className="mt-5">
            <input
             type="submit"
             className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 cursor-pointer
                        rounded uppercase font-bold text-white text-center w-full"
            />
        </div>

      </form>
    </aside>
  )
}
