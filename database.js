// This file simulates a JSON database of student records.
const studentDatabase = [
  {
    id: "AR001",
    name: "Avinash Royal",
    course: "Full Stack Development",
    date: "September 15, 2025",
    issuer: "Subbarayudu",
    hasCertificate: true, // true = PDF has been uploaded
  },
  {
    id: "SR002",
    name: "Amit Singh",
    course: "Java Development",
    date: "August 28, 2025",
    issuer: "Anjali Gupta",
    hasCertificate: false,
  },
  {
    id: "SRPYI521",
    name: "B.PAVAN KUMAR",
    course: "Python Development",
    date: "August 20, 2025",
    issuer: "Avinash Royal",
    hasCertificate: true,
  },
  {
    id: "SRFSI501",
    name: "GANDIKOTA SUBBARAYUDU",
    course: "Full Stack Development",
    date: "July 25, 2025",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SRKL111",
    name: "NAME",
    course: "Machine Learning",
    date: "7 April, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26501",
    name: "MARABATHINI MAHITHA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26502",
    name: "M MOULIKA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26503",
    name: "ROOPIKA KONIKI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26504",
    name: "GUNDRAM SAKETH RAM",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26505",
    name: "SAIKUMAR PANCHIREDDI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26506",
    name: "KOMMANA SOMU",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26507",
    name: "MARRI DEVI SRI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26508",
    name: "ESUKAPALLI HARI PRIYA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26509",
    name: "Revuri venkata suresh",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26510",
    name: "PANCHAVATI VIGNESH",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26511",
    name: "Kolar  Santhosh",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26512",
    name: "kuchalla sreekanth",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26513",
    name: "Prudvi sudha",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26514",
    name: "Shaik Thamkin Banu",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26515",
    name: "Shaik Fahim",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26516",
    name: "Munipapaiah Naidu Venkata subramanyam",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26517",
    name: "Challa Vishnu Vardhan Reddy",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26518",
    name: "Reddiprasad",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26519",
    name: "hema",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26520",
    name: "hemanth",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26521",
    name: "KYATHI DURGA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26522",
    name: "ganesh",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26523",
    name: "santhosh",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26524",
    name: "chandra sekhar",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26525",
    name: "sai ram",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26526",
    name: "ruchitha",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26527",
    name: "prabhash",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26528",
    name: "Dileep",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26529",
    name: "sumanth",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26530",
    name: "eswar reddy",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26531",
    name: "manidhar reddy",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26532",
    name: "janardhan reddy",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26533",
    name: "Dhanvanthar",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26534",
    name: "saleem",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26535",
    name: "mahesh",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26536",
    name: "dhanush",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26537",
    name: "Chinatha vedha sree",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26538",
    name: "S.DEENATHAYAALAN",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26539",
    name: "SHAIK SHOUKATH VALLI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26540",
    name: "PASUPULETI GOKUL",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26541",
    name: "GANESH",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26542",
    name: "REDDAMMA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26543",
    name: "TEJA SREE",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26544",
    name: "mallikarjuna",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
   {
    id: "SR26545",
    name: "munichenchu reddy",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26546",
    name: "A KARTHIK",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26547",
    name: "JASHWANTH",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26548",
    name: "DEENDALYA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26549",
    name: "M KARTHIK",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26550",
    name: "VARA PRASAD",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26551",
    name: "JYOTHI PRAKASH",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26552",
    name: "VEERA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26553",
    name: "VALLEPU",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26554",
    name: "MANOHAR",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26555",
    name: "SUHAIL",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26556",
    name: "M YUVA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26557",
    name: "DHARSHINI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26558",
    name: "DHARANI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26559",
    name: "SONIA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26560",
    name: "DILLI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26561",
    name: "LAKSHMI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26562",
    name: "TULASIRAM",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26563",
    name: "SAI NADH",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26564",
    name: "AKHILESH",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26565",
    name: "SURYA",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26566",
    name: "SUBHANI",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26567",
    name: "SANDEEP",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26568",
    name: "dhanush",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26569",
    name: "Dharmateja",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26570",
    name: "manohar",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26571",
    name: "sai prasad",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26572",
    name: "Navya",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M01",
    name: "Gnana prasuna Dasarraju",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M02",
    name: "Bhavana Neelam",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M03",
    name: "Maheswari Reddy",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M04",
    name: "Aketi Meghana",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M05",
    name: "Kavya",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M06",
    name: "Harish",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M07",
    name: "Pravalika",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M08",
    name: "Harsha",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M09",
    name: "Thota Kavya",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
    id: "SR26M10",
    name: "E Swetha",
    course: "Machine Learning with AI",
    date: "31 March, 2026",
    issuer: "Avinash Royal",
    hasCertificate: true, // false = PDF has NOT been uploaded yet
  },
  {
  id: "SR26V01",
  name: "RACHAPALLE THARUN REDDY",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V02",
  name: "Gangula Nikhil Reddy",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V03",
  name: "KALLURU VENKATA NAGA SAHITHI",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V04",
  name: "ANGALAGUTTI NANDINI",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V05",
  name: "THATICHERLA MADHUNIKA",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V06",
  name: "Y RAJASEKHAR",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V07",
  name: "BUSAGANI CHANDRA",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V08",
  name: "DHANIKALA PRAVEEN KUMAR YADAV",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V09",
  name: "Shaik Mohasin Arafath",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V10",
  name: "KOMMA SUMANTH",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V11",
  name: "Kundella Ganesh Yadav",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V12",
  name: "Y V MADHUSUDHANA REDDY",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V13",
  name: "Kamatham Hari Kishore Reddy",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V14",
  name: "C SAI LAKSHMI",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V15",
  name: "DURGAM RIYAZ",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V16",
  name: "CHOWDAM NALLAKONDAPPAGARI SAI NIRANJAN",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V17",
  name: "Shaik Ayesha",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V18",
  name: "Shaik muhammad khalid",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V19",
  name: "SHAIK ZOYA",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26V20",
  name: "Korivi Venkata Sai Anish",
  course: "VLSI",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26C05",
  name: "Kambam Vidya lakshmi",
  course: "ARTIFICIAL INTELLIGENCE",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26C06",
  name: "TAPPA ARSHAD",
  course: "ARTIFICIAL INTELLIGENCE",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26C07",
  name: "KHAJAMAINUDDIN S M",
  course: "ARTIFICIAL INTELLIGENCE",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SR26AI2606",
  name: "Gajjala Vijaya Lakshmi",
  course: "ARTIFICIAL INTELLIGENCE",
  date: "05 JuLY, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
{
  id: "SRDS2605",
  name: "YARRAJUNNUGARI SUNAYANA",
  course: "DATA SCIENCE",
  date: "27 June, 2026",
  issuer: "Avinash Royal",
  hasCertificate: false, // false = PDF has NOT been uploaded yet
},
];