import styles from './SobreMim.module.css';
import PostModelo from 'components/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/foto-gates.jpeg';

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo='Sobre mim'>
      <h3 className={styles.subtitulo}>Olá, sou o Cezar!</h3>
      <img
        src={fotoSobreMim}
        alt='foto sobre mim'
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Olá! Meu nome é Cezar, tenho 18 anos e sou estudante de Engenharia de
        Software na FIAP. Minha paixão por tecnologia e desenvolvimento me levou
        a seguir uma carreira como desenvolvedor full-stack, onde trabalho
        constantemente em diversos projetos como freelancer. Minha jornada na
        programação começou cedo e, ao longo dos anos, tenho me dedicado
        intensamente ao aperfeiçoamento das minhas habilidades técnicas.
      </p>
       
      <p className={styles.paragrafo}>
        Na minha rotina, sou bastante disciplinado e gosto de manter um
        equilíbrio entre o trabalho e o desenvolvimento pessoal. Sou ávido
        leitor e sempre procuro me aprofundar em livros sobre finanças,
        autoajuda e programação. Acredito que esses conhecimentos são essenciais
        não apenas para o crescimento profissional, mas também para o
        desenvolvimento de uma mentalidade forte e resiliente.
      </p>

      <p className={styles.paragrafo}>
        Além dos estudos e do trabalho, mantenho uma rotina saudável de
        exercícios físicos. Vou regularmente à academia e sou praticante de
        jiu-jitsu, o que me ajuda a manter a mente e o corpo em harmonia.
        Acredito que a prática de esportes é fundamental para manter o foco e a
        disciplina em todas as áreas da vida.
      </p>

      <p className={styles.paragrafo}>
        Minha linguagem de programação principal é o JavaScript, com um foco
        especial no desenvolvimento backend utilizando Node.js. Para construir
        APIs robustas e eficientes, uso o Express em conjunto com Node.js.
        Quando se trata de banco de dados, tenho experiência com MongoDB, um
        banco de dados não relacional, e utilizo o Mongoose como ORM para
        facilitar a manipulação de dados. No contexto de bancos de dados
        relacionais, sou familiarizado com SQLite e uso o Sequelize como ORM.
      </p>
      <p className={styles.paragrafo}>
        Sou avançado em inglês, um idioma que estudo diariamente para aprimorar
        minhas habilidades de comunicação e leitura técnica. A fluência em
        inglês é uma ferramenta essencial para o meu crescimento profissional,
        permitindo-me acessar uma vasta quantidade de recursos e colaborar com
        profissionais de todo o mundo. Da mesma forma, estudo programação
        diariamente, sempre buscando novas tecnologias e aprimorando minhas
        competências para me tornar um engenheiro de software full-stack
        altamente qualificado.
      </p>
      <p className={styles.paragrafo}>
        No front-end, trabalho com HTML, CSS e React. Inclusive, o site que você
        está lendo agora é um modelo de SPA (Single Page Application)
        desenvolvido com React. Gosto de criar interfaces de usuário modernas e
        responsivas, que proporcionam uma experiência agradável e intuitiva para
        os usuários.
      </p>
      <p className={styles.paragrafo}>
        Minha grande meta é conseguir um emprego no exterior, onde possa ganhar
        em uma moeda forte e ter a liberdade geográfica para viajar e trabalhar
        de onde eu quiser. Quero ser capaz de contribuir para uma empresa de
        qualquer lugar do mundo, utilizando minhas habilidades para resolver
        problemas complexos e criar soluções inovadoras. Acredito que o trabalho
        remoto é o futuro e estou determinado a alcançar esse estilo de vida,
        onde posso equilibrar minhas paixões e minha carreira de maneira
        harmoniosa.
      </p>
      <p className={styles.paragrafo}>
        Obrigado por ler um pouco sobre mim. Estou sempre aberto a novas
        oportunidades e desafios que me permitam crescer e contribuir para o
        mundo da tecnologia.
      </p>
    </PostModelo>
  );
}
