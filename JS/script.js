// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });
    
    // Load featured items (simulated)
    loadFeaturedItems();
});

function loadFeaturedItems() {
    const featuredGrid = document.querySelector('.featured-grid');
    
    // In a real implementation, you would fetch this data from an API
    const featuredItems = [
        { name: 'Crystal Jewelry Box', price: '$49.99', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { name: 'Personalized Keepsake', price: '$39.99', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { name: 'Luxury Silk Scarf', price: '$59.99', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { name: 'Royal Perfume Set', price: '$79.99', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
    ];
    
    featuredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'featured-item';
        itemElement.innerHTML = `
            <div class="featured-item-img" style="background-image: url('${item.image}')"></div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <a href="#" class="btn">View Details</a>
        `;
        featuredGrid.appendChild(itemElement);
    });
    
    // Add styles for featured items
    const style = document.createElement('style');
    style.textContent = `
        .featured-item {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
            padding-bottom: 20px;
        }
        
        .featured-item:hover {
            transform: translateY(-10px);
        }
        
        .featured-item-img {
            height: 200px;
            background-size: cover;
            background-position: center;
            margin-bottom: 20px;
        }
        
        .featured-item h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: var(--secondary-color);
        }
        
        .featured-item p {
            font-weight: 600;
            margin-bottom: 15px;
            color: var(--primary-color);
        }
        
        .featured-item .btn {
            padding: 8px 20px;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);
}