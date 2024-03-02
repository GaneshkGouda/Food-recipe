import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export default function GLobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipiList, setresipilist] = useState([]);
  const [recipedata, setRecipedata] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setresipilist(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }
  const handelAddtofav = (curritem) => {
    const cpyFavoritesList = [...favorites];
    const index = cpyFavoritesList.findIndex((item) => item.id === curritem.id);

    if (index === -1) {
      cpyFavoritesList.push(curritem);
    } else {
      cpyFavoritesList.splice(index);
    }
    setFavorites(cpyFavoritesList);
  };
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        handelSubmit,
        setSearchParam,
        loading,
        recipiList,
        recipedata,
        setRecipedata,
        favorites,
        setFavorites,
        handelAddtofav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
