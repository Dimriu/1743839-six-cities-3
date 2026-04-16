import {useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from "./use-map";

function Map ({city}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <section className="cities__map map"

      ref={mapRef}
    >
    </section>
  );
}

export default Map;
