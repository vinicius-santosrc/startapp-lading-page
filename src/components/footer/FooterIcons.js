const IconSocialMedia = [
    {
        id: 1,
        name: 'Instagram',
        iconName: "fa-brands fa-instagram",
        link: "#"
    },
    {
        id: 2,
        name: 'Twitter',
        iconName: "fa-brands fa-twitter",
        link: "#"
    },
]

const FooterIcons = () => {
    return (
        IconSocialMedia.map((item) => {
            return (
                <div className="FooterStyledIcon">
                    <a href={item.link}>
                        <i className={item.iconName}></i>
                    </a>
                </div>
            )
        })
    )
}

export default FooterIcons