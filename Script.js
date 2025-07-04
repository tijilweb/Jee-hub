// Enhanced Book Data with Tijil attribution
const bookData = {
    physics: [
        {
            title: "HC Verma Questions & Solutions",
            description: "Complete problem set with detailed solutions from Concepts of Physics",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1zi5sSNh2v0wF2O6Nx4JG6H84BsF1kgNP",
            contributor: "Tijil"
        },
        {
            title: "Lakshya JEE Physics Modules",
            description: "Comprehensive physics modules covering all JEE topics",
            cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/3/0/physics-lakshya-jee-module-original-imagg9j4zzgyhghz.jpeg",
            link: "https://drive.google.com/drive/folders/1nGQxpBzgKn9OrtTP6Hhp-qaG9x1xR_-O",
            contributor: "Tijil"
        },
        {
            title: "Arjuna JEE Physics Modules",
            description: "Detailed physics study material for advanced preparation",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5"
        },
        {
            title: "PW Physics Mindmaps",
            description: "Visual learning aids for quick revision of key concepts",
            cover: "https://i.ytimg.com/vi/6xWsD4wX4dQ/maxresdefault.jpg",
            link: "https://drive.google.com/drive/folders/1yBNmYoPAeBBe3zJkAq20FnCJXWStm-f6",
            contributor: "Tijil"
        }
    ],
    chemistry: [
        {
            title: "Complete Chemistry Resources",
            description: "Collection of Physical, Organic and Inorganic Chemistry materials",
            cover: "https://m.media-amazon.com/images/I/71Kilyv-5rL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1z2jTRdsdriWMYCVLmT0e4pS2qI1PbkeC",
            contributor: "Tijil"
        },
        {
            title: "Lakshya JEE Chemistry Modules",
            description: "Structured chemistry modules for systematic preparation",
            cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/3/0/chemistry-lakshya-jee-module-original-imagg9j4zzgyhghz.jpeg",
            link: "https://drive.google.com/drive/folders/1nGQxpBzgKn9OrtTP6Hhp-qaG9x1xR_-O"
        },
        {
            title: "Prayas JEE Chemistry Modules",
            description: "Practice-oriented chemistry study material",
            cover: "https://m.media-amazon.com/images/I/71Kilyv-5rL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1yPIRL9I_0zlaZjQTPS48Q_jEpJECEzl"
        }
    ],
    math: [
        {
            title: "Lakshya JEE Mathematics Modules",
            description: "Complete math modules with practice problems",
            cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/3/0/mathematics-lakshya-jee-module-original-imagg9j4zzgyhghz.jpeg",
            link: "https://drive.google.com/drive/folders/1nGQxpBzgKn9OrtTP6Hhp-qaG9x1xR_-O",
            contributor: "Tijil"
        },
        {
            title: "Arjuna JEE Maths Modules",
            description: "Advanced mathematics problems with solutions",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5"
        },
        {
            title: "Prayas JEE Maths Modules",
            description: "Conceptual mathematics study material",
            cover: "https://m.media-amazon.com/images/I/71QZ6ajVYBL._AC_UF1000,1000_QL80_.jpg",
            link: "https://drive.google.com/drive/folders/1yPIRL9I_0zlaZjQTPS48Q_jEpJECEzl"
        }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load books for each subject
    loadBooks('physicsBooks', bookData.physics);
    loadBooks('chemistryBooks', bookData.chemistry);
    loadBooks('mathBooks', bookData.math);

    // Set up search functionality
    document.getElementById('searchButton').addEventListener('click', searchBooks);
    document.getElementById('searchInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') searchBooks();
    });

    // Set up AI chat
    document.getElementById('sendButton').addEventListener('click', sendMessage);
    document.getElementById('userInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
});

