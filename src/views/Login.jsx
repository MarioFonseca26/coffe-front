import { Link } from "react-router-dom" 

export default function Login() {
  return (
    <>
    <h1 className="text-4xl font-bold"> Iniciar Sesión</h1>
    <p>Para crear un pedido deber iniciar sesión</p>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">

          <div className="mb-4">
            <label 
              htmlFor="email"
              className="text-slate-800"
            >Email:</label>

            <input 
              type="email" 
              id="email"
              className="mt-2 block  p-3 bg-gray-50 w-full"
              name="email"
              placeholder="Tu Email"
            />
          </div>

          
          <div className="mb-4">
            <label 
              htmlFor="password"
              className="text-slate-800"
            >password:</label>

            <input 
              type="password" 
              id="password"
              className="mt-2 block  p-3 bg-gray-50 w-full"
              name="password"
              placeholder="Tu Password"
            />
          </div>

          <input 
          type="submit" 
          value="Iniciar Sesión"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
    </div>

    <nav className="mt-5">
      <Link to="/auth/registro">
        no tienes cuenta! Puedes Crear una presiona aquí.
      </Link>

    </nav>
  </>
  )
}
