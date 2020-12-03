// const mongoose = require("mongoose");
// const School = require("../models/school-model");
// const MONGO_DB = require("../configs/db.config");

// const nurseries = [
//   {
//     name: "A Escolinha da Pipas - Creche ",
//     address: "Rua Nóbrega e Sousa, Lj. 3D ",
//     description:
//       "Estamos empenhadas, em ligação com a família, na criação de oportunidades adequadas a que cada criança se desenvolva de uma forma harmoniosa e feliz.",
//     email: "filipa.geraldes@escolinhadapipas.pt",
//     site: "https://www.aescolinhadapipas.pt/",
//     phone: "217 530 042",
//     rating: "",
//     photo: "https://www.aescolinhadapipas.pt/espaco?lightbox=image_m88",
//     globalID: "",
//     geo: {
//       lat: 38.77340540374433,
//       lng: -9.153980116631432,
//     },
//   },
//   {
//     name: "A Patatina",
//     address: "Rua Eng. Manuel Rocha 31 Loja D e E",
//     description:
//       "Na Patatina o seu bebé irá encontrar um lugar muito acolhedor, onde o relacionamento afectivo é o mais importante",
//     email: "cristina.pires@apatatina.pt",
//     site: "http://www.apatatina.pt",
//     phone: "21 848 4757",
//     rating: "",
//     photo: "",
//     globalID: "",
//     geo: {
//       lat: 38.75990863208062,
//       lng: -9.138826802200622,
//     },
//   },
//   {
//     name: "Lua Crescente",
//     address:
//       " Estrada da Circunvalação, Lt 2 Urbanização Jardins do Cristo Rei",
//     description:
//       "Na Lua Crescente, estamos atentos e respeitamos os hábitos de cada bebé. Contamos que a escola deve ser uma extensão do ambiente familiar, integrando os bebés num segundo círculo familiar",
//     email: "geral@luacrescente.pt",
//     site: "https://www.luacrescente.pt",
//     phone: "21 852 0043",
//     rating: "",
//     photo: "",
//     globalID: "",
//     geo: {
//       lat: 38.77544105727753,
//       lng: -9.107563425102565,
//     },
//   },
//   {
//     name: "Infantário Jardim de Infância N’Avózinha",
//     address: "Av. da Liberdade, nº262",
//     description:
//       "O Colégio N’Avózinha é uma instituição particular vocacionada para o ensino, abrangendo a faixa etária que vai desde os 3 Anos de idade até ao 4° ano (englobando assim as valências de Pré-escolar e 1° Ciclo).",
//     email: "naavozinha@gmail.com ",
//     site: "http://www.naavozinha.pt",
//     phone: "21 356 0367",
//     rating: "",
//     photo: "",
//     globalID: "",
//     geo: {
//       lat: 38.725042557809495,
//       lng: -9.148217034929099,
//     },
//   },
//   {
//     name: "Infantário Os Fraldas",
//     address: "R. Egas Moniz 8, 1900-218 Lisboa",
//     description:
//       "Destinado a crianças a partir dos 3 meses, situado no centro de Lisboa, fácil acesso, reconhecido pelo MSSS e com projecto pedagógico próprio que estimulam um desenvolvimento equilibrado da criança",
//     email: "infantarioosfraldas@gmail.com",
//     site: "https://infantarioosfraldas.com/",
//     phone: "21 846 5505",
//     rating: "",
//     photo: "",
//     globalID: "",
//     geo: {
//       lat: 38.73956479230151,
//       lng: -9.13024673769617,
//     },
//   },
//   {
//     name: "Creche Maria Catita",
//     address: "Rua Manuel da Fonseca 8D",
//     description:
//       "A Creche Maria Catita iniciou a sua atividade em 2009 neste espaço sob outra marca, mas hoje com a sua própria identidade assume-se como uma instituição de referência em Lisboa, no que toca à qualidade única dos seus serviços. Temos por missão ser uma extensão da família e proporcionar um desenvolvimento harmonioso das crianças nos seus primeiros anos de vida.",
//     email: "geral@crechemariacatita.pt",
//     site: "http://crechemariacatita.pt/",
//     phone: "21 722 33 64",
//     rating: "",
//     photo: "",
//     globalID: "",
//     geo: {
//       lat: 38.750436521274565,
//       lng: -9.169434711640292,
//     },
//   },
//   {
//     name: "Colégio do Largo",
//     address: "Av. de António José de Almeida 28",
//     description:
//       "O Colégio do Largo foi criado para ser um espaço onde as crianças brincam, criam laços de afetividade e crescem felizes. Temos o privilégio de estarmos numa magnífica casa de 1950 que tem um jardim mágico e espaços amplos com muita luz natural.",
//     email: "info@colegiodolargo.com",
//     site: "https://www.colegiodolargo.com",
//     phone: "21 845 5930",
//     rating: "",
//     photo: "",
//     globalID: "",
//     geo: {
//       lat: 38.738951947783086,
//       lng: -9.141134042328058,
//     },
//   },
// ];

// School.create(nurseries)
//   .then((nurseriesFromDB) => {
//     console.log(`Created ${nurseriesFromDB.length} nurseries`);
//     // Once created, close the DB connection
//     mongoose.connection.close();
//   })
//   .catch((err) =>
//     console.log(
//       `An error occurred while creating nurseries from the DB: ${err}`
//     )
//   );
