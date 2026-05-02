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
      <div className="fw-semibold px-3 mb-4 fs-4">Dasboard</div>
      <nav>
        {links.map((item, index) => (
          <div className={`${styles.navItem} d-flex align-items-center gap-2 px-3 py-4`} key={index}>
          <i className={`fa-solid ${item.icon} fs-3`}></i>
          <span className={styles.title}>{item.title}</span>
        </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar;