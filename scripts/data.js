// Mock Data cho các công thức nấu ăn
const recipeData = [
    {
        id: 1,
        title: "Gà nướng sốt mật ong",
        image: "imgs/ga-nuong-mat-ong.webp",
        cookTime: "45 phút",
        servings: 4,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "500g đùi gà",
            "3 thìa mật ong",
            "2 thìa nước tương",
            "1 thìa dầu hào",
            "2 tép tỏi băm nhỏ",
            "1 quả gừng nhỏ",
            "Tiêu đen"
        ],
        instructions: [
            "Rửa sạch đùi gà và để ráo nước",
            "Pha sốt mật ong với nước tương, dầu hào, tỏi gừng băm nhỏ",
            "Ướp gà trong 30 phút",
            "Nướng gà ở 200°C trong 35-40 phút, đảo một lần giữa chừng"
        ],
        nutrition: {
            calories: 285,
            protein: "32g",
            carbs: "8g",
            fat: "14g"
        },
        tags: ["dễ làm", "ít calo", "thơm ngon"],
        description: "Món gà nướng thơm ngon với sốt mật ong đặc biệt, thịt mềm và vị ngọt thanh.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 2,
        title: "Cơm rang hải sản",
        image: "imgs/Comranghaisan.webp",
        cookTime: "25 phút",
        servings: 3,
        difficulty: "medium",
        cuisine: "chinese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "2 chén cơm nguội",
            "200g tôm bóc vỏ",
            "100g mực tươi",
            "2 quả trứng",
            "1/2 củ hành tây",
            "1/4 chén đậu hà lan",
            "4 thìa dầu ăn",
            "3 thìa xì dầu",
            "Tiêu trắng"
        ],
        instructions: [
            "Đánh trứng, chiên thành miếng và cắt nhỏ",
            "Phi thơm hành tây với dầu ăn",
            "Cho tôm và mực vào xào 2-3 phút",
            "Thêm cơm, trứng và đậu hà lan, xào đều",
            "Nêm xì dầu và tiêu, xào thêm 2 phút"
        ],
        nutrition: {
            calories: 385,
            protein: "28g",
            carbs: "45g",
            fat: "12g"
        },
        tags: ["nhanh gọn", "ngon miệng", "nhiều dinh dưỡng"],
        description: "Cơm rang giòn với hải sản tươi ngon, đậm đà hương vị châu Á.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 3,
        title: "Rau trộn salad xanh",
        image: "imgs/Rau-tron-salad.jpg",
        cookTime: "10 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: ["vegetarian", "vegan"],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "100g xà lách",
            "50g rau muống",
            "1 quả dưa chuột",
            "1 quả cà chua bi",
            "100g ớt chuông xanh",
            "1/2 củ hành tây nhỏ",
            "3 thìa giấm táo",
            "2 thìa dầu olive",
            "1 thìa mật ong",
            "Muối, tiêu"
        ],
        instructions: [
            "Rửa sạch và cắt nhỏ tất cả rau củ",
            "Trộn đều trong tô lớn",
            "Pha nước sốt từ giấm, dầu olive, mật ong, muối tiêu",
            "Đổ nước sốt lên salad và trộn đều",
            "Để trong tủ lạnh 10 phút trước khi ăn"
        ],
        nutrition: {
            calories: 95,
            protein: "3g",
            carbs: "12g",
            fat: "6g"
        },
        tags: ["chay", "healthy", "ít calo", "thanh mát"],
        description: "Salad xanh tươi ngon, giàu vitamin và khoáng chất, phù hợp cho bữa ăn healthy.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 4,
        title: "Bò nướng sốt tiêu đen",
        image: "imgs/cách-làm-bò-bít-tết-sốt-tiêu-đen.jpg",
        cookTime: "20 phút",
        servings: 2,
        difficulty: "hard",
        cuisine: "vietnamese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "300g thịt bò thăn",
            "2 thìa bơ",
            "1 thìa tiêu đen xay",
            "2 thìa nước tương",
            "1 thìa dầu olive",
            "2 tép tỏi",
            "Hành tây",
            "Muối"
        ],
        instructions: [
            "Ướp thịt bò với tiêu, muối, nước tương trong 15 phút",
            "Làm nóng chảo với bơ và dầu olive",
            "Nướng bò 3-4 phút mỗi bên (tùy theo độ chín mong muốn)",
            "Thêm tỏi phi thơm trong phút cuối",
            "Cắt lát mỏng và thưởng thức"
        ],
        nutrition: {
            calories: 340,
            protein: "35g",
            carbs: "2g",
            fat: "20g"
        },
        tags: ["cao cấp", "đậm đà", "protein cao"],
        description: "Thịt bò nướng mềm thơm với sốt tiêu đen đặc biệt, thích hợp cho bữa tối lãng mạn.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 5,
        title: "Sườn nướng mật ong",
        image: "imgs/Suon-nuong-mat-ong.jpg",
        cookTime: "50 phút",
        servings: 4,
        difficulty: "medium",
        cuisine: "vietnamese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "1kg sườn cốt lết",
            "4 thìa mật ong",
            "3 thìa nước mắm",
            "2 thìa nước tương",
            "3 thìa dầu hào",
            "3 tép tỏi",
            "2 thìa gừng băm",
            "1 thìa tiêu trắng",
            "1 thìa bột ngọt"
        ],
        instructions: [
            "Chặt sườn thành miếng vừa ăn, chà xát muối rồi rửa sạch",
            "Pha nước sốt: mật ong, nước mắm, nước tương, dầu hào, tỏi gừng, tiêu",
            "Ướp sườn trong 2-3 tiếng",
            "Nướng trên lửa vừa 25-30 phút mỗi bên",
            "Quét mật ong trong 5 phút cuối"
        ],
        nutrition: {
            calories: 420,
            protein: "38g",
            carbs: "12g",
            fat: "25g"
        },
        tags: ["đặc biệt", "tiệc tối", "ngon miệng"],
        description: "Sườn nướng với sốt mật ong đậm đà, thịt mềm ngọt, món ăn không thể bỏ qua.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 6,
        title: "Canh chua cá lóc",
        image: "imgs/cach-nau-canh-chua-ca-loc.jpg",
        cookTime: "30 phút",
        servings: 4,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "400g cá lóc",
            "2 quả cà chua",
            "1 bó me nếp",
            "100g giá đỗ",
            "2 thìa giấm",
            "3 thìa đường",
            "1 thìa muối",
            "Hành lá, ngò",
            "Tỏi băm"
        ],
        instructions: [
            "Hấp chín cá lóc, tách xương, cắt khúc",
            "Nấu nước me nếp với tỏi băm",
            "Thêm cà chua cắt múi cau",
            "Nêm giấm, đường, muối vừa ăn",
            "Thêm cá và giá đỗ, đun sôi 2 phút",
            "Rắc hành ngò và thưởng thức"
        ],
        nutrition: {
            calories: 145,
            protein: "18g",
            carbs: "8g",
            fat: "5g"
        },
        tags: ["thanh mát", "dễ tiêu", "công thức cổ"],
        description: "Canh chua cá lóc thơm ngon, vị chua thanh của me nếp hòa quyện với cá tươi.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 7,
        title: "Bánh mì bơ tỏi",
        image: "imgs/mon-banh-gion-thom.webp",
        cookTime: "15 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: ["vegetarian"],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "4 ổ bánh mì",
            "100g bơ",
            "6 tép tỏi",
            "2 thìa mật ong",
            "1/2 thìa muối",
            "1 thìa tiêu",
            "Hành lá cắt nhỏ"
        ],
        instructions: [
            "Trộn bơ mềm với tỏi băm, mật ong, muối, tiêu",
            "Xẻ bánh mì thành khe hở",
            "Quét đều hỗn hợp bơ lên hai mặt bánh",
            "Rắc hành lá lên trên",
            "Nướng ở 180°C trong 8-10 phút cho vàng"
        ],
        nutrition: {
            calories: 320,
            protein: "8g",
            carbs: "38g",
            fat: "16g"
        },
        tags: ["nhanh gọn", "ngọt mặn", "đồ ăn vặt"],
        description: "Bánh mì giòn với lớp bơ tỏi thơm ngon, món ăn vặt không thể bỏ qua.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 8,
        title: "Pizza Margherita",
        image: "imgs/Pizza Margherita.webp",
        cookTime: "2 giờ",
        servings: 2,
        difficulty: "hard",
        cuisine: "italian",
        diet: ["vegetarian"],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "250g bột mì",
            "150ml nước ấm",
            "1 thìa nấm men",
            "1 thìa muối",
            "2 thìa dầu olive",
            "200g cà chua",
            "100g phô mai mozzarella",
            "10 lá basil"
        ],
        instructions: [
            "Trộn bột mì với nấm men, muối, tạo lỗ trong giữa",
            "Đổ nước ấm và dầu olive, nhào bột 10 phút",
            "Ủ bột 1 tiếng cho nở gấp đôi",
            "Cán mỏng, phủ sốt cà chua và phô mai",
            "Nướng ở 250°C trong 8-10 phút",
            "Trang trí basil tươi"
        ],
        nutrition: {
            calories: 485,
            protein: "20g",
            carbs: "65g",
            fat: "18g"
        },
        tags: ["chay", "ý", "nướng", "công thức truyền thống"],
        description: "Pizza Margherita cổ điển với lớp vỏ giòn, sốt cà chua tươi và phô mai thơm.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 9,
        title: "Pad Thái tôm khô",
        image: "imgs/Pad Thái tôm khô.jpg",
        cookTime: "20 phút",
        servings: 2,
        difficulty: "medium",
        cuisine: "thai",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "200g bún đậu xanh",
            "150g tôm khô",
            "2 quả trứng",
            "100g đậu phộng rang",
            "2 thìa nước mắm",
            "2 thìa đường cọ nâu",
            "1 thìa giấm",
            "100g giá đỗ",
            "Hành lá, chanh"
        ],
        instructions: [
            "Ngâm bún nước sôi 5 phút, vớt ráo",
            "Trộn sốt: nước mắm, đường, giấm",
            "Phi thơm hành, xào tôm khô",
            "Đánh tan trứng, làm mỏng như bánh crepe",
            "Xào bún với tôm, trứng, giá đỗ",
            "Thêm nước sốt và đậu phộng rang"
        ],
        nutrition: {
            calories: 365,
            protein: "22g",
            carbs: "42g",
            fat: "14g"
        },
        tags: ["thái", "hải sản", "đậm đà", "nhanh gọn"],
        description: "Pad Thái chính hiệu với hương vị chua ngọt đặc trung của ẩm thực Thái.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 10,
        title: "Sushi cuộn thanh cua",
        image: "imgs/Sushi cuộn thanh cua.jpg",
        cookTime: "40 phút",
        servings: 3,
        difficulty: "medium",
        cuisine: "japanese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "300g gạo sushi",
            "3 thìa giấm sushi",
            "3 tấm rong biển nori",
            "150g thanh cua",
            "1/2 quả dưa leo",
            "1 quả bơ",
            "1 thìa wasabi",
            "1 thìa xì dầu"
        ],
        instructions: [
            "Nấu chín gạo, trộn với giấm sushi",
            "Trải nori lên thảm tre, phủ một lớp gạo",
            "Xếp thanh cua, dưa leo, bơ ở giữa",
            "Cuộn chặt bằng thảm tre",
            "Cắt thành 6-8 miếng",
            "Phục vụ với wasabi và xì dấu"
        ],
        nutrition: {
            calories: 285,
            protein: "12g",
            carbs: "52g",
            fat: "5g"
        },
        tags: ["nhật", "tươi sạch", "protein thấp", "healthy"],
        description: "Sushi cuộn tươi ngon với thanh cua và rau củ, thể hiện sự tinh tế của ẩm thực Nhật.",
        isFavorite: false,
        reviews: []
    },

    {
        id: 12,
        title: "Gỏi cuốn tôm thịt",
        image: "imgs/Gỏi cuốn tôm thịt.jpg",
        cookTime: "25 phút",
        servings: 3,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "12 tờ bánh tráng",
            "200g tôm tươi",
            "100g thịt lợn nạc",
            "200g giá đỗ",
            "200g rau xanh",
            "1 quả dưa leo",
            "1/2 củ cà rốt",
            "1 quả trứng",
            "Nước chấm sa tế"
        ],
        instructions: [
            "Luộc tôm và thịt chín, cắt lát mỏng",
            "Chiên mỏng trứng và cắt sợi",
            "Gọt và cắt sợi rau củ",
            "Nhúng bánh tráng vào nước ấm",
            "Xếp tất cả nguyên liệu vào trung tâm",
            "Cuộn chặt và chấm nước sốt"
        ],
        nutrition: {
            calories: 165,
            protein: "14g",
            carbs: "18g",
            fat: "6g"
        },
        tags: ["healthy", "tươi sạch", "ít calo", "thanh mát"],
        description: "Gỏi cuốn tươi ngon với hải sản và rau củ tươi, món ăn healthy không thể thiếu.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 13,
        title: "Phở gà truyền thống",
        image: "imgs/pho-ga-truyen-thong.jpg",
        cookTime: "3 giờ",
        servings: 6,
        difficulty: "hard",
        cuisine: "vietnamese",
        diet: [],
        rating: 0,
        reviewCount: 0,
        ingredients: [
            "1 con gà ta",
            "1kg xương bò",
            "300g bánh phở",
            "2 bó hành lá",
            "1 bó ngò",
            "3 củ hành tím",
            "Gừng, thì là",
            "Gia vị phở"
        ],
        instructions: [
            "Nấu nước dùng từ xương bò và gà trong 2-3 tiếng",
            "Gia hạnh và ngò, cho vào hành nướng",
            "Lọc nước dùng và nêm gia vị",
            "Cắt mỏng thịt gà và hành ngò",
            "Chần bánh phở trong nước sôi",
            "Thành phẩm đầy đủ với thịt và hành ngò"
        ],
        nutrition: {
            calories: 425,
            protein: "28g",
            carbs: "35g",
            fat: "16g"
        },
        tags: ["công thức cổ", "đặc biệt", "đậm đà"],
        description: "Phở gà truyền thống với nước dùng ngọt thanh, hương vị chính hiệu Việt Nam.",
        isFavorite: false,
        reviews: []
    },











];

