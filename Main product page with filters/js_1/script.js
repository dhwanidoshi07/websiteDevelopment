//   // var $grid = $('#product-list').isotope({
//   //   // layoutMode: "fitRows"
//   // });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   console.log(filterValue)
//   $grid.isotope({ filter: filterValue });
// });


// var data={
//   "allCategories":[
//     {
//     img:"Img/Bajri.jpeg",
//     title:"Bajri"
    
//     },
//     {
//       img:"Img/BBWal.jpeg",
//       title:"BB Wal"
//     },
//     {
//       img:"Img/BBWal.jpeg",
//       title:"BB Wal"
//     }
//   ],
//   "pulses":[
//     {
//       img:"Img/BBWal.jpeg",
//       title:"BB Wal"
//     }
//   ]
// }

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
    img:"img/chana_green.jpeg",
    title:"Chana Green",
    category:"pulses"
  },

  {
    img:"img/chana_mosambi.jpeg",
    title:"Chana Mosambi",
    category:"pulses"
  },

  {
    img:"img/chana_small.jpeg",
    title:"Chana Small",
    category:"pulses"
  },

  {
    img:"img/chawli_black_eyed.jpeg",
    title:"Chawli Black Eyed",
    category:"pulses"
  },

  {
    img:"img/chawli_brown_eyed.jpeg",
    title:"Chawli Brown Eyed",
    category:"pulses"
  },

  {
    img:"img/chawli_red.jpeg",
    title:"Chawli Red",
    category:"pulses"
  },

  {
    img:"img/chawli_small.jpeg",
    title:"Chawli Small",
    category:"pulses"
  },

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

  {
    img:"img/kadva_val.jpeg",
    title:"Kadva Val",
    category:"pulses"
  },

  {
    img:"img/kali_much_rice.jpeg",
    title:"Kali Much Rice",
    category:"rice"
  },

  {
    img:"img/masoor_dal.jpeg",
    title:"Masoor Dal",
    category:"pulses"
  },

  {
    img:"img/masoor_whole.jpeg",
    title:"Masoor Whole",
    category:"pulses"
  },

  {
    img:"img/moong_dal.jpeg",
    title:"Moong Dal",
    category:"pulses"
  },

  {
    img:"img/moong_whole.jpeg",
    title:"Moong Whole",
    category:"pulses"
  },

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

  {
    img:"img/papdi_wal.jpeg",
    title:"Papdi Wal",
    category:"pulses"
  },

  {
    img:"img/rajma_red_big.jpeg",
    title:"Rajma Red (Big)",
    category:"pulses"
  },

  {
    img:"img/rajma_red_sharmili.jpeg",
    title:"Rajma Red Sharmili",
    category:"pulses"
  },

  {
    img:"img/rajma_speckled.jpeg",
    title:"Rajma Speckled",
    category:"pulses"
  },

  {
    img:"img/sabudana.jpeg",
    title:"Sabudana",
    category:"upit"
  },

  {
    img:"img/small_matki.jpeg",
    title:"Small Matki",
    category:"pulses"
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

  {
    img:"img/surti_wal.jpeg",
    title:"Surti Wal",
    category:"pulses"
  },

  {
    img:"img/toor_dal_latur.jpeg",
    title:"Toor Dal Latur",
    category:"pulses"
  },

  {
    img:"img/toor_dal_gujarat.jpeg",
    title:"Toor Dal Gujarat",
    category:"pulses"
  },

  {
    img:"img/urad_dal.jpeg",
    title:"Urad Dal",
    category:"pulses"
  },

  {
    img:"img/urad_gota.jpeg",
    title:"Urad Gota",
    category:"pulses"
  },

  {
    img:"img/urad_split.jpeg",
    title:"Urad Split",
    category:"pulses"
  },

  {
    img:"img/urad_whole.jpeg",
    title:"Urad Whole",
    category:"pulses"
  },

  {
    img:"img/vatana_black.jpeg",
    title:"Vatana Black",
    category:"pulses"
  },

  {
    img:"img/vatana_green.jpeg",
    title:"Vatana Green",
    category:"pulses"
  },

  {
    img:"img/vatana_white.jpeg",
    title:"Vatana White",
    category:"pulses"
  },

  {
    img:"img/wada_surti_kolam.jpeg",
    title:"Wada Surti Kolam",
    category:"rice"
  },


]


function filterCat(cat){
  var productlist=document.getElementById("product-list")
  console.log(cat)
  let displayData=[];
  let category=""
  if(cat=="all"){
    displayData=data;
  }
  else if(cat=="pulses"){
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