// Load books into a section
function loadBooks(sectionId, books) {
    const container = document.getElementById(sectionId);
    container.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'col-md-6 col-lg-4';
        
        let contributorBadge = '';
        if (book.contributor) {
            contributorBadge = `<div class="contributor-badge">Contributed by ${book.contributor}</div>`;
        }
        
        bookCard.innerHTML = `
            <div class="card book-card h-100">
                <div class="position-relative">
                    <img src="${book.cover}" class="card-img-top book-cover" alt="${book.title}">
                    ${contributorBadge}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.description}</p>
                    <a href="${book.link}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt me-1"></i> Access Resources
                    </a>
                </div>
            </div>
        `;
        container.appendChild(bookCard);
    });
}

// Search functionality
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    ['physics', 'chemistry', 'math'].forEach(subject => {
        const filteredBooks = bookData[subject].filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.description.toLowerCase().includes(searchTerm)
        );
        loadBooks(`${subject}Books`, filteredBooks);
    });
}

// Enhanced AI Doubt Solver
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    
    // Show loading indicator
    const loadingId = addMessage('Thinking...', 'ai', true);
    document.getElementById('aiStatus').className = 'badge bg-warning';
    document.getElementById('aiStatus').textContent = 'AI Thinking';
    
    try {
        // Get AI response (simulated or real API)
        const aiResponse = await getAIResponse(message);
        
        // Replace loading message with actual response
        updateMessage(loadingId, aiResponse, 'ai');
        document.getElementById('aiStatus').className = 'badge bg-success';
        document.getElementById('aiStatus').textContent = 'AI Ready';
    } catch (error) {
        updateMessage(loadingId, "Sorry, I'm experiencing technical difficulties. Please try again later.", 'ai');
        document.getElementById('aiStatus').className = 'badge bg-danger';
        document.getElementById('aiStatus').textContent = 'AI Error';
    }
}

// Add message to chat
function addMessage(text, sender, isLoading = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageId = 'msg-' + Date.now();
    
    const messageDiv = document.createElement('div');
    messageDiv.id = messageId;
    messageDiv.className = `${sender}-message p-3 mb-2`;
    
    if (isLoading) {
        messageDiv.innerHTML = `<strong>JEE AI:</strong> <span class="loading-dots">${text}</span>`;
    } else {
        messageDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'JEE AI'}:</strong> ${marked.parse(text)}`;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageId;
}

// Update existing message
function updateMessage(id, text, sender) {
    const messageDiv = document.getElementById(id);
    if (messageDiv) {
        messageDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'JEE AI'}:</strong> ${marked.parse(text)}`;
    }
}

// Advanced AI Response System
async function getAIResponse(message) {
    // In a real implementation, connect to OpenAI API or similar
    // This is an enhanced simulation with JEE-specific knowledge
    
    const lowerMessage = message.toLowerCase();
    
    // Physics responses
    if (lowerMessage.includes('physics') || 
        lowerMessage.includes('mechanic') || 
        lowerMessage.includes('electrodynamic') ||
        lowerMessage.includes('thermodynamic') ||
        lowerMessage.includes('optics')) {
        
        if (lowerMessage.includes('newton') || lowerMessage.includes('law')) {
            return explainNewtonLaws();
        } else if (lowerMessage.includes('kirchhoff') || lowerMessage.includes('circuit')) {
            return explainKirchhoffLaws();
        } else if (lowerMessage.includes('thermodynamic') || lowerMessage.includes('heat')) {
            return explainThermodynamics();
        } else {
            return physicsGeneralResponse();
        }
    }
    
    // Chemistry responses
    else if (lowerMessage.includes('chem') || 
             lowerMessage.includes('organic') || 
             lowerMessage.includes('inorganic') ||
             lowerMessage.includes('physical')) {
        
        if (lowerMessage.includes('organic') || lowerMessage.includes('reaction')) {
            return explainOrganicChemistry();
        } else if (lowerMessage.includes('mole concept') || lowerMessage.includes('stoichiometry')) {
            return explainMoleConcept();
        } else {
            return chemistryGeneralResponse();
        }
    }
    
    // Math responses
    else if (lowerMessage.includes('math') || 
             lowerMessage.includes('calculus') || 
             lowerMessage.includes('algebra') ||
             lowerMessage.includes('trigonometry') ||
             lowerMessage.includes('geometry')) {
        
        if (lowerMessage.includes('integral') || lowerMessage.includes('∫')) {
            return solveIntegrationProblem(message);
        } else if (lowerMessage.includes('differentiat') || lowerMessage.includes('derivative')) {
            return solveDifferentiationProblem(message);
        } else {
            return mathGeneralResponse();
        }
    }
    
    // General study advice
    else if (lowerMessage.includes('study') || 
             lowerMessage.includes('prepare') || 
             lowerMessage.includes('plan')) {
        return provideStudyTips();
    }
    
    // Default response
    return defaultAIResponse();
}

