import { useEffect, useState } from 'react';
import { useRouter } from 'react-router-dom';
import imgUrl from `/imagens/${disco.slug}.jpg`;


const Info = () => {
    const router = useRouter();
    const { produtosID } = router.query;
    const [disco, setDisco] = useState(null);

    useEffect(() => {
        fetch(`/api/discos/${produtosID}`)
            .then(response => response.json())
            .then(data => setDisco(data))
            .catch(error => console.error('Erro ao buscar disco:', error));
    }, [produtosID]);

    if (!disco) {
        return (
            <div className="content">
                <h1>Disco não encontrado</h1>
            </div>
        );
    }

    
    return (
        <div className="content">
            <div className="product-container">
                <img src={imgUrl} width={100} height={100} alt={disco.album} />
                <h1>{disco.album}</h1>
                <h2>{disco.banda}</h2>
                <p>{disco.descricao}</p>
            </div>
        </div>
    );
};

export default Info;

