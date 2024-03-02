import { useContext } from "react";
import { GlobalContext } from "../../contex";
import Recipe from "../../components/recipies/Recipe";

const Favorites = () => {
  const { favorites, loading } = useContext(GlobalContext);

  if (loading) {
    return <h1>Loading data please wait for a wile</h1>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favorites && favorites.length > 0 ? (
        favorites.map((item) => <Recipe key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added to favorites .
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
