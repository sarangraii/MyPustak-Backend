// controllers/bookController.js
const Order = require('../models/Order'); // Add this import

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299,
    image: "https://images-na.ssl-images-amazon.com/images/P/0743273567.01.L.jpg",
    description: "A classic American novel about the Jazz Age",
    genre: "Classic Literature",
    isbn: "978-0743273565"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 350,
    image: "https://images-na.ssl-images-amazon.com/images/P/0061120081.01.L.jpg",
    description: "A gripping tale of racial injustice and childhood",
    genre: "Classic Literature",
    isbn: "978-0061120084"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 399,
    image: "https://images-na.ssl-images-amazon.com/images/P/0452284236.01.L.jpg",
    description: "A dystopian social science fiction novel",
    genre: "Science Fiction",
    isbn: "978-0452284234"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 275,
    image: "https://images-na.ssl-images-amazon.com/images/P/0141439513.01.L.jpg",
    description: "A romantic novel of manners",
    genre: "Romance",
    isbn: "978-0141439518"
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 320,
    image: "https://images-na.ssl-images-amazon.com/images/P/0316769487.01.L.jpg",
    description: "A controversial novel about teenage rebellion",
    genre: "Coming of Age",
    isbn: "978-0316769488"
  },
  {
    id: 6,
    title: "Lord of the Flies",
    author: "William Golding",
    price: 285,
    image: "https://images-na.ssl-images-amazon.com/images/P/0571243398.01.L.jpg",
    description: "A novel about human nature and civilization",
    genre: "Adventure",
    isbn: "978-0571243396"
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 450,
    image: "https://images-na.ssl-images-amazon.com/images/P/0747532699.01.L.jpg",
    description: "The first book in the magical Harry Potter series",
    genre: "Fantasy",
    isbn: "978-0747532699"
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 380,
    image: "https://images-na.ssl-images-amazon.com/images/P/0547928246.01.L.jpg",
    description: "A fantasy adventure about Bilbo Baggins",
    genre: "Fantasy",
    isbn: "978-0547928241"
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 340,
    image: "https://images-na.ssl-images-amazon.com/images/P/0060850523.01.L.jpg",
    description: "A dystopian novel about a futuristic society",
    genre: "Science Fiction",
    isbn: "978-0060850524"
  },
  {
    id: 10,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 295,
    image: "https://images-na.ssl-images-amazon.com/images/P/0062315005.01.L.jpg",
    description: "A philosophical novel about following your dreams",
    genre: "Philosophy",
    isbn: "978-0062315007"
  },
  {
    id: 11,
    title: "Animal Farm",
    author: "George Orwell",
    price: 250,
    image: "https://images-na.ssl-images-amazon.com/images/P/0452284244.01.L.jpg",
    description: "A satirical allegorical novella about farm animals",
    genre: "Political Satire",
    isbn: "978-0452284241"
  },
  {
    id: 12,
    title: "Of Mice and Men",
    author: "John Steinbeck",
    price: 280,
    image: "https://images-na.ssl-images-amazon.com/images/P/0140177396.01.L.jpg",
    description: "A story of friendship and dreams during the Great Depression",
    genre: "Classic Literature",
    isbn: "978-0140177398"
  },
  {
    id: 13,
    title: "The Fault in Our Stars",
    author: "John Green",
    price: 325,
    image: "https://m.media-amazon.com/images/I/817tHNcyAgL._AC_UF1000,1000_QL80_.jpg",
    description: "A heart-wrenching story about two teenagers with cancer",
    genre: "Young Adult",
    isbn: "978-0142424179"
},
  {
    id: 14,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: 315,
    image: "https://images-na.ssl-images-amazon.com/images/P/1451673310.01.L.jpg",
    description: "A dystopian novel about a future where books are banned",
    genre: "Science Fiction",
    isbn: "978-1451673319"
  },
  {
    id: 15,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 385,
    image: "https://m.media-amazon.com/images/I/81IzbD2IiIL._AC_UF1000,1000_QL80_.jpg",
    description: "A powerful story of friendship, guilt, and redemption",
    genre: "Contemporary Fiction",
    isbn: "978-1594631931"
},
  {
    id: 16,
    title: "Life of Pi",
    author: "Yann Martel",
    price: 355,
    image: "https://images-na.ssl-images-amazon.com/images/P/0156027321.01.L.jpg",
    description: "A boy's survival story with a Bengal tiger at sea",
    genre: "Adventure",
    isbn: "978-0156027328"
  },
  {
    id: 17,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 375,
    image: "https://images-na.ssl-images-amazon.com/images/P/0307474275.01.L.jpg",
    description: "A mystery thriller involving art, religion, and secrets",
    genre: "Mystery Thriller",
    isbn: "978-0307474278"
  },
  {
    id: 18,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    price: 330,
    image: "https://images-na.ssl-images-amazon.com/images/P/1594633665.01.L.jpg",
    description: "A psychological thriller about obsession and murder",
    genre: "Psychological Thriller",
    isbn: "978-1594633669"
  },
  {
    id: 19,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 360,
    image: "https://images-na.ssl-images-amazon.com/images/P/0307588378.01.L.jpg",
    description: "A dark psychological thriller about a missing wife",
    genre: "Psychological Thriller",
    isbn: "978-0307588371"
  },
  {
    id: 20,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 340,
    image: "https://images-na.ssl-images-amazon.com/images/P/0439023483.01.L.jpg",
    description: "A dystopian novel about survival in a televised death match",
    genre: "Young Adult",
    isbn: "978-0439023481"
  },
  {
    id: 21,
    title: "Twilight",
    author: "Stephenie Meyer",
    price: 310,
    image: "https://images-na.ssl-images-amazon.com/images/P/0316015849.01.L.jpg",
    description: "A vampire romance that captivated millions",
    genre: "Paranormal Romance",
    isbn: "978-0316015844"
  },
  {
    id: 22,
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    price: 290,
    image: "https://images-na.ssl-images-amazon.com/images/P/0064471047.01.L.jpg",
    description: "A magical adventure in the land of Narnia",
    genre: "Fantasy",
    isbn: "978-0064471046"
  },
  {
    id: 23,
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    price: 345,
    image: "https://images-na.ssl-images-amazon.com/images/P/015602943X.01.L.jpg",
    description: "A love story that transcends time",
    genre: "Romance",
    isbn: "978-0156029438"
  },
  {
    id: 24,
    title: "Eat, Pray, Love",
    author: "Elizabeth Gilbert",
    price: 320,
    image: "https://images-na.ssl-images-amazon.com/images/P/014303841X.01.L.jpg",
    description: "A memoir of self-discovery through travel",
    genre: "Memoir",
    isbn: "978-0143038412"
  },
  {
    id: 25,
    title: "The Help",
    author: "Kathryn Stockett",
    price: 365,
    image: "https://images-na.ssl-images-amazon.com/images/P/0425232200.01.L.jpg",
    description: "A story about African American maids in 1960s Mississippi",
    genre: "Historical Fiction",
    isbn: "978-0425232200"
  },
  {
    id: 26,
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 370,
    image: "https://images-na.ssl-images-amazon.com/images/P/0375842209.01.L.jpg",
    description: "A story narrated by Death during World War II",
    genre: "Historical Fiction",
    isbn: "978-0375842207"
  },
  {
    id: 27,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 395,
    image: "https://images-na.ssl-images-amazon.com/images/P/0735219095.01.L.jpg",
    description: "A mystery and coming-of-age story set in the marshlands",
    genre: "Mystery",
    isbn: "978-0735219090"
  },
  {
    id: 28,
    title: "Educated",
    author: "Tara Westover",
    price: 410,
    image: "https://images-na.ssl-images-amazon.com/images/P/0399590501.01.L.jpg",
    description: "A memoir about education and family",
    genre: "Memoir",
    isbn: "978-0399590504"
  },
  {
    id: 29,
    title: "Becoming",
    author: "Michelle Obama",
    price: 425,
    image: "https://images-na.ssl-images-amazon.com/images/P/1524763136.01.L.jpg",
    description: "Former First Lady's inspiring memoir",
    genre: "Biography",
    isbn: "978-1524763138"
  },
  {
    id: 30,
    title: "Atomic Habits",
    author: "James Clear",
    price: 380,
    image: "https://images-na.ssl-images-amazon.com/images/P/0735211299.01.L.jpg",
    description: "An easy & proven way to build good habits & break bad ones",
    genre: "Self-Help",
    isbn: "978-0735211292"
  },
  {
    id: 31,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 335,
    image: "https://images-na.ssl-images-amazon.com/images/P/1501161938.01.L.jpg",
    description: "A reclusive Hollywood icon's life story",
    genre: "Historical Fiction",
    isbn: "978-1501161933"
  },
  {
    id: 32,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    price: 315,
    image: "https://images-na.ssl-images-amazon.com/images/P/1501110365.01.L.jpg",
    description: "A powerful story about love, courage, and resilience",
    genre: "Contemporary Romance",
    isbn: "978-1501110368"
  },
  {
    id: 33,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 350,
    image: "https://images-na.ssl-images-amazon.com/images/P/1250301696.01.L.jpg",
    description: "A psychological thriller about a woman who refuses to speak",
    genre: "Psychological Thriller",
    isbn: "978-1250301697"
  },
  {
    id: 34,
    title: "Normal People",
    author: "Sally Rooney",
    price: 340,
    image: "https://images-na.ssl-images-amazon.com/images/P/1984822187.01.L.jpg",
    description: "A story of friendship and love over the years",
    genre: "Literary Fiction",
    isbn: "978-1984822185"
  },
  {
    id: 35,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 325,
    image: "https://images-na.ssl-images-amazon.com/images/P/0525559477.01.L.jpg",
    description: "A novel about life's infinite possibilities",
    genre: "Fantasy",
    isbn: "978-0525559474"
  },
  {
    id: 36,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    price: 385,
    image: "https://images-na.ssl-images-amazon.com/images/P/0571364888.01.L.jpg",
    description: "A story told from the perspective of an artificial friend",
    genre: "Literary Fiction",
    isbn: "978-0571364886"
  },
  {
    id: 37,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    price: 330,
    image: "https://images-na.ssl-images-amazon.com/images/P/1984880976.01.L.jpg",
    description: "Four unlikely friends investigate cold cases",
    genre: "Mystery",
    isbn: "978-1984880970"
  },
  {
    id: 38,
    title: "Circe",
    author: "Madeline Miller",
    price: 365,
    image: "https://images-na.ssl-images-amazon.com/images/P/0316556343.01.L.jpg",
    description: "A brilliant retelling of Greek mythology",
    genre: "Mythology",
    isbn: "978-0316556347"
  },
  {
    id: 39,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    price: 355,
    image: "https://images-na.ssl-images-amazon.com/images/P/0062060627.01.L.jpg",
    description: "A retelling of the Iliad from Patroclus's perspective",
    genre: "Mythology",
    isbn: "978-0062060624"
  },
  {
    id: 40,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 390,
    image: "https://images-na.ssl-images-amazon.com/images/P/0593135202.01.L.jpg",
    description: "A lone astronaut's mission to save humanity",
    genre: "Science Fiction",
    isbn: "978-0593135204"
  }
];

