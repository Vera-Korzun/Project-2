export const data = {
  signUpURL: 'https://callboard-backend.herokuapp.com/auth/register',
  signInURL: 'https://callboard-backend.herokuapp.com/auth/login',
  baseURL: 'https://callboard-backend.herokuapp.com',
  // categories: ["Недвижимость", "Транспорт", "Работа", "Электроника", "Бизнес_и_услуги", "Отдых_и_спорт", "Отдам_бесплатно", "Обмен"],
  // categories: ["property", "transport", "work", "electronics", "bussines and services", "recreation and sport", "free", "trade"],
  originalCategories: [],
  categories: [],
  selectedCategory: '',
  russianCategories: [],
  renderedCategories: [],
  categoriesList: {},
  inCategories: [],
  isCategoriesShown: false,
  inAll: [],
  auth: {
    isAuth: false,
    token: '',
  },
  user: {
    emaill: '',
    favorites: [],
    ownCalls: [],
  },
  properties: {
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  },
};


