import Image from "next/image";
import styles from "./sidebar.module.scss";
import { Button } from "@/ui/button/button";
import { Menu, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <section>
        {/* <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
        <nav>
            <ul></ul>
            <ul></ul>
            <Button> </Button>
        </nav> */}
        <nav className={styles.nav}>
          <Button variant="primary" size="medium" border={true}>
            <Menu size={22} />
          </Button>
          <Image src="/logo.png" alt="Logo" width={42} height={42} />
          <Button variant="primary" size="medium" border={true}>
            <User size={22} />
          </Button>
        </nav>
        {/*<Image src="/footer.jpeg" alt="Profile" width={50} height={50} />*/}
      </section>
    </aside>
  );
}
