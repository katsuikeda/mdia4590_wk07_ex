import { useState, useEffect } from 'react';

import './RecipeApi.css';

import RecipeList from '../../components/RecipeList';

export default function RecipeApi() {
    // useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');

    const fetchUri = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchTerm;
    console.log(fetchUri);

    // useEffect for the fetch process
    useEffect(() => {
        fetch(fetchUri)
            .then(res => res.json())
            .then(
                (result) => {
                    // successful load                    
                    setDataResult(result);
                    setIsLoaded(true);
                    console.log(result);
                },
                (error) => {
                    // errors 
                    setError(error);
                    setIsLoaded(true);                    
                }
            )
    }, [searchTerm]);

    return (
        <div>
            <h1>Recipe API</h1>

            <hr />

            <div>
                Enter search term
                {/* Seach input to go here */}
                Enter search term <input onChange={event => setSearchTerm(event.target.value)} />
            </div>

            {/* RecipeList component to go here */}
            <RecipeList data={dataResult} isLoaded={isLoaded} error={error} />
        </div>
    );
}
