import Link from "next/link";
import { FaSign, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import styles from "@/styles/Header.module.css";
import Search from "./Search";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

export default function Header() {
  const { logout, user } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            <>
              {" "}
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/accounts/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt />
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
