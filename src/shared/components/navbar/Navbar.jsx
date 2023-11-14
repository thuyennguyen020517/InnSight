import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import IcHotel from '../icons/header-icons/IcHotel'
import IcSell from '../icons/header-icons/IcSell'
import IcGroup from '../icons/header-icons/IcGroup'
import IcAvatar from '../icons/header-icons/IcAvatar'
import IcPencil from '../icons/header-icons/IcPencil'
import { useSelector } from 'react-redux'
const Navbar = () => {
<<<<<<< HEAD
    const currentUser = true;
=======
    const { isLogin, userProfile } = useSelector(state => state.Auth)
>>>>>>> ad6574d94b707e19bc718ce9deae02ffcbd5aecd
    return (
        <div className={`hidden lg:flex  ${styles['navbar']}`}>
            <Link
                to={'/'}
                className={`flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 ${styles['logo-text']}`}>
                InnSight
            </Link>
            <nav className="contents text-base md:text-sm lg:text-lg mr-auto">
                <div className={`grid grid-cols-3 gap-1 items-center`}>
                    <Link
                        className={`${styles['nav-item']}`}
                        to={'/home'}>
                        <IcHotel />
                        <span className='ml-1'>Lưu trú</span>
                    </Link>

                    <Link
                        className={`${styles['nav-item']}`}
                        to={'/home'}>
                        <IcSell />
                        <span className='ml-1'>Ưu đãi</span>
                    </Link>

                    <Link
                        className={`${styles['nav-item']}`}

                        to={'/host'}>
                        <IcGroup />
                        <span className='ml-1'>Hợp tác với chúng tôi</span>
                    </Link>
                </div>
            </nav>

            <div className="flex items-center md:px-4 lg:px-6 xl:px-8">
<<<<<<< HEAD
                {currentUser ? (
                    <>
                        <div className="pr-10">
                        <button
                            className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["button-account"]}`}
                        >
                            <IcAvatar />
                            <span>Tài khoản của bạn</span>
                        </button>
                        </div>
                    </>
                ) : (
=======
                {!isLogin ?
>>>>>>> ad6574d94b707e19bc718ce9deae02ffcbd5aecd
                    <>
                        <Link to={'/sign-in'} className={`py-2 px-4 drop-shadow-md inline-flex items-center justify-between ${styles['navbar-button']}`}>
                            <IcAvatar />
                            <span>Đăng nhập</span>
                        </Link>
<<<<<<< HEAD
                        <Link to={'sign-up'} className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles['navbar-button']}`}>
                            <IcPencil />
                            <span>Đăng ký</span>
                        </Link>
                    </>
                )}
=======
                        <Link to={'/sign-up'} className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles['navbar-button']}`}>
                            <IcPencil />
                            <span>Đăng ký</span>
                        </Link>
                    </> :
                    <>
                        <div className="pr-10">
                            <button
                                className={`sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between ${styles["button-account"]}`}
                            >
                                <IcAvatar />
                                <span>{userProfile?.name}</span>
                            </button>
                        </div>
                    </>
                }


>>>>>>> ad6574d94b707e19bc718ce9deae02ffcbd5aecd
            </div>
        </div>
    )
}

export default Navbar
