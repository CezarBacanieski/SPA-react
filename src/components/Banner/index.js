import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/Untitled.jpeg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, People</h1>

        <p className={styles.paragrafo}>
          Iniciei minha jornada há um ano, focando no desenvolvimento fullstack
          com ênfase no backend. Realizei diversos freelances, inicialmente
          gratuitos e depois remunerados, para aprimorar minhas habilidades e
          construir experiência prática. Estudando Engenharia de Software na
          FIAP, sou reconhecido por minha proatividade, curiosidade e
          compromisso contínuo com aprendizado.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt='circulo colorido'
        />

        <img className={styles.minhaFoto} src={minhaFoto} alt='minha foto' />
      </div>
    </div>
  );
}