// GET /api/books
const getBooks = (req, res) => {
  try {
    // Simulate API delay
    setTimeout(() => {
      res.json({
        success: true,
        message: 'Books fetched successfully',
        count: books.length,
        data: books
      });
    }, 500);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// POST /api/order - UPDATED TO SAVE TO DATABASE
const createOrder = async (req, res) => {
  try {
    const { bookId, customerName } = req.body;

    // Validation
    if (!bookId || !customerName) {
      return res.status(400).json({
        success: false,
        message: 'Book ID and customer name are required'
      });
    }

    if (typeof customerName !== 'string' || customerName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Customer name must be at least 2 characters long'
      });
    }

    // Find the book
    const book = books.find(b => b.id === parseInt(bookId));
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

    // Create and save order to database
    const order = new Order({
      orderId: orderId,
      bookId: book.id.toString(), // Convert to string to match your schema
      customerName: customerName.trim(),
      totalAmount: book.price,
      status: 'confirmed'
    });

    // Save to database
    const savedOrder = await order.save();
    console.log('Order saved to database:', savedOrder);

    // Create response object
    const orderDetails = {
      orderId: savedOrder.orderId,
      bookId: book.id,
      bookTitle: book.title,
      bookAuthor: book.author,
      bookPrice: book.price,
      customerName: savedOrder.customerName,
      orderDate: savedOrder.createdAt,
      status: savedOrder.status,
      deliveryEstimate: '3-5 business days',
      paymentMethod: 'Cash on Delivery'
    };

    // Simulate processing time
    setTimeout(() => {
      res.status(201).json({
        success: true,
        message: `Order placed successfully! Your order ID is ${orderId}`,
        data: orderDetails
      });
    }, 1000);

  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = { getBooks, createOrder };