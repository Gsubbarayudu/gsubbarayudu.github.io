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
];