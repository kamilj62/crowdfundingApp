const deleteButtons = document.querySelectorAll('#delete-button');

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', async function () {
    const projectId = deleteButton.getAttribute('data-id');
    console.log(projectId);
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      });
      console.log(response);
      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error('Error deleting project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  });
});
