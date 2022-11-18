import { FaBookmark } from 'react-icons/fa';
import {useEffect, useState} from "react";

function PropertyCard({ property, handlePropSave, savedProp }) {
    const [color, setColor] = useState("yellow")
    useEffect(() => {
        const colorS = savedProp.indexOf(property) !== -1 ? 'text-red-600' : 'text-yellow-400'
        setColor(colorS)
    }, [savedProp, property])

    const photo = property.photos[0]
  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
          {photo ?
              <img src={`https://mr0.homeflow.co.uk/${property.photos[0]}`} alt={property.display_address} />
              :
              <img src={'https://flowbite.com/docs/images/examples/image-1@2x.jpg'}/>
          }


        <button className="absolute top-0 right-2" title="Click to bookmark this property" onClick={()=>handlePropSave(property)}>

          <FaBookmark className={color} size="40" />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{property.price}</p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
