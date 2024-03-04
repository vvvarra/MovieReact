function Footer(){
    return <footer className="page-footer
    #00897b teal darken-1">
    <div className="footer-copyright">
      <div className="container">
        © {new Date().getFullYear()}
        Varvara Khmeleva
        <a className="grey-text
        text-lighten-4 right" href="#!">Repository</a>
      </div>
    </div>
  </footer>
}

export { Footer };