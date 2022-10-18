export class Router {
  // Modelando as rotas

  routes = {} // registrando as rotas aqui como objeto

  // referenciando propriedade e valor do objeto routes
  add(routeName, pageLink) {
    this.routes[routeName] = pageLink
  }

  route(event) {
    event = event || window.event
    // Previnido o redirecionamento padrão
    event.preventDefault()

    //mudando o pathname de acordo com a rota
    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location

    const route = this.routes[pathname] || this.routes[404]

    // Buscando o HTML das páginas e apresentando
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }
}
