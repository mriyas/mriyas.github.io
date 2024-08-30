// Fetch the blogs from the JSON file
fetch('blogs.json')
    .then(response => response.json())
    .then(blogs => {
        const blogList = document.getElementById('blog-list');

        blogs.forEach(blog => {
            // Create a blog card element
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';

            // Add an event listener to open the link in a new tab
            blogCard.addEventListener('click', () => {
                window.open(blog.link, '_blank');
            });

            // Blog image
            const blogImage = document.createElement('img');
            blogImage.src = blog.image;
            blogImage.className = 'blog-image';

            // Blog content container
            const blogContent = document.createElement('div');
            blogContent.className = 'blog-content';

            // Blog title
            const blogTitle = document.createElement('h2');
            blogTitle.className = 'blog-title';
            blogTitle.textContent = blog.title;

            // Blog description
            const blogDescription = document.createElement('p');
            blogDescription.className = 'blog-description';
            blogDescription.textContent = blog.description;

            // Append elements to the blog card
            blogContent.appendChild(blogTitle);
            blogContent.appendChild(blogDescription);
            blogCard.appendChild(blogImage);
            blogCard.appendChild(blogContent);

            // Append the blog card to the blog list
            blogList.appendChild(blogCard);
        });
    })
    .catch(error => console.error('Error fetching the blogs:', error));
