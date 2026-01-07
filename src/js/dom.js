const getElements = () => ({
    inputSearch: document.getElementById('input-search'),
    btnSearch: document.getElementById('btn-search'),
    profileResult: document.querySelector('.profile-results'),
    loading: document.getElementById('loading')
});

export const showLoading = () => {
    const { loading } = getElements();
    loading.style.display = 'block';
};

export const hideLoading = () => {
    const { loading } = getElements();
    loading.style.display = 'none';
};

export const clearResults = () => {
    const { profileResult } = getElements();
    profileResult.innerHTML = '';
};

export const renderProfile = (userData, userRepos) => {
    const { profileResult } = getElements();

    const repositoriesHTML = userRepos && userRepos.length ? userRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repository-card">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span> ⭐ Stars: ${repo.stargazers_count}</span>
                    <span> 🍴 Forks: ${repo.forks_count}</span>
                    <span> 👀 Watchers: ${repo.watchers_count}</span>
                    <span> 💻 Language: ${repo.language || 'N/A'}</span>
                </div>
            </div>
        </a>
    `).join('') : '<p>Nenhum repositório encontrado</p>';

    profileResult.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || 'Não possui nome cadastrado 😢'}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>
    `;
};

export const getInputValue = () => {
    const { inputSearch } = getElements();
    return inputSearch.value;
};

export const getSearchButton = () => {
    const { btnSearch } = getElements();
    return btnSearch;
};

export const getSearchInput = () => {
    const { inputSearch } = getElements();
    return inputSearch;
};
