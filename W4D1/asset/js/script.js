const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

// PARTE 1 - FUNZIONE DI RICERCA

function cercaLavoro(titolo, localita) {
  let risultati = [];

  titolo = titolo.toLowerCase();
  localita = localita.toLowerCase();

  for (let i = 0; i < jobs.length; i++) {
    let lavoro = jobs[i];

    let titoloLavoro = lavoro.title.toLowerCase();
    let localitaLavoro = lavoro.location.toLowerCase();

    if (titoloLavoro.includes(titolo) && localitaLavoro.includes(localita)) {
      risultati.push(lavoro);
    }
  }

  return {
    result: risultati,
    count: risultati.length,
  };
}

// TEST DELLA PARTE 1 NELLA CONSOLE

console.log(cercaLavoro("dev", "US"));

// PARTE 2 - RICERCA NELLA PAGINA HTML

document.getElementById("cerca").addEventListener("click", function () {
  let titolo = document.getElementById("titolo").value;
  let localita = document.getElementById("localita").value;

  let ricerca = cercaLavoro(titolo, localita);

  console.log("Risultati trovati:", ricerca);

  document.getElementById("conteggio").innerText =
    "Offerte trovate: " + ricerca.count;

  let lista = document.getElementById("risultati");

  lista.innerHTML = "";

  if (ricerca.count === 0) {
    lista.innerHTML = "<li>Nessuna offerta trovata.</li>";
  } else {
    for (let i = 0; i < ricerca.result.length; i++) {
      let lavoro = ricerca.result[i];

      let elemento = document.createElement("li");

      elemento.innerText = lavoro.title + " - " + lavoro.location;

      lista.appendChild(elemento);
    }
  }
});
