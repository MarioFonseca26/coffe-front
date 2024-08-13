import useQuiosco from "../hooks/useQuiosco"
export default function Categoria({categoria}) {

    const {handleClickCategoria, categoriaActual} = useQuiosco();
    const {icono, id, nombre} = categoria

    const resaltarCategoriaActual = () => categoriaActual.id === id ? `bg-amber-400` : `bg-white`
  return (
    <div className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 `}>
        <img
         src={`/img/icono_${icono}.svg`}
         alt="Imagen icono"
         className="w-12"
        />
        <button 
          className="font-bold cursor-pointer text-lg truncate"
          type="button"
          onClick={() => handleClickCategoria(id)}
          >
          {nombre}
        </button>
      
    </div>
  )
}
