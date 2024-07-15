import BotaoPrincipal from 'components/BotaoPrincipal';
import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro-404-1024x684.webp';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
  const navegar = useNavigate();
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Acho que veio parar no lugar errado. Espere alguns instante e tente
          recarregar a página, caso não funcionar volte a tela inicial!!
        </p>

        <div className={styles.botaoContainer} onClick={() => navegar('/')}>
          <BotaoPrincipal tamanho='lg'>Voltar</BotaoPrincipal>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt='img de erro'
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
