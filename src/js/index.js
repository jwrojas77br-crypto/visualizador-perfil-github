const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResult = document.querySelector('.profile-results');
const loading = document.getElementById('loading');
const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    loading.style.display = 'block';
    profileResult.innerHTML = '';

    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);

        if (!response.ok) {
            
            alert('Usuario não encontrado. Por favor, verifique o nome digitado e tente novamente.');
            loading.style.display = 'none';
            return;
        }

        const userData = await response.json();
        console.log(userData); // Apenas para verificar se os dados foram obtidos corretamente

        loading.style.display = 'none';
        profileResult.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada 😢'}</p>
                </div>
            </div>
            `

    } catch (error) {
        loading.style.display = 'none';
        console.error('Erro ao buscar dados do usuario:', error);
        alert('Ocorreu um erro ao buscar os dados do usuario. Por favor, tente novamente mais tarde.');
    }
});
