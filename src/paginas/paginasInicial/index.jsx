import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/Menu";
import banner from "./banner.png";
import styles from "./PaginaInicial.module.scss";
import Rodape from "../../components/Rodape";
import Galeria from "../../components/Galeria"

export default function PaginaInicial(){
    return(
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
            <Menu/>
            <div className={styles.principal__imagem}>
                <h1>A galeria mais completa do espaço</h1>
                <img src={banner} alt="A imagem da terra vista do espaço" />
            </div>
            </section>

        </main>
        <div>
            <Galeria/>
        </div>
        <Rodape />
        </>
    )
}