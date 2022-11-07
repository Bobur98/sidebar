import create from 'zustand';

const toggleSidebar = create((setState) => ({
  isClose: false,
  setSidebar: (res) => setState((state) => ({ isClose: res })),
}));

export default toggleSidebar;
