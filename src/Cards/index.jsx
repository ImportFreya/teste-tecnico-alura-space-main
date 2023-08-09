import React from "react";
import open from "../../src/assets/open.png"
import favorito from "../../src/assets/favorito.png"


export default function Cards({itens, styles}) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={StyleSheet.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />

            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} alt="Icone coração de curtir" />
                <img src={open} alt="Icone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
