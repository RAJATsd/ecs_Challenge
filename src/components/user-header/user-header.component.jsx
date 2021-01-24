import React,{useState} from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import SettingsNavigatorComponent from './user-header-settings-navigator/user-header-settings-navigator.component';
import './user-header.styles.css';

const useStyles = makeStyles({
    icons: {
        color: 'inherit'
    },
    avatar: {
        width: '24px',
        height: '24px',
        display: 'block',
        margin: 'auto',
        zIndex: 0
    }
})


const UserHeader = ({cart}) => {
    const [hidden,setHidden] = useState(true);
    const classes = useStyles();
    return (
        <nav className='user-header'>
            <div className='user-header-logo_and_searchfield'>
                <div className='user-header__logo'>
                    <Link to="/">Books</Link>
                </div>
            </div>
            <div className='user-header__buttons'>
                <div className='user-header__buttons__button'>
                    <HomeRoundedIcon className={classes.icons} />
                    <h5>Home</h5>
                </div>
                <div className='user-header__buttons-and-navigator'>
                    <div className='user-header__buttons__button user-header__buttons__button-last' onClick={()=>setHidden(!hidden)}>
                        <ShoppingCartIcon />
                        <h5>Cart ▼</h5>
                    </div>
                    <SettingsNavigatorComponent hiddenProp={hidden} cart={cart} setHidden={setHidden}/>
                </div>
            </div>
        </nav>
    )
}

export default UserHeader;