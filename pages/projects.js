import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Projects() {
  return (
    <section>
      <h2 className={styles.title}>Projects</h2>
    </section>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
