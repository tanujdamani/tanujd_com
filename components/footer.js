import { FaGithub, FaTwitter } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="https://twitter.com/tanujdamani" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/tanujdamani" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
