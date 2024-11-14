import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Typescript</Link>
        </li>
        <li>
          <Link to="/docs">demo</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">performance</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
