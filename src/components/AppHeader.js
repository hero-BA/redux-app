import logo from '../images/paragon.png';

const AppHeader = () => {
    return (
        <header>
            <div className='left' id='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='left' id='text'>
                React-Redux-App
            </div>
        </header>
    );
};

export default AppHeader;