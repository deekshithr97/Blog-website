// Article content database
const articleContent = {
    article1: {
        title: "The Rise of Artificial Intelligence in Healthcare",
        image: "https://aihms.in/blog/wp-content/uploads/2020/05/ai1.jpg",
        author: "Dr. Sarah Johnson",
        date: "April 10, 2024",
        content: `
            <p>Recent breakthroughs in AI technology are revolutionizing healthcare diagnostics. Machine learning algorithms are now capable of detecting diseases with 95% accuracy, potentially saving millions of lives worldwide.</p>
            
            <h3>Impact on Medical Diagnosis</h3>
            <p>Artificial Intelligence systems are being deployed in hospitals globally, transforming several key areas:</p>
            <ul>
                <li>Early detection of cancers through advanced image analysis</li>
                <li>Prediction of patient outcomes based on comprehensive medical history</li>
                <li>Optimization of treatment plans using data-driven approaches</li>
                <li>Acceleration of drug discovery and development processes</li>
            </ul>

            <h3>Key Benefits</h3>
            <p>The integration of AI in healthcare has shown remarkable benefits:</p>
            <ul>
                <li>Reduced diagnostic errors by up to 85%</li>
                <li>Decreased waiting times for test results</li>
                <li>Improved patient monitoring systems</li>
                <li>Enhanced accessibility to healthcare services</li>
            </ul>

            <h3>Future Prospects</h3>
            <p>Experts predict that by 2025, AI will be involved in:</p>
            <ul>
                <li>80% of routine medical diagnostics</li>
                <li>Personalized medicine recommendations</li>
                <li>Real-time patient monitoring systems</li>
                <li>Automated medical documentation</li>
            </ul>

            <p>This technological revolution in healthcare promises to improve patient outcomes while reducing costs and medical errors, making quality healthcare more accessible to people worldwide.</p>
        `
    },
    article2: {
        title: "Global Efforts to Combat Climate Change Intensify",
        image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51",
        author: "Michael Chen",
        date: "April 9, 2024",
        content: `
            <p>World leaders gathered at the Climate Summit 2024 have pledged to reduce carbon emissions by 50% by 2030. New renewable energy initiatives and sustainable development projects are at the forefront of this ambitious plan.</p>

            <h3>Key Summit Outcomes</h3>
            <ul>
                <li>Global commitment to carbon neutrality by 2050</li>
                <li>$100 billion annual fund for developing nations</li>
                <li>Implementation of carbon pricing mechanisms</li>
                <li>Investment in renewable energy infrastructure</li>
            </ul>

            <h3>Innovative Solutions</h3>
            <p>Countries are adopting various approaches to meet these targets:</p>
            <ul>
                <li>Mass deployment of solar and wind farms</li>
                <li>Development of green hydrogen technology</li>
                <li>Electric vehicle infrastructure expansion</li>
                <li>Carbon capture and storage facilities</li>
            </ul>

            <p>These initiatives represent a significant step forward in the global fight against climate change, with unprecedented cooperation between nations.</p>
        `
    },
    article3: {
        title: "NASA's New Mars Mission Reveals Groundbreaking Discovery",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9",
        author: "Alex Rivera",
        date: "April 8, 2024",
        content: `
            <p>The latest Mars rover has detected traces of organic compounds that could indicate past microbial life. Scientists are calling this discovery a potential turning point in our understanding of extraterrestrial life.</p>

            <h3>Key Findings</h3>
            <ul>
                <li>Complex organic molecules in Martian soil</li>
                <li>Evidence of ancient water systems</li>
                <li>Unusual atmospheric compositions</li>
                <li>Potential biosignatures in rock formations</li>
            </ul>

            <h3>Implications for Space Exploration</h3>
            <p>This discovery has significant implications for:</p>
            <ul>
                <li>Future Mars colonization plans</li>
                <li>Search for life in our solar system</li>
                <li>Understanding of life's origins</li>
                <li>Development of space exploration technology</li>
            </ul>
        `
    },
    article4: {
        title: "Revolutionary Quantum Computing Breakthrough",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
        author: "Dr. James Wilson",
        date: "April 7, 2024",
        content: `
            <p>Scientists have achieved quantum supremacy with a new 1000-qubit processor. This breakthrough could transform fields from cryptography to drug discovery, marking a new era in computing technology.</p>

            <h3>Technical Achievements</h3>
            <ul>
                <li>1000-qubit quantum processor development</li>
                <li>Enhanced error correction systems</li>
                <li>Room temperature quantum operations</li>
                <li>Improved quantum coherence time</li>
            </ul>

            <h3>Applications</h3>
            <p>This breakthrough will impact multiple fields:</p>
            <ul>
                <li>Cryptography and security</li>
                <li>Drug discovery and development</li>
                <li>Climate modeling</li>
                <li>Financial modeling and optimization</li>
            </ul>
        `
    },
    article5: {
        title: "Electric Vehicle Market Sees Unprecedented Growth",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
        author: "Emma Thompson",
        date: "April 6, 2024",
        content: `
            <p>Global electric vehicle sales have surged by 200% in the first quarter of 2024. Major automakers are ramping up production as consumer demand for sustainable transportation reaches new heights.</p>

            <h3>Market Trends</h3>
            <ul>
                <li>200% increase in global EV sales</li>
                <li>Major investments in charging infrastructure</li>
                <li>New battery technology developments</li>
                <li>Decreasing production costs</li>
            </ul>

            <h3>Consumer Benefits</h3>
            <p>EV adoption is being driven by:</p>
            <ul>
                <li>Lower maintenance costs</li>
                <li>Improved battery range</li>
                <li>Government incentives</li>
                <li>Environmental consciousness</li>
            </ul>
        `
    },
    article6: {
        title: "Breakthrough in Renewable Energy Storage",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
        author: "Dr. Lisa Chen",
        date: "April 5, 2024",
        content: `
            <p>Researchers have developed a new type of battery that can store renewable energy for months at a fraction of the current cost. This innovation could be the key to achieving 100% renewable energy adoption.</p>

            <h3>Technical Innovation</h3>
            <ul>
                <li>Novel battery chemistry</li>
                <li>Extended storage capacity</li>
                <li>Reduced production costs</li>
                <li>Environmentally friendly materials</li>
            </ul>

            <h3>Impact on Renewable Energy</h3>
            <p>This breakthrough will enable:</p>
            <ul>
                <li>Year-round solar energy utilization</li>
                <li>Grid stability improvement</li>
                <li>Reduced energy costs</li>
                <li>Accelerated renewable adoption</li>
            </ul>
        `
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('articleModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Add click event to all "Read More" buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const articleId = this.getAttribute('data-article');
            const article = articleContent[articleId];
            
            if (article) {
                modalContent.innerHTML = `
                    <img src="${article.image}" alt="${article.title}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px;">
                    <h2>${article.title}</h2>
                    <div class="article-meta">
                        <span><i class="far fa-calendar"></i> ${article.date}</span>
                        <span><i class="far fa-user"></i> ${article.author}</span>
                    </div>
                    <div class="article-body">
                        ${article.content}
                    </div>
                `;
                modal.style.display = "block";
            }
        });
    });

    // Close modal when clicking (X)
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}); 