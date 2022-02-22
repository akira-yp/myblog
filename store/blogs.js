export const state = () => ({
  posts: []
})

export const getters = {
  posts: state => state.posts
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = [...posts]
  }
}

export const actions = {

}
