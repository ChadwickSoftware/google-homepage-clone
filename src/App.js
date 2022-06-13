function App() {
  return (
    <div className="App">
      <nav>
        <div className="left-nav">
          <ul>
            <li><a>About</a></li>
            <li><a>Store</a></li>
          </ul>
        </div>
        <div className="right-nav">
          <ul>
            <li><a>Gmail</a></li>
            <li><a>Images</a></li>
            <li><a>Services</a></li>
            <li><a>Profile</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="wrapper-main">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
          <input type="text" />
          <div>
            <a>Google Search</a>
            <a>I'm Feeling Lucky</a>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <p>United Kingdom</p>
        </div>
        <hr />
        <div>
          <div className="left-foot">
            <a>Advertising</a>
            <a>Business</a>
            <a>How Search Works</a>
          </div>
          <div className="right-foot">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Settings</a>
          </div>
          <div className="center-foot">
            <p>Carbon neutral since 2007</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
