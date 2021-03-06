const SET_TITLE = 'SET_TITLE';
const SET_ORIGINAL_PRICE = 'SET_ORIGINAL_PRICE';
const SET_IMAGE = 'SET_IMAGE';
const SET_CONDITION = 'SET_CONDITION';
const SET_YEAR = 'SET_YEAR';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_PRICE = 'SET_PRICE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_PRICE_ONE_WEEK = 'SET_PRICE_ONE_WEEK';
const SET_PRICE_ONE_MONTH = 'SET_PRICE_ONE_MONTH';
const SET_LATITUDE = 'SET_LATITUDE';
const SET_LONGITUDE = 'SET_LONGITUDE';
const SET_ERROR = 'SET_ERROR';

export const setTitle = title => ({
    type: SET_TITLE,
    payload: title
});

export const setOriginalPrice = price => ({
    type: SET_ORIGINAL_PRICE,
    payload: price
});
export const setImage = image => ({
    type: SET_IMAGE,
    payload: image
});

export const setCondition = condition => ({
    type: SET_CONDITION,
    payload: condition
});

export const setYear = year => ({
    type: SET_YEAR,
    payload: year
});

export const setCategory = category => ({
    type: SET_CATEGORY,
    payload: category
});

export const setDescription = description => ({
    type: SET_DESCRIPTION,
    payload: description
});

export const setPrice = price => ({
    type: SET_PRICE,
    payload: price
});

export const setPriceOneWeek = price => ({
    type: SET_PRICE_ONE_WEEK,
    payload: price
});

export const setPriceOneMonth = price => ({
    type: SET_PRICE_ONE_MONTH,
    payload: price
});

export const setLatitude = latitude => ({
    type: SET_LATITUDE,
    payload: latitude
});

export const setLongitude = longitude => ({
    type: SET_LONGITUDE,
    payload: longitude
});

export const setError = error => ({
    type: SET_ERROR,
    payload: error
});

const initialState = {
    title: '',
    originalPrice: '',
    image: '',
    condition: '',
    year: '',
    category: '',
    price: '',
    priceOneWeek: '',
    priceOneMonth: '',
    description: '',
    latitude: '',
    longitude: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SET_TITLE:
        return {
            ...state,
            title: action.payload
        };
    case SET_ORIGINAL_PRICE:
        return {
            ...state,
            originalPrice: action.payload
        };
    case SET_IMAGE:
        return {
            ...state,
            image: action.payload
        };
    case SET_CONDITION:
        return {
            ...state,
            condition: action.payload
        };
    case SET_YEAR:
        return {
            ...state,
            year: action.payload
        };
    case SET_CATEGORY:
        return {
            ...state,
            category: action.payload
        };
    case SET_PRICE:
        return {
            ...state,
            price: action.payload
        };
    case SET_PRICE_ONE_WEEK:
        return {
            ...state,
            priceOneWeek: action.payload
        };
    case SET_PRICE_ONE_MONTH:
        return {
            ...state,
            priceOneMonth: action.payload
        };
    case SET_DESCRIPTION:
        return {
            ...state,
            description: action.payload
        };
    case SET_LATITUDE:
        return {
            ...state,
            latitude: action.payload
        };
    case SET_LONGITUDE:
        return {
            ...state,
            longitude: action.payload
        };
    case SET_ERROR: {
        return { ...state, error: action.payload };
    }
    default:
        return state;
    }
};
