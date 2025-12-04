// Main Application JavaScript
class RecipeApp {
    constructor() {
        this.currentQuery = '';
        this.currentFilters = {
            diet: 'all',
            difficulty: 'all', 
            cuisine: 'all',
            time: 'all'
        };
        this.currentRecipes = [];
        this.selectedRecipe = null;
        this.currentRating = 0;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadInitialRecipes();
        this.updateNavigation();
    }
    
    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.debounceSearch(e.target.value);
        });
        
        // Upload image functionality
        const uploadBtn = document.getElementById('uploadImageBtn');
        const imageInput = document.getElementById('imageInput');
        
        uploadBtn.addEventListener('click', () => {
            imageInput.click();
        });
        
        imageInput.addEventListener('change', (e) => {
            this.handleImageUpload(e.target.files[0]);
        });
        
        // Filter functionality
        const filterPills = document.querySelectorAll('.filter-pill');
        filterPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                this.handleFilterClick(e.target);
            });
        });
        
        // Modal functionality
        const closeModal = document.getElementById('closeModal');
        const modal = document.getElementById('recipeModal');
        
        closeModal.addEventListener('click', () => {
            this.closeModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        // Rating modal functionality
        const closeRatingModal = document.getElementById('closeRatingModal');
        const ratingModal = document.getElementById('ratingModal');
        
        closeRatingModal.addEventListener('click', () => {
            this.closeRatingModal();
        });
        
        ratingModal.addEventListener('click', (e) => {
            if (e.target === ratingModal) {
                this.closeRatingModal();
            }
        });
        
        // Star rating
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', (e) => {
                this.setRating(e.target.dataset.rating);
            });
            
            star.addEventListener('mouseenter', (e) => {
                this.highlightStars(e.target.dataset.rating);
            });
        });
        
        document.querySelector('.star-rating').addEventListener('mouseleave', () => {
            this.highlightStars(this.currentRating);
        });
        
        // Submit rating
        const submitRating = document.getElementById('submitRating');
        submitRating.addEventListener('click', () => {
            this.submitRating();
        });
        
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleNavigation(e.target.getAttribute('href'));
            });
        });
    }
    
    debounceSearch(query) {
        this.currentQuery = query;
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.performSearch();
        }, 300);
    }
    
    async performSearch() {
        this.currentRecipes = searchRecipes(this.currentQuery, this.currentFilters);
        this.renderRecipes();
        this.updateResultsCount();
        this.updateResultsTitle();
    }
    
    handleFilterClick(clickedElement) {
        const filterType = clickedElement.dataset.filter;
        const filterValue = clickedElement.dataset.value;
        
        // Update active state
        const siblingPills = clickedElement.parentElement.querySelectorAll('.filter-pill');
        siblingPills.forEach(pill => pill.classList.remove('active'));
        clickedElement.classList.add('active');
        
        // Update filter
        this.currentFilters[filterType] = filterValue;
        this.performSearch();
    }
    
    handleImageUpload(file) {
        if (!file) return;
        
        // Simulate image processing for ingredient detection
        this.showLoading('Đang phân tích hình ảnh...');
        
        setTimeout(() => {
            this.hideLoading();
            this.showNotification('Tính năng AI sẽ sớm có mặt! Hiện tại hãy nhập nguyên liệu theo cách truyền thống.');
            
            // Auto-focus search input with suggested ingredients
            const searchInput = document.getElementById('searchInput');
            searchInput.focus();
        }, 2000);
    }
    
    renderRecipes() {
        const recipesGrid = document.getElementById('recipesGrid');
        const favoritesSection = document.getElementById('favorites');
        const currentSection = window.location.hash || '#home';
        
        // Only render in recipes section, not in favorites
        if (currentSection !== '#favorites') {
            recipesGrid.innerHTML = '';
            
            if (this.currentRecipes.length === 0) {
                recipesGrid.innerHTML = this.renderEmptyState();
                return;
            }
            
            this.currentRecipes.forEach((recipe, index) => {
                const recipeCard = this.createRecipeCard(recipe);
                recipeCard.style.animationDelay = `${index * 0.1}s`;
                recipesGrid.appendChild(recipeCard);
            });
        }
    }
    
    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => this.showRecipeDetail(recipe.id);
        
        const rating = this.formatRating(recipe.rating);
        const difficultyClass = `difficulty-${recipe.difficulty}`;
        const dietTags = recipe.diet.map(diet => 
            `<span class="tag diet-tag">${this.translateDiet(diet)}</span>`
        ).join('');
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <div class="meta-item">
                        <svg width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="7"/></svg>
                        ${recipe.cookTime}
                    </div>
                    <div class="meta-item">
                        <svg width="16" height="16" fill="currentColor"><path d="M8 7c2.8 0 5-2.2 5-5S10.8-3 8-3 3-.8 3 2s2.2 5 5 5zM8 15c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"/></svg>
                        ${recipe.servings} người
                    </div>
                </div>
                <div class="recipe-rating">
                    <div class="stars">${this.generateStars(recipe.rating)}</div>
                    <span class="rating-text">${recipe.rating} (${recipe.reviewCount})</span>
                </div>
                <div class="recipe-tags">
                    <span class="tag ${difficultyClass}">${this.translateDifficulty(recipe.difficulty)}</span>
                    <span class="tag">${this.translateCuisine(recipe.cuisine)}</span>
                    ${dietTags}
                </div>
                <div class="recipe-actions">
                    <button class="bookmark-btn ${recipe.isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); app.toggleFavorite(${recipe.id})">
                        <svg width="20" height="20" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </button>
                    <button class="view-recipe-btn" onclick="event.stopPropagation(); app.showRecipeDetail(${recipe.id})">
                        Xem công thức
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }
    
    showRecipeDetail(recipeId) {
        this.selectedRecipe = getRecipeById(recipeId);
        if (!this.selectedRecipe) return;
        
        const modal = document.getElementById('recipeModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = this.createRecipeDetailHTML(this.selectedRecipe);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add event listeners for detail actions
        this.bindDetailActions();
    }
    
    createRecipeDetailHTML(recipe) {
        const instructions = recipe.instructions.map((instruction, index) => 
            `<li>${instruction}</li>`
        ).join('');
        
        const ingredients = recipe.ingredients.map(ingredient => 
            `<li>${ingredient}</li>`
        ).join('');
        
        const nutrition = Object.entries(recipe.nutrition).map(([key, value]) => `
            <div class="nutrition-item">
                <span class="nutrition-value">${value}</span>
                <span class="nutrition-label">${this.translateNutrition(key)}</span>
            </div>
        `).join('');
        
        return `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
            <h2 class="recipe-detail-title">${recipe.title}</h2>
            
            <div class="recipe-detail-meta">
                <div class="meta-item">
                    <svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="8"/></svg>
                    ${recipe.cookTime}
                </div>
                <div class="meta-item">
                    <svg width="20" height="20" fill="currentColor"><path d="M10 7c2.8 0 5-2.2 5-5S12.8-3 10-3 5-.8 5 2s2.2 5 5 5zM10 18c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"/></svg>
                    ${recipe.servings} người
                </div>
                <div class="recipe-rating">
                    <div class="stars">${this.generateStars(recipe.rating)}</div>
                    <span class="rating-text">${recipe.rating} (${recipe.reviewCount} đánh giá)</span>
                </div>
            </div>
            
            <p style="margin-bottom: var(--space-lg); color: var(--neutral-600); font-size: 1.1rem;">
                ${recipe.description}
            </p>
            
            <div class="recipe-ingredients">
                <h3>Nguyên liệu</h3>
                <ul class="ingredients-list">
                    ${ingredients}
                </ul>
            </div>
            
            <div class="recipe-instructions">
                <h3>Hướng dẫn</h3>
                <ol class="instructions-list">
                    ${instructions}
                </ol>
            </div>
            
            <div class="recipe-nutrition">
                <h3>Thông tin dinh dưỡng</h3>
                <div class="nutrition-grid">
                    ${nutrition}
                </div>
            </div>
            
            <div style="text-align: center; margin-top: var(--space-lg);">
                <button class="primary-btn" onclick="app.showRatingModal(${recipe.id})">
                    <svg width="20" height="20" fill="currentColor" style="margin-right: var(--space-sm);">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Đánh giá công thức
                </button>
            </div>
        `;
    }
    
    bindDetailActions() {
        // Additional event listeners for recipe detail page if needed
        const modal = document.getElementById('recipeModal');
        modal.onkeydown = (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        };
    }
    
    closeModal() {
        const modal = document.getElementById('recipeModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        this.selectedRecipe = null;
    }
    
    toggleFavorite(recipeId) {
        const isFavorite = toggleFavorite(recipeId);
        const button = event.target.closest('.bookmark-btn');
        
        if (isFavorite) {
            button.classList.add('active');
            this.showNotification('Đã thêm vào yêu thích! ❤️');
        } else {
            button.classList.remove('active');
            this.showNotification('Đã xóa khỏi yêu thích! 💔');
        }
        
        // Update favorites section if currently viewing
        if (window.location.hash === '#favorites') {
            this.showFavorites();
        }
    }
    
    showRatingModal(recipeId) {
        this.selectedRecipe = getRecipeById(recipeId);
        const modal = document.getElementById('ratingModal');
        const ratingRecipe = document.getElementById('ratingRecipe');
        
        ratingRecipe.innerHTML = `
            <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
                <img src="${this.selectedRecipe.image}" alt="${this.selectedRecipe.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--radius-sm);">
                <div>
                    <h4 style="margin: 0; color: var(--neutral-900);">${this.selectedRecipe.title}</h4>
                    <p style="margin: var(--space-xs) 0 0 0; color: var(--neutral-600); font-size: 0.9rem;">${this.selectedRecipe.cookTime} • ${this.selectedRecipe.servings} người</p>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        this.currentRating = 0;
        this.highlightStars(0);
        document.getElementById('reviewText').value = '';
    }
    
    closeRatingModal() {
        const modal = document.getElementById('ratingModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        this.currentRating = 0;
        this.selectedRecipe = null;
    }
    
    setRating(rating) {
        this.currentRating = parseInt(rating);
        this.highlightStars(rating);
    }
    
    highlightStars(rating) {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    submitRating() {
        if (this.currentRating === 0) {
            this.showNotification('Vui lòng chọn số sao để đánh giá!');
            return;
        }
        
        const reviewText = document.getElementById('reviewText').value.trim();
        
        updateRating(this.selectedRecipe.id, this.currentRating, reviewText);
        
        this.closeRatingModal();
        this.closeModal();
        this.showNotification('Cảm ơn bạn đã đánh giá!');
        
        // Update UI
        this.performSearch();
    }
    
    handleNavigation(targetHash) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[href="${targetHash}"]`).classList.add('active');
        
        // Hide all sections first
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        switch (targetHash) {
            case '#home':
                // Show hero, filter, and recipes sections
                document.getElementById('home').style.display = 'block';
                document.getElementById('filter-section').style.display = 'block';
                document.querySelector('.recipes-section').style.display = 'block';
                break;
            case '#search':
                // Show filter and recipes sections (hide hero)
                document.getElementById('filter-section').style.display = 'block';
                document.querySelector('.recipes-section').style.display = 'block';
                break;
            case '#favorites':
                this.showFavorites();
                break;
            case '#profile':
                this.showProfile();
                break;
        }
        
        window.location.hash = targetHash;
    }
    
    showFavorites() {
        const favoritesSection = document.getElementById('favorites');
        const favoritesGrid = document.getElementById('favoritesGrid');
        const favoritesData = getFavoriteRecipes();
        
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        favoritesSection.style.display = 'block';
        
        document.getElementById('favoritesCount').textContent = favoritesData.length;
        
        favoritesGrid.innerHTML = '';
        
        if (favoritesData.length === 0) {
            favoritesGrid.innerHTML = `
                <div class="empty-state">
                    <h3>Chưa có công thức yêu thích nào</h3>
                    <p>Hãy lưu các công thức bạn thích bằng cách nhấn vào biểu tượng trái tim!</p>
                </div>
            `;
            return;
        }
        
        favoritesData.forEach((recipe, index) => {
            const recipeCard = this.createRecipeCard(recipe);
            recipeCard.style.animationDelay = `${index * 0.1}s`;
            favoritesGrid.appendChild(recipeCard);
        });
    }
    
    showProfile() {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Create profile section if it doesn't exist
        let profileSection = document.getElementById('profile');
        if (!profileSection) {
            profileSection = document.createElement('section');
            profileSection.id = 'profile';
            profileSection.className = 'profile-section';
            profileSection.innerHTML = `
                <div class="container">
                    <div class="section-header">
                        <h2>Hồ sơ cá nhân</h2>
                    </div>
                    <div class="profile-content">
                        <div class="profile-stats">
                            <div class="stat-card">
                                <h3>${getFavoriteRecipes().length}</h3>
                                <p>Công thức yêu thích</p>
                            </div>
                            <div class="stat-card">
                                <h3>${Object.keys(userRatings).length}</h3>
                                <p>Công thức đã đánh giá</p>
                            </div>
                            <div class="stat-card">
                                <h3>${this.currentRecipes.length}</h3>
                                <p>Công thức đã xem</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(profileSection);
        }
        
        profileSection.style.display = 'block';
    }
    
    loadInitialRecipes() {
        this.currentRecipes = getRecipes();
        this.renderRecipes();
        this.updateResultsCount();
    }
    
    updateResultsCount() {
        document.getElementById('resultsCount').textContent = this.currentRecipes.length;
    }
    
    updateResultsTitle() {
        const title = document.getElementById('resultsTitle');
        if (this.currentQuery) {
            title.textContent = `Kết quả tìm kiếm cho "${this.currentQuery}"`;
        } else {
            title.textContent = 'Công thức gợi ý cho bạn';
        }
    }
    
    updateNavigation() {
        // Set initial active nav link and show correct sections
        const hash = window.location.hash || '#home';
        this.handleNavigation(hash);
    }
    
    renderEmptyState() {
        return `
            <div class="empty-state">
                <h3>Không tìm thấy công thức nào</h3>
                <p>Thử thay đổi từ khóa tìm kiếm hoặc điều chỉnh bộ lọc để có kết quả tốt hơn!</p>
            </div>
        `;
    }
    
    showLoading(message) {
        const loadingHtml = `
            <div id="loadingOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center; z-index: 9999;">
                <div style="text-align: center; color: var(--primary-500);">
                    <div style="width: 50px; height: 50px; border: 3px solid var(--neutral-200); border-top: 3px solid var(--primary-500); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto var(--space-md);"></div>
                    <p style="font-size: 1.1rem; font-weight: 600;">${message}</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loadingHtml);
        
        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.remove();
        }
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-500);
            color: white;
            padding: var(--space-md) var(--space-lg);
            border-radius: var(--radius-md);
            font-weight: 600;
            z-index: 10000;
            box-shadow: var(--shadow-lg);
            transform: translateX(100%);
            transition: transform 300ms ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Utility functions
    formatRating(rating) {
        return Math.round(rating * 10) / 10;
    }
    
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }
        
        if (hasHalfStar) {
            stars += '☆';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '☆';
        }
        
        return stars;
    }
    
    translateDiet(diet) {
        const translations = {
            'vegetarian': 'Chay',
            'vegan': 'Thuần chay',
            'gluten-free': 'Không gluten',
            'keto': 'Keto'
        };
        return translations[diet] || diet;
    }
    
    translateDifficulty(difficulty) {
        const translations = {
            'easy': 'Dễ',
            'medium': 'Trung bình',
            'hard': 'Khó'
        };
        return translations[difficulty] || difficulty;
    }
    
    translateCuisine(cuisine) {
        const translations = {
            'vietnamese': 'Việt Nam',
            'italian': 'Ý',
            'thai': 'Thái',
            'japanese': 'Nhật',
            'indian': 'Ấn Độ',
            'chinese': 'Trung Quốc',
            'french': 'Pháp',
            'korean': 'Hàn Quốc',
            'mediterranean': 'Địa Trung Hải'
        };
        return translations[cuisine] || cuisine;
    }
    
    translateNutrition(key) {
        const translations = {
            'calories': 'Calories',
            'protein': 'Protein',
            'carbs': 'Carb',
            'fat': 'Fat'
        };
        return translations[key] || key;
    }
}

// Initialize the app
const app = new RecipeApp();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.active');
        if (modal) {
            app.closeModal();
        }
    }
    
    // Search shortcut
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Handle browser navigation
window.addEventListener('popstate', () => {
    const hash = window.location.hash || '#home';
    app.handleNavigation(hash);
});