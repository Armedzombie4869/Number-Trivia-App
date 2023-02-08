import React,{useState} from 'react';

const Search = (props) => {
    const [input,setInput] = useState(0);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
        // console.log(input);
    }

    return(
        
            <form className="search" onSubmit ={onSearchSubmit}>
            <input className="input" type="number" value={input} min="0" onChange={(e) => setInput(e.target.value)}></input>
            <button type="submit">Get Fact</button>
            </form>
        
        
    )
}

export default Search;