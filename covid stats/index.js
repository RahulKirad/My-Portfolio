$.ajax({
    type: 'GET',
    url: 'https://disease.sh/v3/covid-19/countries',
    success: function (response) {
        console.log(response); 

        for (let i = 0; i < response.length; i++) {
            
            var totalActive = response[i].cases - (response[i].recovered + response[i].deaths);

           
            var tableRow = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${response[i].country}</td>
                    <td>${response[i].cases}</td>
                    <td>${response[i].deaths}</td>
                    <td>${response[i].recovered}</td>
                    <td>${totalActive}</td>
                </tr>
            `;

            
            $('#tbody').append(tableRow);
        }

        $('#covidtable').DataTable()
    },
    error: function (error) {
        console.error("Error fetching data:", error);
    }
});
