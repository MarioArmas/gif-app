import { API_KEY, API_URL } from 'services/settings'

export default function getGifs({ keyword = 'panda', limit = 5, page = 0 } = {}) {
  const rating = "g"
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      console.log(apiURL)
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { url, title, id }
      })
      return gifs
    })
}
