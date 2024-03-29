document.querySelector('.form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const neededFunding = document.getElementById('needed_funding').value;

  const data = {
    name: name,
    description: description,
    needed_funding: neededFunding,
  };

  try {
    const response = await fetch('/api/projects/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Handle successful response data
      window.location.reload();
    } else {
      const errorData = await response.json();
      console.error('Error:', errorData);
    }
  } catch (error) {
    console.log(error);
  }
});
