let infoSobreCurso = document.getElementById('infoCurso');
let programa = document.getElementById('programa');
let faq = document.getElementById('faq');
let pepito = document.getElementById('pepito');

let info = `<p class="infoCursos card"> En este curso blabalbal aprender chacarera, gato, zamba malanmbo todo blabalbalblalb ejjejejej zambosquiiiiiii</p>`;
let faqinfo =`<p class="infoCursos card"> Si? seee, los podes ver mil veces macho, macho menooooo jejejejeej</p>`
let programaInfo = `<p class="infoCursos card">sarrlangaaa pelelelelel todododo mamaaamiiiiiii</p>`
infoSobreCurso.addEventListener('click',(e)=>{
	pepito.innerHTML = info;
});


faq.addEventListener('click',(e)=>{
	pepito.innerHTML = faqinfo;
});


programa.addEventListener('click',(e)=>{
	pepito.innerHTML = programaInfo;
});