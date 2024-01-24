const List = [
    {
        id: "one",
        name: "Personal Trainer",
        image: "https://gymate-iota.vercel.app/static/media/weightlifter.fdb39166bd9fd960aac2.png"
    },
    {
        id: "two",
        name: 'Criação de Rotinas',
        image: "https://gymate-iota.vercel.app/static/media/equpments.f102757b82b68f55f831.png"
    },
    {
        id: "three",
        name: 'Foco no seu Treino',
        image: "https://gymate-iota.vercel.app/static/media/gym.377b234bd8a2adfc4675.png"
    },

]

const ListAbout = () => {
    return (
        <div className="ListAbout">
            {List.map((item) => {
                return (
                    <div className="ItemListAbout" id={item.id} key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ListAbout