import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