// Lưu trữ thông tin đánh giá và review
const userRatings = JSON.parse(localStorage.getItem('recipeRatings')) || {};
const favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || {};

// Hàm lấy danh sách công thức
function getRecipes() {
    return recipeData;
}

// Hàm lấy công thức theo ID
function getRecipeById(id) {
    return recipeData.find(recipe => recipe.id === id);
}

// Hàm tìm kiếm công thức
function searchRecipes(query, filters = {}) {
    let filteredRecipes = recipeData;
    
    // Lọc theo từ khóa
    if (query) {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query.toLowerCase()) ||
            recipe.description.toLowerCase().includes(query.toLowerCase()) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))
        );
    }
    
    // Lọc theo các tiêu chí khác
    if (filters.diet && filters.diet !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.diet.includes(filters.diet)
        );
    }
    
    if (filters.difficulty && filters.difficulty !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.difficulty === filters.difficulty
        );
    }
    
    if (filters.cuisine && filters.cuisine !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.cuisine === filters.cuisine
        );
    }
    
    if (filters.time && filters.time !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => {
            const cookTime = parseInt(recipe.cookTime);
            switch (filters.time) {
                case 'quick':
                    return cookTime < 30;
                case 'medium':
                    return cookTime >= 30 && cookTime <= 60;
                case 'long':
                    return cookTime > 60;
                default:
                    return true;
            }
        });
    }
    
    return filteredRecipes;
}

// Hàm cập nhật rating
function updateRating(recipeId, rating, review = '') {
    console.log('Updating rating:', { recipeId, rating, review });
    
    // Lưu rating mới cho công thức này
    userRatings[recipeId] = {
        rating: parseInt(rating),
        review,
        timestamp: Date.now()
    };
    
    localStorage.setItem('recipeRatings', JSON.stringify(userRatings));
    
    // Cập nhật rating cho công thức hiện tại
    const recipe = getRecipeById(recipeId);
    recipe.rating = parseInt(rating);
    
    // Tăng số lượng review nếu chưa có review nào trước đó
    if (!recipe.reviewCount || recipe.reviewCount === 0) {
        recipe.reviewCount = 1;
    }
    
    console.log('Recipe after update:', recipe);
}

// Hàm quản lý yêu thích
function toggleFavorite(recipeId) {
    favorites[recipeId] = !favorites[recipeId];
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    
    const recipe = getRecipeById(recipeId);
    recipe.isFavorite = favorites[recipeId];
    
    return favorites[recipeId];
}

// Hàm lấy danh sách công thức yêu thích
function getFavoriteRecipes() {
    return recipeData.filter(recipe => favorites[recipe.id]);
}