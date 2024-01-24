import menu from "../../assets/icon-menu.svg";
import cart from "../../assets/icon-cart.svg";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.png";

export default function Navbar(props) {
  return (
    <div>
      <nav className="w-screen h-20 bg-white">
        <div className="container flex flex-row justify-between items-center h-full w-full p-5 ml-10 mr-10">
          <div className="left flex flex-row gap-5">
            <img src={menu} className="lg:hidden" />
            <img src={logo} className="bg-white h-8" />
            <div
              className="btn-group flex justify-center gap-4"
              style={{ color: "black" }}
            >
              <button>Collections</button>
              <button>Men</button>
              <button>Women</button>
              <button>About</button>
              <button>Contract</button>
            </div>
          </div>
          <div className="right flex flex-row gap-6">
            <img src={cart} />
            <img src={avatar} className="h-10" />
          </div>
        </div>
      </nav>
      <main
        style={{ height: `calc(100vh - 80px)` }}
        className="flex row bg-white"
      >
        {props.children}
      </main>
    </div>
  );
}
