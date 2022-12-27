import { useState } from 'react';
import { data } from './data';
import Slider from './Slider';

function Castles() {
    const [castleList, setCastleList] = useState(data);
    const [showText, setShowText] = useState(false);
  
    const removeItem = (id) => {
      const newCastleArray = castleList.filter(item => item.id !== id);
      setCastleList(newCastleArray);
    };
  
    const onClickShowText = (item) => {
      item.showMore = !item.showMore;
      setShowText(!showText);
    };
  
    return (
      <div>
        <h1>TOP {castleList.length} most beautiful Polish castles</h1>
        {castleList.map(item => {
          const {id, name, link, description, showMore, img} = item;
          return (
          <div className="wrapper" key={id}>
            <h2>{id}. <a href={link} target="_blank" rel="noreferrer">{name}</a></h2>
            <div>
              {img && img.length > 0 && <Slider images={img}/>}
            </div>
            <p>{showMore? description : description.substring(0, 200)}
            <button className="btnText" onClick={() => onClickShowText(item)}>{showMore ? 'Show less' : 'Show more'}</button>
            </p>
            <div className="container">
              <button className="btnRemove" onClick={() => removeItem(id)}>remove</button>
            </div>
          </div>
          )
        })}
        <div className="container">
          <button className="btnDelete" onClick={() => setCastleList([])}>Delete All</button>
        </div>
      </div>
    );
  }

export default Castles;