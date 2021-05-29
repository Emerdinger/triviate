const fs = firebase.firestore();

const rankingDeportes = document.querySelector("#ranking-deportes");
const rankingKnowledge = document.querySelector("#ranking-knowledge");
const rankingArt = document.querySelector("#ranking-art");
const rankingScience = document.querySelector("#ranking-science");
const rankingAnimals = document.querySelector("#ranking-animals");
const rankingGeography = document.querySelector("#ranking-geography");


//Ranking Deportes

const rankingSportsData = fs.collection("rankingDeportes");
const ordenadoDeportes = rankingSportsData.orderBy("points", 'desc');
ordenadoDeportes.get().then((snapshot) => {
    rankings(snapshot.docs,"sports")
});

const rankingKnowledgeData = fs.collection("rankingConocimiento");
const ordenadoConocimiento = rankingKnowledgeData.orderBy("points", 'desc');
ordenadoConocimiento.get().then((snapshot) => {
    rankings(snapshot.docs,"knowledge")
});

const rankingArtData = fs.collection("rankingArte");
const ordenadoArte = rankingArtData.orderBy("points", 'desc');
ordenadoArte.get().then((snapshot) => {
    rankings(snapshot.docs,"art")
});

const rankingScienceData = fs.collection("rankingCiencia");
const ordenadoCiencia = rankingScienceData.orderBy("points", 'desc');
ordenadoCiencia.get().then((snapshot) => {
    rankings(snapshot.docs,"science")
});

const rankingAnimalsData = fs.collection("rankingAnimales");
const ordenadoAnimales = rankingAnimalsData.orderBy("points", 'desc');
ordenadoAnimales.get().then((snapshot) => {
    rankings(snapshot.docs,"animals")
});

const rankingGeographyData = fs.collection("rankingGeografia");
const ordenadoGeografia = rankingGeographyData.orderBy("points", 'desc');
ordenadoGeografia.get().then((snapshot) => {
    rankings(snapshot.docs,"geography")
});

//Ranking Conocimiento

const rankings = (data,ranking) => {
    if(data.length) {
        let numberRank = 0;
        let html = '';
        data.forEach(doc => {
            const usersRanking = doc.data();
            if (numberRank < 10) {
                const li = `
                <li class="list-group-item list-group-item-action">
                    <h3>${numberRank+1}</h3>
                    <h5>Usuario: ${usersRanking.user}</h5>
                    <p>Puntaje ${usersRanking.points}</p>
                </li>
                `;
                html += li;
                numberRank++
            }else{
                return
            }
        });

        if(ranking == 'sports'){
            rankingDeportes.innerHTML = html;
        }else if(ranking == 'knowledge'){
            rankingKnowledge.innerHTML = html;
        }else if(ranking == 'art'){
            rankingArt.innerHTML = html;
        }else if(ranking == 'science'){
            rankingScience.innerHTML = html;
        }else if(ranking == 'animals'){
            rankingAnimals.innerHTML = html;
        }else if(ranking == 'geography'){
            rankingGeography.innerHTML = html;
        }

    }else{
        if(ranking == 'sports'){
            rankingDeportes.innerHTML = `No hay datos`;
        }else if(ranking == 'knowledge'){
            rankingKnowledge.innerHTML = `No hay datos`;
        }else if(ranking == 'art'){
            rankingArt.innerHTML = `No hay datos`;
        }else if(ranking == 'science'){
            rankingScience.innerHTML = `No hay datos`;
        }else if(ranking == 'animals'){
            rankingAnimals.innerHTML = `No hay datos`;
        }else if(ranking == 'geography'){
            rankingGeography.innerHTML = `No hay datos`;
        }
    }
}

