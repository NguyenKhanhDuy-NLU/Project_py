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
        
        // Reset dữ liệu cũ khi khởi tạo
        this.resetOldData();
        
        this.init();
    }

    resetOldData() {
        // Kiểm tra và load ratings từ localStorage nếu có
        const storedRatings = JSON.parse(localStorage.getItem('recipeRatings')) || {};
        const storedFavorites = JSON.parse(localStorage.getItem('recipeFavorites')) || {};
        
        // Cập nhật ratings và favorites từ localStorage
        recipeData.forEach(recipe => {
            if (storedRatings[recipe.id]) {
                recipe.rating = storedRatings[recipe.id].rating || 0;
                recipe.reviewCount = storedRatings[recipe.id] ? 1 : 0;
            } else {
                recipe.rating = 0;
                recipe.reviewCount = 0;
            }
            
            recipe.isFavorite = storedFavorites[recipe.id] || false;
        });
        
        // Xóa chỉ những localStorage key không hợp lệ (sau này có thể mở rộng)
        // localStorage.removeItem('oldInvalidKey'); // Ví dụ
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
                        <svg width="24" height="24" fill="currentColor"><path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.6 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12.1 21.35z"/></svg>
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
                    <p style="margin: var(--space-xs) 0 0 0; color: var(--neutral-600); font-size: 0.9rem;">${this.selectedRecipe.cookTime}</p>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        this.currentRating = 0;
        this.highlightStars(0);
        document.getElementById('reviewText').value = '';
        
        // Bind star rating events khi modal đã hiển thị
        this.bindStarRatingEvents();
    }

    bindStarRatingEvents() {
        const stars = document.querySelectorAll('.star');
        console.log('Binding events for', stars.length, 'stars');
        
        stars.forEach(star => {
            // Xóa các listeners cũ nếu có
            star.removeEventListener('click', this.handleStarClick);
            star.removeEventListener('mouseenter', this.handleStarHover);
            
            // Thêm listeners mới
            star.addEventListener('click', this.handleStarClick.bind(this));
            star.addEventListener('mouseenter', this.handleStarHover.bind(this));
        });
        
        // Bind mouseleave event cho container
        const starRating = document.querySelector('.star-rating');
        if (starRating) {
            starRating.removeEventListener('mouseleave', this.handleStarLeave);
            starRating.addEventListener('mouseleave', this.handleStarLeave.bind(this));
        }
    }

    handleStarClick(e) {
        e.preventDefault();
        const rating = parseInt(e.target.dataset.rating);
        console.log('Star clicked:', rating);
        this.setRating(rating);
    }

    handleStarHover(e) {
        e.preventDefault();
        const rating = e.target.dataset.rating;
        console.log('Star hovered:', rating);
        this.highlightStarsOnHover(rating);
    }

    handleStarLeave() {
        console.log('Mouse left star rating');
        // Chỉ xóa class hover-active, KHÔNG restore rating để tránh mất trạng thái đã chọn
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.classList.remove('hover-active');
        });
        // KHÔNG gọi highlightStars() ở đây để giữ nguyên rating đã chọn
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
        console.log('Setting rating to:', this.currentRating);
        this.highlightStars(rating);
    }
    
    highlightStars(rating) {
        const stars = document.querySelectorAll('.star');
        console.log('Setting permanent rating:', rating);
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    highlightStarsOnHover(rating) {
        const stars = document.querySelectorAll('.star');
        const ratingNum = parseInt(rating);
        console.log('Hovering over star:', rating, 'Parsed to:', ratingNum);
        
        // Xóa tất cả class hover-active trước
        stars.forEach(star => {
            star.classList.remove('hover-active');
        });
        
        // Thêm class 'hover-active' cho tất cả các ngôi sao từ 0 đến ratingNum-1
        stars.forEach((star, index) => {
            if (index < ratingNum) {
                star.classList.add('hover-active');
                console.log('Star', index, 'hover-activated');
            }
        });
    }
    
    submitRating() {
        if (this.currentRating === 0) {
            this.showNotification('Vui lòng chọn số sao để đánh giá!');
            return;
        }
        
        const reviewText = document.getElementById('reviewText').value.trim();
        
        // Cập nhật rating cho công thức hiện tại
        updateRating(this.selectedRecipe.id, this.currentRating, reviewText);
        
        this.closeRatingModal();
        this.closeModal();
        this.showNotification(`Cảm ơn bạn đã đánh giá ${this.currentRating} sao!`);
        
        // Cập nhật lại UI để hiển thị rating mới
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
            case '#favorites':
                this.showFavorites();
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
    
    // Removed showProfile() function
    
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
        
        // Thêm sao đầy
        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }
        
        // Thêm nửa sao (nếu có)
        if (hasHalfStar) {
            stars += '☆'; // Sử dụng sao trống để biểu thị nửa sao
        }
        
        // Tính số sao còn lại
        const totalStars = fullStars + (hasHalfStar ? 1 : 0);
        const emptyStars = 5 - totalStars;
        
        // Thêm sao trống
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