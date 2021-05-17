
export default function SideBar({children}) {
    return (
        <div className="sidebar">
            SideBar
            {children.map( ele => ele )}
        </div>
    )
}
