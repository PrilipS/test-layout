import { useState, useEffect } from 'react';
import './App.css';

import Header from "./components/header/header";
import MainContent from "./components/maincontent/MainContent";

const arrayBlook = [
    {
      nameItem: "кеды",
        model: "TomyHellFiger"

    },
    {
        nameItem: "кросы",
        model: "Адидyс"
    },
    {
        nameItem: "кросовки",
        model: "Reebook"
    },
    {
        nameItem: "shoe",
        model: "Riker"
    },
    {
        nameItem: "sandals",
        model: "woodie"
    },
    {
        nameItem: "sneackers",
        model: "Snknee"
    },
    {
        nameItem: "flops",
        model: "rubber"
    },
]

function App() {
    const [inputValueSearch, setValue] = useState('');

    const [items, setItems] = useState([]);
    const [goods, setGoods] = useState([]);
    // const onSearchItems = (e) => {
    //     const { value }
    // }

    const  onItemSearch = (e) => {
        const { value }= e.target;
        setValue(value)
//      const NewItem = goods
        const itemAfterFilter = arrayBlook.filter(({model, nameItem}) => (
            nameItem.toLowerCase().includes(value.toLowerCase()) || model.toLowerCase().includes(value.toLowerCase())
            )
        );

        setItems(itemAfterFilter);
    }


    console.log(inputValueSearch);

    useEffect(()=>{
        setTimeout(() => setItems(arrayBlook), 2000)
    }, []);

    // useEffect(() => {
    //     setGoods(goodsList);
    // },[]);

  return (
    <div className="App">

        <Header
            onChangeValue={onItemSearch}
            inputValueSearch={inputValueSearch}
        />

        <Header
            inputValueSearch={inputValueSearch}
            onChangeValue={onItemSearch}
        />

        <MainContent arrayBlock={items}/>
        <div style = {{
            display: "flex",
            justifyContent: "center"

        }}>
        {
            items.length === 0 && ( <div className="loader-wrapper">
                <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>)
        }
        </div>

    </div>
  )
}

export default App;
