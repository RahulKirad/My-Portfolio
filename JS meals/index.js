$.ajax({
    type: 'GET',
    url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    success: function (response) {
        console.log(response);

        for (let i = 0; i < response.categories.length; i++) {

            var newitem = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'> 
                <p>${response.categories[i].idCategory}</p>
                <img src="${response.categories[i].strCategoryThumb}" alt="${response.categories[i].strCategory}" class='img-fluid'/>
                <p>${response.categories[i].strCategory}</p>
            </div>`;

            $('#MyItems').append(newitem); 

        }
    },
    error: function (error) {
        console.log(error);
    }
});
