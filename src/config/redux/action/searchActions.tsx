export const keywordChange = (value: any) => {
  return {type: 'CHANGE_KEYWORD', value: value};
};

export const maximumChange = (value: any) => {
  return {type: 'CHANGE_MAXIMUM', value: value};
};

export const minimumChange = (value: any) => {
  return {type: 'CHANGE_MINIMUM', value: value};
};

export const categoryChange = (value: any) => {
  return {type: 'CHANGE_CATEGORY', value: value};
};

export const brandChange = (value: any) => {
  return {type: 'BRAND_CATEGORY', value: value};
};

export const resetSearch = () => {
  return {type: 'RESET_SEARCH'};
};
