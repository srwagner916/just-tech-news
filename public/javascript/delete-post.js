async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString.split('/') - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });

  if(response.ok) {
    document.location.replaced('/dashboard/')
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);