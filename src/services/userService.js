import { getAPIData } from './../utils/APIFunctions';

export const fetchUser = (slug) => getAPIData(`/api/v1/users/${slug}`);
