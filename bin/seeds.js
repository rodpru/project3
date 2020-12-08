const mongoose = require("mongoose");
const School = require("../models/school-model");
const MONGO_DB = require("../configs/db.config");
const axios = require("axios");
const kindergartens = [];

// axios
//   .get(
//     "https://services.arcgis.com/1dSrzEWVQn5kHHyK/arcgis/rest/services/POIEducacao/FeatureServer/10/query?where=1%3D1&outFields=*&outSR=4326&f=json"
//   )
//   .then((response) => {
//     response.data.features.map((kindergarten) => {
//       kindergartens.push({
//         name: kindergarten.attributes.INF_NOME,
//         description: kindergarten.attributes.INF_DESCRICAO,
//         schoolType: "kindergarten",
//       photo:
//         "https://res.cloudinary.com/dgyg9zh3a/image/upload/v1607423361/Nurseries/pro-church-media-2DTE3ePfnD8-unsplash_qpndxi.jpg",
//     });
//   });
//   console.log(kindergartens);
//   School.create(kindergartens)
//     .then((nurseriesFromDB) => {
//       console.log(`Created ${nurseriesFromDB.length} kindergartens`);
//       // Once created, close the DB connection
//       mongoose.connection.close();
//     })
//     .catch((err) =>
//       console.log(
//         `An error occurred while creating kindergartens from the DB: ${err}`
//       )
//     );
// });

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
//     schoolType: "nursery",
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
//     schoolType: "nursery",
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
//     schoolType: "nursery",
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
//     schoolType: "nursery",
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
//     schoolType: "nursery",
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
//     schoolType: "nursery",
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
//     schoolType: "nursery",
//     geo: {
//       lat: 38.738951947783086,
//       lng: -9.141134042328058,
//     },
//   },
//   {
//     name: "Chupetas e Biberons",
//     address: "Estr. de Telheiras 129, 1600-769 Lisboa",
//     description:
//       "Na Creche Chupetas e Biberons diariamente uma equipa especializada realiza atividades que visam o desenvolvimento global da criança: Ginástica, Hortinha pedagógica, Saídas para teatro e passeios ao ar livre, visitas semanais à biblioteca Orlando Ribeiro em Telheiras. Bom espaço exterior (vivenda), boa localização, material didático, alimentação confecionada na própria escola e certificada pelo HACCP (Segurança Alimentar).",
//     email: "chupetasebiberons@gmail.com",
//     site: "https://www.chupetasebiberons.pt",
//     phone: "217587895",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.76080994394385,
//       lng: -9.167043194770288,
//     },
//   },
//   {
//     name: "Colégio Saint Daniel Brottier",
//     address: "Av. Alm. Gago Coutinho 80, 1700-031 Lisboa",
//     description:
//       "O Colégio Saint Daniel Brottier é uma Instituição de ensino privado com as valências de Creche, Educação Pré-escolar, 1.º e 2.º Ciclos do Ensino Básico, com a missão de promover o  desenvolvimento cognitivo, pessoal e social das crianças até à última etapa da sua infância.",
//     email: "geral@csdbrottier.pt",
//     site: "https://csdbrottier.pt",
//     phone: "21 840 9025",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.753287201542875,
//       lng: -9.129736256773512,
//     },
//   },
//   {
//     name: "Creche & Aparece",
//     address: "Rua do Polo Norte, nº 10, 1990-265, Parque das Nações",
//     description:
//       "A principal missão da Creche & Aparece é desenvolver um projecto de excelência na área do ensino da 1ª Infância (creche - 3 meses aos 3 anos) e Jardim de Infância (dos 3 aos 6 anos), inovador e diferenciador, que satisfaça as exigentes necessidades diárias de crianças e pais. Queremos proporcionar às crianças a oportunidade de experimentarem e descobrirem caminhos com segurança e autonomia, de modo a formar crianças COMPETENTES, RESPONSÁVEIS, MOTIVADAS, AUTÓNOMAS, SINÉRGICAS, PRÓ-ATIVAS, SOLIDÁRIAS e acima de tudo, FELIZES!",
//     email: "geral@creche-e-aparece.com",
//     site: "http://www.creche-e-aparece.com",
//     phone: "21 404 6474",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.77437598542902,
//       lng: -9.095545220846352,
//     },
//   },
//   {
//     name: "Creche Lumiar",
//     address: "Alameda das Linhas de Torres, nº 225 - loja 8, 1750-144, Lisboa",
//     description:
//       "É na creche que a criança tem as suas primeiras experiências fora do seu círculo familiar. A qualidade destes cuidados dita as experiências nos primeiros anos de vida e terá grande impacto no seu desenvolvimento futuro. Na Creche Lumiar existe um ambiente acolhedor e dinamizador de aprendizagens, onde a criança se pode desenvolver de forma global, adequada e harmoniosa.",
//     email: " crechelumiar@gmail.com",
//     site: "http://www.crechelumiar.com",
//     phone: "217 573 634 ",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.77282756885384,
//       lng: -9.160691592657402,
//     },
//   },
//   {
//     name: "Os Pirralhos do Marques",
//     address: "R. Rodrigo da Fonseca 60, 1250-096 Lisboa",
//     description:
//       "Cooperar com a família na sua missão educativa. Oferecer às crianças, na sua primeira e segunda infância, um espaço de vida socialmente organizado e adaptado ás suas idades, para que possam desenvolver integralmente a sua personalidade e a sua integração social. Assegurar o florescimento da personalidade da criança pela satisfação das suas necessidades sensoriais, cognitivas, emocionais e afectivas. Ajudar a criança a organizar as capacidades de resposta e de reacção ao meio ambiente, Proporcionar às famílias a sua participação “na vida da instituição.",
//     email: "pirralhos@netcabo.pt",
//     site: "http://www.pirralhosdomarques.com",
//     phone: " 21 386 7639",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.72509118642677,
//       lng: -9.153233031660204,
//     },
//   },
//   {
//     name: "Jardim Escola “O Bosque",
//     address:
//       "Rua Cidade de Benguela 257, Santa Maria dos Olivais, 1800-073, Lisboa",
//     description:
//       "A pedagogia tradicional define-se como uma edução pré-tecnológica em que o professor é o emissor, os materiais de educação a mensagem e o estudante o receptor da informação. Tipicamente baseia-se em materiais de aprendizagem pré-concebidos, prazos, tarefas de avaliação e critérios determinados pelos professores.",
//     email: " colegio.bosque@sapo.pt",
//     site: "http://obosquejardimescola.com",
//     phone: " 218534953",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.76648,
//       lng: -9.112827,
//     },
//   },
//   {
//     name: "Infantário Pedrita",
//     address: "Estr. de Benfica 533, 1500-335 Lisboa",
//     description:
//       "No nosso Infantário recebemos crianças desde o 1 ano de idade até aos 6 anos. Surgimos em 1977 e tem sido com o empenho e ajuda de muitos que temos construído mais do que uma Instituição, uma Comunidade de Educadoras, Auxiliares, Técnicos e Encarregados de Educação, que tem como marcas principais a Confiança e Afectividade para com todas as crianças por nós recebidas.",
//     email: "jardiminfantil.pedrita@gmail.com ",
//     site: "http://https://www.pedrita.pt",
//     phone: "21 715 4701",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.74990430426877,
//       lng: -9.193786537617436,
//     },
//   },
//   {
//     name: "Colégio do Paço",
//     address:
//       "Estrada Paço do Lumiar, Nº 65 - Loja A (Quinta dos Inglesinhos), Carnide, 1600-544 Lisboa",
//     description:
//       "O Colégio do Paço recebe, desde 3 de setembro de 2007, bebés e crianças dos 3 meses aos 3 anos, tendo-se sempre afirmado como uma creche familiar, fundada através de fortes laços com a infância e ligações privilegiadas com as famílias, promovendo relações de amizade fundamentais para um desenvolvimento emocional e social das crianças.No nosso colégio valorizamos a criança de forma individual, designadamente, as suas capacidades e formas de se expressar. Elas são os principais autores das suas aprendizagens e sentem-se valorizadas nas suas descobertas, permitindo conhecer, estimular e desenvolver as suas múltiplas linguagens, a imaginação e a criatividade.",
//     email: "geral@colegiodopaco.pt",
//     site: "http://colegiodopaco.pt",
//     phone: "210995352",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.763927,
//       lng: -9.184482,
//     },
//   },
//   {
//     name: "A Chuva de Papel - Creche e Jardim de Infância",
//     address: "Rua José Travassos, N.º 33-A e 31-C, Lumiar, 1600-410 Lisboa",
//     description:
//       "Dispõe de duas salas de Creche destinadas a crianças com idades compreendidas entre os 10 e os 36 meses (Licença de Funcionamento nº 59/2012 emitida pelo Instituto da Segurança Social, I.P.). Dispõe ainda de uma sala de Jardim de Infância, destinada a crianças entre os três e os seis anos de idade. O espaço é amplo, confortável e seguro, tendo sido concebido de raiz para a atividade educativa.",
//     email: "geral.chuvadepapel@gmail.com",
//     site: "https://www.chuvadepapel.com/",
//     phone: " 217550483",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.763446,
//       lng: -9.163371,
//     },
//   },
//   {
//     name: "Creche Algodão Doce",
//     address: "Rua Prof. Luís Cunha Gonçalves Nº. 4, Lumiar, 1600-648 Lisboa",
//     description: "Escola IPSS/Parceria",
//     email: " algodao.doce@fasl.pt",
//     site: "http://www.fasl.pt",
//     phone: "217151972",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.763446,
//       lng: -9.163371,
//     },
//   },
//   {
//     name: "Externato Marista de Lisboa",
//     address: "R. Maj. Neutel de Abreu 11, 1500-459 Lisboa",
//     description:
//       "Evangelizar, através da educação das crianças e dos jovens de Lisboa, na linha do estilo e do carisma próprios de Marcelino Champagnat, dentro da comunhão eclesial apostando em suscitar “bons cristãos e honrados cidadãos”. Procurar, no desempenho das nossas funções, agir com sentido de responsabilidade profissional,melhorando a qualidade de educadores, dentro de uma missão partilhada.",
//     email: "secretaria@ext.marista-lisboa.org",
//     site: "http://www.ext.marista-lisboa.org",
//     phone: "21 771 2030",
//     rating: "",
//     photo: "",
//     globalID: "",
//     schoolType: "nursery",
//     geo: {
//       lat: 38.747548,
//       lng: -9.18127,
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
