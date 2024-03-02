import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contex";

const Details = () => {
  const { id } = useParams();
  const { recipedata, setRecipedata, favorites, handelAddtofav } =
    useContext(GlobalContext);
  useEffect(() => {
    async function recipiData() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      if (data) setRecipedata(data?.data);
    }
    recipiData();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipedata?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipedata?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipedata?.recipe?.title}
        </h3>
        <div>
          <button
            className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
            onClick={() => handelAddtofav(recipedata?.recipe)}
          >
            {favorites.findIndex(
              (item) => item.id === recipedata?.recipe.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipedata?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>{" "}
      </div>
    </div>
  );
};
export default Details;
