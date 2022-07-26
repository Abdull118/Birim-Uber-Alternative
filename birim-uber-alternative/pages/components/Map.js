import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
'pk.eyJ1IjoiYWJkdWxsMTE4IiwiYSI6ImNsNXhyYmNwbjA5bHIzY3J6aGM0N3U2cWkifQ.6iy9G49UGoRv3r6RGR_BiQ';


const Map = (props) => {
  console.log(props)
    useEffect(()=>{ //Loads upon page reload or opening webpage
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29811, 39.39172],
        zoom: 3,
        })

        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates)
        }

        if(props.dropOffCoordinates){
          addToMap(map, props.dropOffCoordinates)

        if(props.pickupCoordinates && props.dropOffCoordinates){
          map.fitBounds([
            props.dropOffCoordinates,
            props.pickupCoordinates
          ], {padding: 60}
          )
        }
        }
      }, [props.pickupCoordinates, props.dropOffCoordinates])
      
const addToMap = (map, coordinates) => {
  new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
}

    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
  flex-1
  h-1/2
`




