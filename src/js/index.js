import { fetchUser, fetchGitubUserRepos } from './api.js';
import {
    showLoading,
    hideLoading,
    clearResults,
    renderProfile,
    getInputValue,
    getSearchButton
} from './dom.js';

const handleSearch = async () => {
    const userName = getInputValue();

    if (!userName) {
        alert('Por favor, digite um nome de usuário');
        return;
    }

    showLoading();
    clearResults();

    try {
        const userData = await fetchUser(userName);
        const userRepos = await fetchGitubUserRepos(userName);
        console.log(userData);
        
        hideLoading();
        renderProfile(userData, userRepos);
    } catch (error) {
        hideLoading();
        console.error('Erro ao buscar dados do usuario:', error);
        alert('Ocorreu um erro ao buscar os dados do usuario. Por favor, tente novamente mais tarde.');
    }
};

getSearchButton().addEventListener('click', handleSearch);
