'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';
import { HiOutlineUser } from 'react-icons/hi';
import { TbSmartHome } from 'react-icons/tb';
import Image from 'next/image';

const FooterNav = () => {
  const pathname = usePathname();

  // Fonction pour déterminer la classe CSS du lien
  const getLinkClass = (path) => {
    if (pathname === path) {
      return 'text-active'; // Si pathname correspond, utiliser la classe active
    }
    return 'text-muted'; // Par défaut, utiliser la classe muted
  };

  return (
    <div
      className="d-flex justify-content-around align-items-center bg-light border-top rounded-pill shadow position-fixed"
      style={{
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)', // Centre horizontalement
        height: '60px',
        maxWidth: '800px', // Limite la largeur sur les grands écrans
        width: '100%', // Prend toute la largeur jusqu'à `maxWidth`
        zIndex: 1000,
      }}
    >
      <Link
        href="/"
        className={`text-center nav-item ${getLinkClass('/')}`} // Applique la classe dynamique
      >
        <TbSmartHome size={24} />
        <div className="small">Home</div>
      </Link>

      <Link
        href="/chat"
        className={`text-center nav-item ${getLinkClass('/chat')}`} // Applique la classe dynamique
      >
        <Image src="/assets/telegram.svg" alt="Telegram" width={24} height={24} />
        <div className="small">Chat</div>
      </Link>

      {/* Bouton central /add */}
      <Link
        href="/add"
        className="text-center text-white rounded-circle d-flex justify-content-center align-items-center nav-item"
        style={{
          backgroundColor: '#00b2ca',
          width: '65px',
          height: '65px',
          transform: 'translateY(-15px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <FaPlus size={20} />
      </Link>

      <Link
        href="/ads"
        className={`text-center nav-item ${getLinkClass('/ads')}`} // Applique la classe dynamique
      >
        <Image src="/assets/apps.svg" alt="Apps" width={24} height={24} />
        <div className="small">Mes articles</div>
      </Link>

      <Link
        href="/profile/edit-profile"
        className={`text-center nav-item ${getLinkClass('/profile/edit-profile')}`} // Applique la classe dynamique
      >
        <Image src="/assets/user.svg" alt="User" width={24} height={24} />
        <div className="small">Profile</div>
      </Link>
    </div>
  );
};

export default FooterNav;
