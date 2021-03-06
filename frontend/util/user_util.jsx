export const getUsers = () => (
  $.ajax({
    url: `/api/users`
  })
);

export const getUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`
  })
);

export const patchUser = user => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user },
  })
);

export const filterUsers = query => (
  $.ajax({
    url: "/api/search",
    data: { query }
  })
);