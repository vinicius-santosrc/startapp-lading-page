const List = [
    {
        id: 1,
        name: "Nível Bronze",
        icon: "NivelBronze.webp",
        vantagens:
            [
                "Nível inicial, sem vantagens",
                "Acesso a recursos do nível Iniciante"
            ]

    },
    {
        id: 2,
        name: "Nível Prata",
        icon: "NivelPrata.webp",
        vantagens:
            [
                "Selo Prata",
                "Desconto de 5% na compra do LEGEND",
                "Desconto de 3% ao contratar PERSONAL",
                "Acesso a recursos do nível Prata"
            ]

    },
    {
        id: 3,
        name: "Nível Ouro",
        icon: "NivelOuro.webp",
        vantagens:
            [
                "Selo Ouro",
                "Desconto de 10% na compra do LEGEND",
                "Desconto de 5% ao contratar PERSONAL",
                "Acesso a recursos do nível Prata, Ouro"
            ]

    },
    {
        id: 4,
        name: "Nível Diamante (Máximo)",
        icon: "NivelDiamante.webp",
        vantagens:
            [
                "Selo Diamante",
                "Desconto de 20% na compra do LEGEND",
                "Desconto de 15% ao contratar PERSONAL",
                "Acesso a recursos do nível Prata, Ouro, Diamante"
            ]

    },
    {
        id: 5,
        name: "Nível Legend (Mensal)",
        icon: "NivelLEGEND.webp",
        vantagens:
            [
                "Selo LEGEND",
                "Desconto de 20% na compra no site VNS-CLOSET",
                "Desconto de 25% ao contratar PERSONAL",
                "Acesso a recursos do nível Prata, Ouro, Diamante, Legend"
            ]

    }
]

const ChallangesList = () => {
    return (
        List.map((challange, id) => {
            return (
                <div className="ChallangeItemBox" key={id}>
                    <img src={window.location.origin + "/images/challanges/" + challange.icon} />
                    <h2>{challange.name}</h2>
                    <div className="box-vantangens">
                        <ul>
                            {challange.vantagens.map((line, id) => {
                                return <li key={id}>{line}</li>
                            })}
                        </ul>
                    </div>
                </div>
            )
        })
    )
}

export default ChallangesList