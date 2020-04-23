axios.get('https://api.github.com/users/diego3g')
    .them(function (response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });