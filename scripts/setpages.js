export default function PageSetUp({ homeLink, universeLink, explorationLink }) {
  /*  EVENTOS */

  homeLink.addEventListener('click', function () {
    setPage()
  })

  universeLink.addEventListener('click', function () {
    setPage()
  })

  explorationLink.addEventListener('click', function () {
    setPage()
  })

  function highLight(element) {
    element.classList.add('selected')
  }

  function highLightReset() {
    homeLink.classList.remove('selected')
    universeLink.classList.remove('selected')
    explorationLink.classList.remove('selected')
  }

  function setPage() {
    if (window.location.pathname === '/') {
      highLightReset()
      highLight(homeLink)
      console.log('Home')
      return
    } else if (window.location.pathname === '/universe') {
      highLightReset()
      highLight(universeLink)
      console.log('Universe')
      return
    } else if (window.location.pathname === '/exploration') {
      highLightReset()
      highLight(explorationLink)
      console.log('Exploration')
      return
    } else {
      highLightReset()
      return
    }
  }

  return {
    setPage
  }
}
