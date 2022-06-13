export default function Navbar() {
    return (
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
    );
}