const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer({ event, drawer });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer({ event, drawer });
    });

    // Tambahkan event listener untuk menutup drawer ketika item di dalam drawer diklik
    const drawerItems = drawer.querySelectorAll('.nav-link');
    drawerItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        this._closeDrawer({ event, drawer });
      });
    });
  },

  _toggleDrawer({ event, drawer }) {
    event.stopPropagation();
    drawer.classList.toggle('open'); // Mengganti kelas CSS untuk membuka/menutup drawer
  },

  _closeDrawer({ event, drawer }) {
    event.stopPropagation();
    drawer.classList.remove('open'); // Menghapus kelas CSS untuk menutup drawer
  },
};

export default DrawerInitiator;
