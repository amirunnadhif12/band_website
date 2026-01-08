document.addEventListener('DOMContentLoaded', function(){
    // Tour card reveal animation on scroll
    const tourCards = document.querySelectorAll('.tour-img-card');
    
    if('IntersectionObserver' in window){
        const cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, idx) => {
                if(entry.isIntersecting){
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, idx * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold:0.15});
        
        tourCards.forEach(card => cardObserver.observe(card));
    } else {
        tourCards.forEach(card => card.classList.add('visible'));
    }

    // Modal functionality
    var buyTicket = document.getElementsByClassName("tour-button");
    var modal = document.getElementById("modal");
    var modalClose = document.getElementsByClassName("modal-close-button");
    
    for(i=0;i<buyTicket.length;i++){
        buyTicket[i].addEventListener("click",()=>{
            modal.style.display="block";
            modal.style.animation = "slideDown 0.5s ease";
        })
    }

    for(i=0;i<modalClose.length;i++){
        modalClose[i].addEventListener("click",()=>{
            modal.style.display="none";
        })
    }
    
    // Search functionality
    document.querySelector('.search').addEventListener('click', function(event) {
        const searchContainer = document.getElementById('search-container');
        const searchInput = document.getElementById('search-input');
        
        event.stopPropagation();

        searchContainer.classList.toggle('active');
        searchInput.classList.toggle('active');

        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    document.addEventListener('click', function(event) {
        const searchContainer = document.getElementById('search-container');
        const searchInput = document.getElementById('search-input');

        if (!searchContainer.contains(event.target) && searchInput.classList.contains('active')) {
            searchContainer.classList.remove('active');
            searchInput.classList.remove('active');
        }
    });

    function highlightText(searchTerm) {
        const elementsToSearch = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div, span, li');

        const searchRegex = new RegExp(`(${searchTerm})`, 'gi');

        elementsToSearch.forEach(element => {
            const innerHTML = element.innerHTML;

            const highlightedHTML = innerHTML.replace(searchRegex, '<span class="highlight">$1</span>');
            
            element.innerHTML = highlightedHTML;
        });
    }

    document.getElementById('search-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = event.target.value.trim();
            if (searchTerm) {
                highlightText(searchTerm);
            }
        }
    });
});