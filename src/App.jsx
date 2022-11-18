import {useState, useEffect} from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

function App() {
    const [properties, setProperties] = useState();
    const [filter, setFilter] = useState('')
    // use this state to keep track of the user's saved/bookmarked properties
    const [savedProperties, setSavedProperties] = useState([]);

    const changeFilter = (e) => {
        setFilter(e.target.value)
    }

    const handlePropSave = (item) => {
        const isExist = savedProperties.find(el => el.property_id === item.property_id)
        const el = savedProperties.indexOf(isExist)
        !isExist && setSavedProperties([...savedProperties, item])
        const duplicateArr = [...savedProperties]
        duplicateArr.splice(el, 1)
        isExist && setSavedProperties(duplicateArr)
    }
    useEffect(() => {
        const fetchPropertyData = async () => {
            const response = await fetch('/property-data.json');
            const json = await response.json();
            const data = json.result.properties.elements
            setProperties(data);
        };

        fetchPropertyData();
    }, []);
    return (
        <div className="container mx-auto my-5">
            <Header setFilter={changeFilter} filter={filter}/>
            <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {!!properties && properties.filter(f => f.short_description.includes(filter) || filter === '').map((property) =>
                    <PropertyCard
                        key={property.property_id}
                        property={property}
                        handlePropSave={handlePropSave}
                        savedProp={savedProperties}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
