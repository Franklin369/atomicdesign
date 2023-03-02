import DefaultLayout from "../../components/templates/DefaultLayout"
import CardsSection from "../../components/organisms/CardsSection/CardsSection"
import { useEffect, useState } from "react"

import './style.css'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    
    const data=[
      {name:"charizard",image:"https://i.ibb.co/KqD5Sjz/pngwing-com-14.png"},
      {name:"Blastoise",image:"https://i.ibb.co/0M3yGwG/pngwing-com-10.png"},
      {name:"charizard",image:"https://i.ibb.co/GsJvk3W/charizard.png"},
      
    ]
    setProducts(data);
  }, [])

  return (
    <>
      <DefaultLayout>
        <CardsSection items={products} title="Últimos pokemons" subtitle="Novedades primavera 2023" />
        <CardsSection items={[...products].reverse()} highlighted title="Destacados" subtitle="Best sellers y ofertas" />
        <CardsSection items={products} title="Ofertas" subtitle="Productos rebajados por temporadas" />
        <CardsSection items={[...products].reverse()} highlighted title="Destacados" subtitle="Best sellers y ofertas" />
        
      </DefaultLayout>
    </>
  )
}

export default Home