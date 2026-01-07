const BASE_URL = 'https://api.github.com';

export const fetchUser = async (userName) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);

        if (!response.ok) {
            throw new Error('Usuario não encontrado');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export async function fetchGitubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);

    if (!response.ok) {
        throw new Error('Usuario não encontrado');
    }

    return await response.json();
}
