const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('focus', () => {
    if (searchInput.placeholder === 'Search') {
        searchInput.placeholder = '';
    }

    searchInput.addEventListener('blur', () => {
        if (searchInput.placeholder === '') {
            searchInput.placeholder = 'Search';
        }
    });
    
});




















