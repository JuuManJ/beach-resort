import React, { useState, useContext } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../Components/StyledHero'
import { useParams } from 'react-router-dom'

export default function SingleRoom() {
  
  let params = useParams();
  

    const [slug, setSlug] = useState(params.slug);

    const Rooms = useContext(RoomContext);
  //componentDidMount() {}
  

    const {getRoom} = Rooms;
    const room = getRoom(slug);

    
    if(!room){
      return ( 
      <div className='error'>
        <h3> no such room could be found...</h3>
        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
      </div>
      );
    }
    const {name, description, price, capacity, size, extras, breakfast, pets, images} = room;
    const [main, ...defaultImg] = images;
    
    return (
      <>
     <StyledHero img={images[0] || defaultBcg}>
      <Banner title={`${name} room`}>
        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
      </Banner>
     </StyledHero>
     <section className='single-room'>
      <div className='single-room-images'>
        {defaultImg.map((item, index) => {
          return <img key={index} src={item} alt={name} />
        })}
      </div>
      <div className='single-room-info'>
        <article className='desc'>
          <h3>details</h3>
          <p>{description}</p>
        </article>
        <article className='info'>
          <h3>info</h3>
          <h6>price : ${price}</h6>
          <h6>size : ${size} SQFT</h6>
          <h6>
            max capacity : {" "}
              {capacity > 1 ? `${capacity} people`: 
              `${capacity} person`}
          </h6>
          <h6>{pets?"pets allowed":"no pets allowed"}</h6>
          <h6>{breakfast && "free breakfast included"}</h6>
        </article>
      </div>
     </section>

     <section className='room-extras'>
      <h6>extras</h6>
      <ul className='extras'>
        {extras.map((item,index)=>{
          return <li key={index}>- {item}</li>
        })}
      </ul>
     </section>
      </>
    );
}
