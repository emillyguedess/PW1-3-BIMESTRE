let chave = "19814f7d4b8f56a9a15da4921d5b4e6f";

const clique =() => {
    let cidade = document.querySelector(".input-cidade").value

    if(!cidade){
      alert("inserir o nome da cidade")
    buscarCidade(cidade);

    }else{
       buscarCidade(cidade);

}
}
 //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 const buscarCidade = async (cidade) => {
    let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+
    cidade+
    "&appid="+
    chave+
    "&lang=pt_br"+
    "&units=metric") 
    .then(res => res.json())

     
    console.log(dados); 
      colocaNatela(dados)
      

 }

   function colocaNatela(dados){
    document.querySelector (".nome-cidade").innerHTML = dados.name;
    document.querySelector (".nome-temp").innerHTML = dados.main.temp;
    document.querySelector (".nome-descricao").innerHTML = dados.weather[0].description;
    document.querySelector (".nome-umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img").src= "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

 }