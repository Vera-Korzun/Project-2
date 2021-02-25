import { clearFilter } from '../api/searchInCategory';
import { createMain } from './createMain';
import { createHero } from '../../hero_template';
import { init } from '../api/galleryApi';
import { data } from '../data/data';
import { newAdvMobileListener } from "./newAdvButton";



export const clearMain = () => {
    data.categories = [];
    data.russianCategories = [];
    data.originalCategories = [];
    data.renderedCategories = [];
    clearFilter();
    createMain();
    createHero();
    init();
    clearSelectedFilter();
    newAdvMobileListener();
};

const clearSelectedFilter = () =>{
    let category = data.selectedCategory;
    if (data.selectedCategory && data.selectedCategory.trim().length != 0){
      document.getElementById(category) && document.getElementById(category).classList.remove("selected");
      document.getElementById(category + 'Main') && document.getElementById(category + 'Main').classList.remove("selected");
      document.getElementById(category + 'Tablet') && document.getElementById(category + 'Tablet').classList.remove("selected");
      data.selectedCategory = '';
    }
    if (!document.getElementById('categoriesList').classList.contains("element_hidden")) {
      document.getElementById('categoriesList').classList.add("element_hidden");
    }  
        
    document.querySelector('.header-category-tablet').classList.remove("openCategory");
    document.querySelector('.js_menu').classList.remove("activ");
  }

export const clearFilterListener= () => {
    const clearBtnMobile = document.getElementById("clearFilter");
    const clearBtn = document.getElementById("clear-filter-btn");
    const logo = document.querySelector('.logo-link')
    clearBtnMobile.addEventListener('click', clearMain);
    clearBtn.addEventListener('click', clearMain);
    logo.addEventListener('click', clearMain)
};