import CitiesCard from './cities-card';
import { options } from '../const';
import listOffer from '../../mocks/offers';
import {useState} from 'react';
import Cities from './cities';


type CategoryProps= {
  category: string;
}

function Category({category}: CategoryProps): JSX.Element {
  return (
    <li className="places__option places__option--active" tabIndex={0}>
      {category}
    </li>
  );
}

function CategorySort () {
  const categories = options.map((item)=>(
    <Category
      key = {item.id}
      category = {item.category}
    />
  ));
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {categories}
    </ul>
  );
}

type NumberOfProposals = {
  offersCount: number;
}

function CitiesPlaces ({offersCount}: NumberOfProposals): JSX.Element {


  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found"
      >{offersCount} places to stay in 'Куку'
      </b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
        Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <CategorySort />
      </form>
      <CitiesCard temps = {listOffer} />
    </>
  );
}

//export default CitiesPlaces;
