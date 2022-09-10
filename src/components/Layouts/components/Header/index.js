import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LogoIcon, CloseIcon, SearchIcon } from "~/assets/images";

const cx = classNames.bind(styles); // Giúp cho việc viết class name có dấu gách ngang

function Header() {
    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('header__logo')}>
                    <LogoIcon />
                </div>
                <div className={cx('header__center')}>
                    <input placeholder='Tìm kiếm tài khoản và video' spellCheck={false} />
                    <div className={cx('icon-close')}>
                        <span>
                            <CloseIcon />
                        </span>

                        <span>
                            <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        </span>
                    </div>
                    <button className={cx('btn-search')}>
                        <SearchIcon />
                    </button>
                </div>
                <div className={cx('header__right')}></div>
            </div>
        </header>
    );
}

export default Header;