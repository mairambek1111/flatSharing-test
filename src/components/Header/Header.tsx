import styles from "./header.module.scss";
import Image from "next/image";
import logoIcon from "../../assets/logo.svg";
import Link from "next/link";
function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imgwrap}>
            <Image src={logoIcon} alt="" />
          </div>
          <nav className={styles.navs}>
            <Link href="/" className={styles.navlink}>
              How it works
            </Link>
            <Link href="/" className={styles.navlink}>
              Browse apartments
            </Link>
            <Link href="/" className={styles.navlink}>
              Cost
            </Link>
          </nav>

          <div className={styles.btns}>
            <button className={styles.signin}>Sign In</button>
            <button className={styles.join}>Join Now</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