// Physics Knowledge Base
function explainNewtonLaws() {
    return `**Newton's Laws of Motion** are fundamental to physics:
    
1. **First Law (Inertia):** An object remains at rest or in uniform motion unless acted upon by a force.
2. **Second Law (F=ma):** Force equals mass times acceleration.
3. **Third Law (Action-Reaction):** For every action, there's an equal and opposite reaction.

*Tip:* Practice problems from HC Verma's Chapter 5 for application questions. Would you like example problems?`;
}

function explainKirchhoffLaws() {
    return `**Kirchhoff's Circuit Laws** are essential for solving electrical networks:
    
- **Junction Rule (Current Law):** The sum of currents entering a junction equals the sum leaving it.
- **Loop Rule (Voltage Law):** The sum of potential differences around any closed loop is zero.

*Practice:* Try solving problems with 2-3 loops using these laws. Need a sample problem?`;
}

// Chemistry Knowledge Base
function explainOrganicChemistry() {
    return `**Organic Chemistry** focuses on carbon compounds. Key concepts:
    
- **Reaction Mechanisms:** SN1, SN2, E1, E2
- **Functional Groups:** Alcohols, Aldehydes, Ketones, etc.
- **Name Reactions:** Wurtz, Friedel-Crafts, Cannizzaro

*Study Tip:* Create reaction maps for better retention. Want me to explain a specific reaction?`;
}

// Math Knowledge Base
function solveIntegrationProblem(question) {
    if (question.includes('x²') || question.includes('x^2')) {
        return `The integral ∫x²dx = (x³)/3 + C (where C is the constant of integration). 

*Derivation:*
1. Increase the power by 1: x² → x³
2. Divide by the new power: x³/3
3. Add the constant C

Would you like more complex examples?`;
    } else if (question.includes('sin') || question.includes('cos')) {
        return `Trigonometric integrals:
        
- ∫sin(x)dx = -cos(x) + C
- ∫cos(x)dx = sin(x) + C

*Tip:* For ∫sin²(x)dx or similar, use trigonometric identities first. Need help with a specific integral?`;
    } else {
        return "I can help solve integration problems. Could you specify the function you need to integrate? For example: 'How to integrate e^x?'";
    }
}

// General Responses
function provideStudyTips() {
    return `**Effective JEE Preparation Tips:**
    
1. **Concept Clarity:** Focus on NCERT first, then move to advanced books.
2. **Problem Solving:** Daily practice of 30-50 quality problems.
3. **Time Management:** Allocate time as Physics (40%), Chemistry (30%), Math (30%).
4. **Revision:** Weekly revision of formulas and concepts.
5. **Mock Tests:** Take full-length tests every weekend.

Would you like a subject-specific study plan?`;
}

function defaultAIResponse() {
    return `I'm your JEE preparation assistant. I can help with:
    
- **Concept Explanations** (e.g., "Explain Gauss's law")
- **Problem Solving** (e.g., "Solve ∫e^x dx")
- **Study Strategies** (e.g., "How to improve Organic Chemistry?")
- **Resource Recommendations**

Please ask your question more specifically for the best help!`;
}