// Mock Data cho các công thức nấu ăn
const recipeData = [
    {
        id: 1,
        title: "Gà nướng sốt mật ong",
        image: "imgs/vietnamese_food_5.jpg",
        cookTime: "45 phút",
        servings: 4,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.8,
        reviewCount: 127,
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
        image: "imgs/asian_food_2.jpg",
        cookTime: "25 phút",
        servings: 3,
        difficulty: "medium",
        cuisine: "chinese",
        diet: [],
        rating: 4.5,
        reviewCount: 89,
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
        image: "imgs/healthy_food_5.jpg",
        cookTime: "10 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: ["vegetarian", "vegan"],
        rating: 4.2,
        reviewCount: 156,
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
        image: "imgs/vietnamese_food_9.jpg",
        cookTime: "20 phút",
        servings: 2,
        difficulty: "hard",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.7,
        reviewCount: 93,
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
        image: "imgs/vietnamese_food_9.jpg",
        cookTime: "50 phút",
        servings: 4,
        difficulty: "medium",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.9,
        reviewCount: 201,
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
        image: "imgs/vietnamese_food_5.jpg",
        cookTime: "30 phút",
        servings: 4,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.4,
        reviewCount: 178,
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
        image: "imgs/healthy_food_5.jpg",
        cookTime: "15 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: ["vegetarian"],
        rating: 4.6,
        reviewCount: 142,
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
        image: "imgs/italian_food_9.jpg",
        cookTime: "2 giờ",
        servings: 2,
        difficulty: "hard",
        cuisine: "italian",
        diet: ["vegetarian"],
        rating: 4.8,
        reviewCount: 167,
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
        image: "imgs/asian_food_9.jpg",
        cookTime: "20 phút",
        servings: 2,
        difficulty: "medium",
        cuisine: "thai",
        diet: [],
        rating: 4.3,
        reviewCount: 98,
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
        image: "imgs/asian_food_2.jpg",
        cookTime: "40 phút",
        servings: 3,
        difficulty: "medium",
        cuisine: "japanese",
        diet: [],
        rating: 4.5,
        reviewCount: 87,
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
        id: 11,
        title: "Bánh curry Ấn Độ",
        image: "imgs/healthy_food_6.jpg",
        cookTime: "45 phút",
        servings: 4,
        difficulty: "medium",
        cuisine: "indian",
        diet: ["vegetarian"],
        rating: 4.4,
        reviewCount: 76,
        ingredients: [
            "2 chén bột mì",
            "200g khoai tây",
            "1 bát đậu hà lan",
            "1 củ hành",
            "2 thìa bột curry",
            "1 thìa nghệ",
            "1 thìa ớt bột",
            "1/4 chén dầu"
        ],
        instructions: [
            "Xào hành với dầu cho thơm",
            "Thêm khoai tây, đậu hà lan xào 5 phút",
            "Nêm bột curry, nghệ, ớt bột",
            "Trộn bột mì thành bột nhào với nước",
            "Nhồi đầu và chiên vàng",
            "Phục vụ với chutney"
        ],
        nutrition: {
            calories: 315,
            protein: "8g",
            carbs: "48g",
            fat: "12g"
        },
        tags: ["chay", "Ấn Độ", "đậm đà", "đồ ăn vặt"],
        description: "Bánh curry ấm áp với gia vị đặc trưng Ấn Độ, thơm ngon và bổ dưỡng.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 12,
        title: "Gỏi cuốn tôm thịt",
        image: "imgs/asian_food_9.jpg",
        cookTime: "25 phút",
        servings: 3,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.2,
        reviewCount: 123,
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
        image: "imgs/vietnamese_food_5.jpg",
        cookTime: "3 giờ",
        servings: 6,
        difficulty: "hard",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.9,
        reviewCount: 245,
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
    {
        id: 14,
        title: "Smoothie trái cây detox",
        image: "imgs/healthy_food_5.jpg",
        cookTime: "5 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: ["vegetarian", "vegan", "gluten-free"],
        rating: 4.1,
        reviewCount: 89,
        ingredients: [
            "1 quả táo",
            "1 quả cam",
            "100g nho đen",
            "1/2 quả chanh",
            "200ml nước dừa",
            "1 thìa mật ong",
            "Vài lá bạc hà",
            "Đá viên"
        ],
        instructions: [
            "Rửa sạch và cắt nhỏ các loại trái cây",
            "Lọc vỏ cam, táo tùy theo sở thích",
            "Cho tất cả vào máy xay với nước dừa",
            "Thêm mật ong và lá bạc hà",
            "Xay nhuyễn 1-2 phút",
            "Đổ ra ly với đá viên"
        ],
        nutrition: {
            calories: 125,
            protein: "2g",
            carbs: "28g",
            fat: "1g"
        },
        tags: ["healthy", "detox", " ít calo", "vitamin cao"],
        description: "Smoothie detox tươi mát từ trái cây tự nhiên, giàu vitamin và chất chống oxy hóa.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 15,
        title: "Cá nướng sốt chanh",
        image: "imgs/asian_food_3.jpg",
        cookTime: "35 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.6,
        reviewCount: 112,
        ingredients: [
            "2 con cá lóc nhỏ",
            "2 quả chanh",
            "4 thìa dầu olive",
            "3 tép tỏi",
            "2 thìa mật ong",
            "Hành lá",
            "Tiêu trắng",
            "Muối"
        ],
        instructions: [
            "Rửa sạch cá, chà muối và tiêu",
            "Pha sốt: nước cốt chanh, dầu olive, tỏi, mật ong",
            "Ướp cá trong 20 phút",
            "Nướng ở 200°C trong 15-20 phút",
            "Quét sốt chanh lên bề mặt",
            "Rắc hành lá thái nhỏ"
        ],
        nutrition: {
            calories: 245,
            protein: "28g",
            carbs: "6g",
            fat: "12g"
        },
        tags: ["tươi ngon", "ít mỡ", "dễ làm"],
        description: "Cá nướng tươi với sốt chanh chua ngọt, thơm ngon và bổ dưỡng.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 16,
        title: "Nướng bánh mì Pháp",
        image: "imgs/italian_food_8.jpg",
        cookTime: "12 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "french",
        diet: ["vegetarian"],
        rating: 4.3,
        reviewCount: 67,
        ingredients: [
            "4 lát bánh mì Pháp",
            "4 thìa bơ",
            "2 thìa đường",
            "1 thìa quế",
            "1 thìa vani",
            "1 quả trứng",
            "200ml sữa",
            "Hạnh nhân"
        ],
        instructions: [
            "Đánh tan trứng với sữa và vani",
            "Nhúng từng lát bánh vào hỗn hợp",
            "Chiên trên chảo với bơ cho vàng",
            "Trộn đường với quế để làm lớp phủ",
            "Rắc lên bánh mì nóng",
            "Trang trí với hạnh nhân"
        ],
        nutrition: {
            calories: 380,
            protein: "12g",
            carbs: "45g",
            fat: "18g"
        },
        tags: ["đồ ngọt", "Pháp", "sáng tạo", "ngọt ngào"],
        description: "Bánh mì Pháp nướng thơm ngon với quế và vani, món tráng miệng không thể thiếu.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 17,
        title: "Ramen tứ xương",
        image: "imgs/asian_food_2.jpg",
        cookTime: "4 giờ",
        servings: 4,
        difficulty: "hard",
        cuisine: "japanese",
        diet: [],
        rating: 4.7,
        reviewCount: 134,
        ingredients: [
            "2kg xương heo",
            "300g mì ramen",
            "2 gói miso",
            "4 trứng luộc",
            "2 bó hành lá",
            "Nor海苔",
            "Chả cá thìa"
        ],
        instructions: [
            "Luộc xương heo để loại bỏ máu bẩn",
            "Nấu nước dùng trong 3-4 tiếng",
            "Miso với một ít nước dùng",
            "Luộc mì ramen vài phút",
            "Thành phẩm với nước dùng, miso và topping"
        ],
        nutrition: {
            calories: 485,
            protein: "22g",
            carbs: "52g",
            fat: "20g"
        },
        tags: ["nhật", "nước dùng", "đặc biệt", "khó"],
        description: "Ramen tứ xương truyền thống với nước dùng đậm đà, thể hiện sự tinh tế của ẩm thực Nhật.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 18,
        title: "Cá cơm chiên giòn",
        image: "imgs/vietnamese_food_3.jpg",
        cookTime: "15 phút",
        servings: 3,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.0,
        reviewCount: 78,
        ingredients: [
            "200g cá cơm tươi",
            "2 thìa dầu ăn",
            "1 thìa muối",
            "1/2 thìa tiêu",
            "2 thìa nước mắm",
            "3 tép tỏi băm",
            "Ớt bột",
            "Lime lá"
        ],
        instructions: [
            "Rửa sạch cá cơm và để ráo",
            "Ướp với muối, tiêu trong 10 phút",
            "Chiên trên lửa lớn cho giòn",
            "Phi thơm tỏi và ớt bột",
            "Cho cá cơm vào xào đều",
            "Nêm nước mắm và rắc lá lime"
        ],
        nutrition: {
            calories: 185,
            protein: "25g",
            carbs: "1g",
            fat: "9g"
        },
        tags: ["hải sản", "nhanh gọn", "đậm đà", "thơm ngon"],
        description: "Cá cơm chiên giòn thơm ngon với hương vị đậm đà, món ăn dân dã nhưng rất ngon miệng.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 19,
        title: "Bánh gạo cuộn rong biển",
        image: "imgs/healthy_food_6.jpg",
        cookTime: "30 phút",
        servings: 4,
        difficulty: "medium",
        cuisine: "korean",
        diet: ["vegetarian"],
        rating: 4.2,
        reviewCount: 56,
        ingredients: [
            "200g bánh gạo",
            "3 tấm rong biển nori",
            "2 quả trứng",
            "100g đậu phụ",
            "1/2 củ cà rốt",
            "2 thìa dầu sesame",
            "2 thìa xì dầu",
            "1 thìa dầu nóng"
        ],
        instructions: [
            "Nấu bánh gạo cho mềm",
            "Chiên trứng và xào đậu phụ",
            "Cắt nhỏ rau củ",
            "Trải rong biển, phủ bánh gạo",
            "Xếp topping vào trung tâm",
            "Cuộn chặt và cắt miếng"
        ],
        nutrition: {
            calories: 225,
            protein: "9g",
            carbs: "32g",
            fat: "8g"
        },
        tags: ["chay", "hàn quốc", "healthy", "sáng tạo"],
        description: "Bánh gạo cuộn rong biển với topping đa dạng, thể hiện sự sáng tạo của ẩm thực Hàn Quốc.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 20,
        title: "Gỏi gà sốt cay",
        image: "imgs/healthy_food_3.jpg",
        cookTime: "20 phút",
        servings: 2,
        difficulty: "medium",
        cuisine: "thai",
        diet: [],
        rating: 4.5,
        reviewCount: 103,
        ingredients: [
            "300g thịt gà nạc",
            "2 quả ớt chuông đỏ",
            "1/2 quả dứa",
            "1/2 củ hành tím",
            "2 thìa nước chấm cá",
            "2 thìa nước cốt chanh",
            "1 thìa đường",
            "Tỏi băm, ớt bột"
        ],
        instructions: [
            "Luộc gà và xé sợi mỏng",
            "Cắt nhỏ rau củ và dứa",
            "Pha nước sốt cay: nước chấm, chanh, đường, tỏi, ớt",
            "Trộn đều gà với rau củ",
            "Đổ nước sốt và trộn đều",
            "Ủ trong tủ lạnh 15 phút trước khi ăn"
        ],
        nutrition: {
            calories: 195,
            protein: "24g",
            carbs: "8g",
            fat: "6g"
        },
        tags: ["thái", "gà", "cay nóng", "fresh"],
        description: "Gỏi gà sốt cay cay chua ngọt đặc trung Thái, tươi mát và đậm đà hương vị.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 21,
        title: "Tôm nướng mật ong",
        image: "imgs/asian_food_3.jpg",
        cookTime: "25 phút",
        servings: 3,
        difficulty: "easy",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.7,
        reviewCount: 89,
        ingredients: [
            "500g tôm sú",
            "3 thìa mật ong",
            "2 thìa dầu olive",
            "2 thìa xì dấu",
            "1 thìa rượu trắng",
            "3 tép tỏi băm",
            "1 thìa bơ",
            "Vài lá rau thơm"
        ],
        instructions: [
            "Bóc vỏ tôm, để nguyên đuôi",
            "Ướp với mật ong, xì dấu, rượu, tỏi trong 15 phút",
            "Nướng trên than hoa hoặc bếp nướng",
            "Quét bơ trong 5 phút cuối",
            "Trang trí với rau thơm tươi",
            "Phục vụ nóng"
        ],
        nutrition: {
            calories: 165,
            protein: "28g",
            carbs: "6g",
            fat: "4g"
        },
        tags: ["hải sản", "ít mỡ", "ngọt ngào", "thơm ngon"],
        description: "Tôm nướng ngọt thanh với mật ong, món ăn không thể bỏ qua cho người yêu hải sản.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 22,
        title: "Bún thịt nướng",
        image: "imgs/vietnamese_food_3.jpg",
        cookTime: "40 phút",
        servings: 3,
        difficulty: "medium",
        cuisine: "vietnamese",
        diet: [],
        rating: 4.6,
        reviewCount: 156,
        ingredients: [
            "300g bún tươi",
            "300g thịt lợn nạc",
            "200g dưa chuột",
            "100g đậu phụ",
            "1 bánh đa nem",
            "3 thìa nước mắm",
            "2 thìa đường",
            "1 quả chanh",
            "Hành lá, ngò"
        ],
        instructions: [
            "Thái thịt thành lát mỏng, ướp gia vị",
            "Nướng thịt trên than hoa cho chín",
            "Xào đậu phụ cho vàng giòn",
            "Rắc hành lá ngò thái nhỏ",
            "Chế biến nước chấm chua ngọt",
            "Xếp tất cả vào bún và thưởng thức"
        ],
        nutrition: {
            calories: 385,
            protein: "22g",
            carbs: "48g",
            fat: "14g"
        },
        tags: ["việt nam", "đậm đà", "công thức cổ"],
        description: "Bún thịt nướng với hương vị đậm đà truyền thống Việt Nam, món ăn dân dã nhưng rất ngon.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 23,
        title: "Salad cá ngừ trộn dầu olive",
        image: "imgs/healthy_food_5.jpg",
        cookTime: "10 phút",
        servings: 2,
        difficulty: "easy",
        cuisine: "mediterranean",
        diet: [],
        rating: 4.3,
        reviewCount: 94,
        ingredients: [
            "1 hộp cá ngừ trong dầu",
            "100g xà lách",
            "1 quả cà chua",
            "1 quả dưa chuột",
            "50g hành tím",
            "2 thìa dầu olive",
            "1 thìa giấm",
            "Muối, tiêu"
        ],
        instructions: [
            "Rửa sạch và cắt nhỏ rau củ",
            "Trộn cá ngừ với rau củ trong tô lớn",
            "Pha nước sốt từ dầu olive, giấm, muối tiêu",
            "Đổ nước sốt lên salad và trộn đều",
            "Ủ trong tủ lạnh 15 phút trước khi ăn",
            "Trang trí với hành tím"
        ],
        nutrition: {
            calories: 195,
            protein: "18g",
            carbs: "6g",
            fat: "12g"
        },
        tags: ["healthy", "ít calo", "dầu olive", "mediterranean"],
        description: "Salad cá ngừ trộn dầu olive thanh mát, giàu omega-3 và protein, món ăn healthy tuyệt vời.",
        isFavorite: false,
        reviews: []
    },
    {
        id: 24,
        title: "Kem tự làm vani",
        image: "imgs/italian_food_5.jpg",
        cookTime: "4 giờ",
        servings: 6,
        difficulty: "hard",
        cuisine: "french",
        diet: ["vegetarian"],
        rating: 4.8,
        reviewCount: 67,
        ingredients: [
            "500ml sữa tươi",
            "250ml kem tươi",
            "4 quả trứng vàng",
            "150g đường",
            "1 thìa vani",
            "1/2 thìa muối",
            "Đá viên"
        ],
        instructions: [
            "Đánh trứng với đường cho xanh nhạt",
            "Đun sữa và kem tới nhiệt độ sôi",
            "Trộn từ từ sữa vào trứng",
            "Đun hỗn hợp trên lửa nhỏ cho đặc",
            "Thêm vani và để nguội",
            "Đóng vào tủ đá đánh 30 phút/lần"
        ],
        nutrition: {
            calories: 285,
            protein: "8g",
            carbs: "28g",
            fat: "16g"
        },
        tags: ["đồ ngọt", "Pháp", "tự làm", "sang trọng"],
        description: "Kem vani tự làm mềm mịn, thơm ngon với hương vani đặc trung, món tráng miệng hoàn hảo.",
        isFavorite: false,
        reviews: []
    }
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
    userRatings[recipeId] = {
        rating,
        review,
        timestamp: Date.now()
    };
    
    localStorage.setItem('recipeRatings', JSON.stringify(userRatings));
    
    // Cập nhật rating trung bình
    const recipe = getRecipeById(recipeId);
    const allRatings = Object.values(userRatings)
        .filter(r => r.rating)
        .map(r => r.rating);
    
    const newRating = allRatings.length > 0 ? 
        allRatings.reduce((sum, r) => sum + r, 0) / allRatings.length : 
        0;
    
    recipe.rating = Math.round(newRating * 10) / 10;
    recipe.reviewCount = allRatings.length;
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