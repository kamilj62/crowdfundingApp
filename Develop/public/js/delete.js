const deleteButtons = document.querySelectorAll('#delete-button');

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', async function () {
    const projectId = deleteButton.Project.id;
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Project deleted successfully');
        // Optionally, remove the project from the UI
        deleteButton.closest('tr').remove();
      } else {
        throw new Error('Error deleting project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  });
});
