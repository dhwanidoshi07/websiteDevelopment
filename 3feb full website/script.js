// Add active class to the current button (highlight it)
let prevButton = document.getElementById("pl");

const wrapper = document.getElementById("wrapper");

wrapper.addEventListener('click', (e) => {

const isButton = e.target.nodeName === 'BUTTON';    

if (!isButton)
{
return;
}

e.target.classList.add('active'); // Add .active CSS Class

if(prevButton !== null) {
prevButton.classList.remove('active');  // Remove .active CSS Class
}

 prevButton = e.target;

});







var data=[
  {
    img:"img/bajri.jpeg",
    title:"Bajri",
    category:"pulses"
  },

  {
    img:"img/bbwal.jpeg",
    title:"BB Wal",
    category:"pulses"
  },

  {
    img:"img/black_beans.jpeg",
    title:"Black Beans",
    category:"pulses"
  },

  {
    img:"img/chana_dal.jpeg",
    title:"Chana Dal",
    category:"pulses"
  },


  {
    img:"img/chana_mosambi.jpeg",
    title:"Chana Mosambi",
    category:"pulses"
  },

  // {
  //   img:"img/chawli_black_eyed.jpeg",
  //   title:"Chawli Black Eyed",
  //   category:"pulses"
  // },

  {
    img:"img/groundnut.jpeg",
    title:"Groundnut",
    category:"upit"
  },

  {
    img:"img/gujarat_17_rice.jpeg",
    title:"Gujarat 17 Rice",
    category:"rice"
  },

  {
    img:"img/idli_rice.jpeg",
    title:"Idli Rice",
    category:"rice"
  },

  {
    img:"img/jowar.jpeg",
    title:"Jowar",
    category:"otsp"
  },

  {
    img:"img/kabuli_chana.jpeg",
    title:"Kabuli Chana",
    category:"pulses"
  },

  // {
  //   img:"img/kadva_val.jpeg",
  //   title:"Kadva Val",
  //   category:"pulses"
  // },

  // {
  //   img:"img/kali_much_rice.jpeg",
  //   title:"Kali Much Rice",
  //   category:"rice"
  // },

  // {
  //   img:"img/masoor_dal.jpeg",
  //   title:"Masoor Dal",
  //   category:"pulses"
  // },

  // {
  //   img:"img/masoor_whole.jpeg",
  //   title:"Masoor Whole",
  //   category:"pulses"
  // },

  // {
  //   img:"img/moong_dal.jpeg",
  //   title:"Moong Dal",
  //   category:"pulses"
  // },

  // {
  //   img:"img/moong_whole.jpeg",
  //   title:"Moong Whole",
  //   category:"pulses"
  // },

  {
    img:"img/moth_whole_rajasthan.jpeg",
    title:"Moth Whole Rajasthan",
    category:"pulses"
  },

  {
    img:"img/nachni.jpeg",
    title:"Nachni",
    category:"otsp"
  },

  // {
  //   img:"img/papdi_wal.jpeg",
  //   title:"Papdi Wal",
  //   category:"pulses"
  // },


  {
    img:"img/rajma_red_sharmili.jpeg",
    title:"Rajma Red Sharmili",
    category:"pulses"
  },

  {
    img:"img/sabudana.jpeg",
    title:"Sabudana",
    category:"upit"
  },

  {
    img:"img/soyabean.jpeg",
    title:"Soyabean",
    category:"pulses"
  },

  {
    img:"img/steamed_basmati_1401.jpeg",
    title:"Steamed Basmati - 1401",
    category:"rice"
  },

  {
    img:"img/steamed_sona_masoori_1.jpeg",
    title:"Steamed Sona Masoori 1",
    category:"rice"
  },

  // {
  //   img:"img/toor_dal_latur.jpeg",
  //   title:"Toor Dal Latur",
  //   category:"pulses"
  // },

  // {
  //   img:"img/urad_dal.jpeg",
  //   title:"Urad Dal",
  //   category:"pulses"
  // },


  // {
  //   img:"img/urad_split.jpeg",
  //   title:"Urad Split",
  //   category:"pulses"
  // },

  // {
  //   img:"img/urad_whole.jpeg",
  //   title:"Urad Whole",
  //   category:"pulses"
  // },

  // {
  //   img:"img/vatana_black.jpeg",
  //   title:"Vatana Black",
  //   category:"pulses"
  // },

  {
    img:"img/daliya_jada.jpeg",
    title:"Daliya Jada",
    category:"flour"
  },

  {
    img:"img/idli_rawa.jpeg",
    title:"Idli Rawa",
    category:"flour"
  },

  {
    img:"img/daliya_barik.jpeg",
    title:"Daliya (Lapsi) Barik",
    category:"flour"
  },

  {
    img:"img/kesari_rawa.jpeg",
    title:"Kesari Rawa",
    category:"flour"
  },

  {
    img:"img/barik_rawa.jpeg",
    title:"Barik Rawa",
    category:"flour"
  },

  {
    img:"img/ambemohar_rice.jpeg",
    title:"Ambemohar - Jeera Kalasa Rice",
    category:"rice"
  },

  // {
  //   img:"img/pooni_boilrice.jpeg",
  //   title:"Pooni Boil Rice",
  //   category:"rice"
  // },

  {
    img:"img/red_mata_rice.jpeg",
    title:"Red Mata Rice",
    category:"rice"
  },

  {
    img:"img/kurmura.jpeg",
    title:"Kurmura",
    category:"otsp"
  },

  {
    img:"img/soya_wadi.jpeg",
    title:"Soya Wadi",
    category:"otsp"
  },

  {
    img:"img/bhagar.jpeg",
    title:"Bhagar",
    category:"upit"
  },

  {
    img:"img/barik_poha.jpeg",
    title:"Barik poha",
    category:"otsp"
  },

  {
    img:"img/jada_poha.jpeg",
    title:"Jada poha",
    category:"otsp"
  },


]


function filterCat(cat){
  var productlist=document.getElementById("product-list")
  console.log(cat)
  let displayData=[];
 if(cat=="pulses"){
    displayData=data.filter((item)=>item.category=="pulses")
  }
  else if(cat=="rice"){
    displayData=data.filter((item)=>item.category=="rice")
  }
  else if(cat=="flour"){
    displayData=data.filter((item)=>item.category=="flour")
  }
  else if(cat=="otsp"){
    displayData=data.filter((item)=>item.category=="otsp")
  }
  else if(cat=="upit"){
    displayData=data.filter((item)=>item.category=="upit")
  }
  

  console.log(displayData)
  productlist.innerHTML=""
  for(let i=0;i<displayData.length;i++){
    productlist.innerHTML+=`<div class='col-lg-4 col-md-6 '> <div class='product-item'><div class='product-img'><img src=${displayData[i].img}  class='d-block mx-auto img-fluid'></div> <div class='product-content text-center py-3'><span class='d-block fw-bold text-uppercase'>${displayData[i].title}</span></div></div></div>`
  }
}

filterCat("pulses")




