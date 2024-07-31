export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;
  const upComingMovieUrl = "https://api.themoviedb.org/3/movie/upcoming";

  const upcomingMovies = await $fetch(upComingMovieUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  });

  return { upcomingMovies };
});
