import routes from './routes.js'

const router = path => {
    window.history.pushState({}, '', path)
  
    routes.forEach(route => {
        if(route.path === path) document.getElementById('root').innerHTML = route.template
    })
}
export default router

