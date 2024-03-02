import { useContext } from "react";
import { GlobalContext } from "../../contex";
import Recipe from "../../components/recipies/Recipe";

const Home = () => {
  const { recipiList, loading } = useContext(GlobalContext);

  if (loading) {
    return <h1>Loading data please wait for a wile</h1>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipiList && recipiList.length > 0 ? (
        recipiList.map((item) => <Recipe key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
};
export default Home;
