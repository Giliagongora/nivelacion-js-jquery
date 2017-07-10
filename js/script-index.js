$(document).ready(function(){
	//Desaparecer icono
	//Llame por la class a la flecha que esta en html al js e hice que ejecutara la acción hide(esconder)
	$(".icon-arrow-left-alt").hide();


});
	function printNews(){
		$(".more").append("<span>NUEVAS RECETAS</span>");
	}
printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
      recipesArray.forEach(function(el) {
    if (el.highlighted==true) {
        renderRecipe(el);
    }
    });

	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
/*
	$("list-recipes").append('<a class="item-recipe" href="#><')
*/
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}



