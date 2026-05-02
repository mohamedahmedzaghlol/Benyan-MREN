import styles from "./Sidebar.module.css"
function Sidebar() {
  const links = [
    {icon:"fa-chart-column", title: "Status"},
    {icon:"fa-users", title: "User management"},
    {icon:"fa-building", title: "Projects management"},
    {icon:"fa-building", title: "Devlopers management"},
    {icon:"fa-users", title: "CMS"},
    {icon:"fa-users", title: "Live Chat"},
  ];
  return(
    <aside className={`${styles.sidebar} min-vh-100 py-4`}>
      <div className="title">Dasboard</div>
      <nav>
        {links.map((item, index) => (
          <div className="navItem" key={index}>
          <i className={`fa-solid ${item.icon}`}></i>
          <span>{item.title}</span>
        </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar;