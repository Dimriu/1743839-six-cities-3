import {citiesData} from '../const';
import {useState} from 'react';



type CityProps = {
  city: string;
  isCitiesActive: boolean;
}

function City ({city, isCitiesActive}: CityProps): JSX.Element {
  const classCity = `locations__item-link tabs__item"
  ${isCitiesActive ? 'tabs__item--active' : 'href="#"'}
  `;
  const handleClik = (evt) => {
    let u = evt.target.textContent;
    for (let i=0; i<citiesData.length; i++) {
      if (citiesData[i].city === u) {
        citiesData[i].active = true;
      } else {
        citiesData[i].active = false;
      }
    }
  };


  return (
    <li className="locations__item" >
      <a className={classCity} onClick={handleClik}>
        <span>{city}</span>
      </a>
    </li>
  );
}


function Cities (): JSX.Element {
  const [count, setCount] = useState('Paris');
  //console.log(count);

  const handleClick = (evt) => {
    //console.log(evt.target.textContent);
    setCount(evt.target.textContent);
  }

  const cities = citiesData.map((item) => (
    <City
      key = {item.id}
      city = {item.city}
      isCitiesActive = {item.active}
    />
  ));
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" onClick={handleClick}>
        {cities}
      </ul>
    </section>
  );
}


export default Cities;
