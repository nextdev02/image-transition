import styles from './page.module.scss'
import { projects } from '../data';
import Image from 'next/image';
import Double from '../components/double';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello There, This is a Next JS Image Taransition Project. This effect is cool for showcase Your Projet Showcase</h1>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[6], projects[7]]} reversed={true}/>
      </div>
    </main>
  )
}