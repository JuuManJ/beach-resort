import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title:'free cocktails',
                info:'You get free cocktails every morning just for booking with us. What a morning!!'
            },
            {
                icon: <FaHiking/>,
                title:'Hiking trips',
                info:'Organized trips to the forests around the resort, feed your eyes on our beautiful view..'
            },
            {
                icon: <FaShuttleVan/>,
                title:'Free shuttles',
                info:'Free shuttle vans to & fro the resort and anywhere in the city!!'
            },
            {
                icon: <FaBeer/>,
                title:'Best of beers',
                info:'Addition to the cocktails, we have just the beer you want (for a little price). Beer with us:)'
            }
        ]
    }
  render() {
    return (
      <section className='services'>
        <Title title='Services'></Title>
        <div className='services-center'>
            {this.state.services.map((item, index) => {
                return <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>

            })}
        </div>
      </section>
    )
  }
}
