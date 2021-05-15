import '../../App.css';

function Header({onChangeValue , inputValueSearch}){

    return (

            <header className={"header"}>
                <input type="text"
                       className="search-input"
                       onChange={onChangeValue}
                       value={inputValueSearch}
                />
            </header>
    )
}

export default Header;
