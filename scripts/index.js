import { Router } from './router.js'

import PageSetUp from './setpages.js'

import { homeLink, universeLink, explorationLink } from './elements.js'

const pageSetUp = PageSetUp({
  homeLink,
  universeLink,
  explorationLink
})

const router = new Router()

/* 
// Mapeando as rotas com as páginas (arquivos HTML)

const routes = {
  '/': './pages/home.html',
  '/universe': './pages/universe.html',
  '/exploration': './pages/exploration.html',
  404: './pages/404.html'
} 
*/

// Melhorando sintaxe -> Mapeamento das rotas
router.add('/', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/exploration', './pages/exploration.html')
router.add(404, './pages/404.html')

/*
handle()

window.onpopstate = () => handle()

window.route = () => route()
 */

// Referenciando os métodos do objeto Router

router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route()

pageSetUp.setPage()
