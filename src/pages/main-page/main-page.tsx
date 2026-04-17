import Cities from '../../components/main-page-component/cities';
import {Header} from '../../components/main-page-component/header';
import CitiesPlaces from '../../components/main-page-component/cities-places';
import Map from '../../components/main-page-component/map';
import listOffer from '../../mocks/offers';
import { useState } from 'react';
import CitiesCard from '../../components/main-page-component/cities-card';
import { point } from 'leaflet';





function MainPage (): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState({});

  const handleListItemHover = (listItemName) => {
    console.log(listItemName);
    const currentPoint = listOffer.find((point) =>
      point.title === listItemName,
    );
    console.log(currentPoint);
    setSelectedPoint(currentPoint);
  };

  console.log(selectedPoint);

  return (
    <div className = "page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found"
            >25 places to stay in 'Куку'
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
              Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
            </form>
            <CitiesCard
               temps = {listOffer}
                onListItemHover={handleListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city='Amsterdam'
                points={listOffer}
                selectedPoint={selectedPoint}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
