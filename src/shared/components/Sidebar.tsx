import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import IcProfile from './icons/sidebar-icons/IcProfile.jsx'
import IcThongke from './icons/sidebar-icons/IcThongke.jsx'
import IcSetting from './icons/sidebar-icons/IcSetting.jsx'
import IcQLtaikhoan from './icons/sidebar-icons/IcQLtaikhoan.jsx'
import IcQLdichvu from './icons/sidebar-icons/IcQLdichvu.jsx'
import IcQLdanhmuc from './icons/sidebar-icons/IcQLdanhmuc.jsx'

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-sky-950 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 text-4xl text-white text-center m-6 font-bold">
        <NavLink to="/">
          InnSight
        </NavLink>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-slate-400">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/qltaikhoan"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('qltaikhoan') &&
                    'bg-cyan-900 dark:bg-cyan-900'
                  }`}
                >
                  <IcQLtaikhoan/>
                  Quản lý tài khoản
                </NavLink>
              </li>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/qldichvu"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('qldichvu') &&
                    'bg-cyan-900 dark:bg-cyan-900'
                  }`}
                >
                  <IcQLdichvu/>
                  Quản lý dịch vụ
                </NavLink>
              </li>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/qldanhmuc"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('qldanhmuc') &&
                    'bg-cyan-900 dark:bg-cyan-900'
                  }`}
                >
                  <IcQLdanhmuc/>
                  Quản lý danh mục
                </NavLink>
              </li>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/thongke"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('thongke') &&
                    'bg-cyan-900 dark:bg-cyan-900'
                  }`}
                >
                  <IcThongke/>
                  Thống kế doanh thu
                </NavLink>
              </li>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('profile') &&
                    'bg-cyan-900 dark:bg-cyan-900'
                  }`}
                >
                  <IcProfile/>
                  Thông tin cá nhân
                </NavLink>
              </li>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/setting"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-50 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('setting') &&
                    'bg-cyan-900 dark:bg-cyan-900'
                  }`}
                >
                  <IcSetting/>
                  Cài đặt tài khoản
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;