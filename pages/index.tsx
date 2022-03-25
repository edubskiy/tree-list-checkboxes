import type { NextPage } from 'next';
import Head from 'next/head';
import { CheckboxItemState } from '../components/checkbox-list/checkbox-list.types';
import { CheckboxState } from '../components/checkbox/checkbox.types';
import { Menu } from '../components/menu/menu.styles';
import { Tree } from '../components/tree/tree.component';
import { checkboxListItems } from '../components/tree/tree.data';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const checkboxState: CheckboxItemState[] = checkboxListItems.map((i) => ({
    id: i.id,
    state: CheckboxState.CHECKED,
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>Tree List with Checkboxes</title>
        <meta name='description' content='My super app review form' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Menu>
          <Tree
            checkboxItems={checkboxListItems}
            checkboxState={checkboxState}
          />
        </Menu>
      </main>
    </div>
  );
};

export default Home;
