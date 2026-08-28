import HeroCard from "../HeroCard/HeroCard";
import RecipeList from "../Recipe/RecipeList/RecipeList";
import "./home.scss";
export default function MainPage(){
    return (
        <main className="page">
            <div className="container">
                <HeroCard/>
                <RecipeList/>
            </div>
        </main>
    );
}