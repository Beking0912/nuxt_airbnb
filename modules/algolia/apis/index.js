import userApi from './user';
import homeApi from './home';

export default (algoliaConfig) => {
    return {
        user: userApi(algoliaConfig),
        homes: homeApi(algoliaConfig),
    }
}