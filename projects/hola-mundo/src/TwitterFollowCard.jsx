import { useState } from 'react'

export function TwitterFollowCard ({children, userName="Unknow", initialIsFollowing}) {
    /*
    const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1];
    */
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassname = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handClick = () =>{
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="EL avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className= {buttonClassname} onClick={handClick}>
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className='tw-followCard-stopFollow'>Dejar de</span>
                </button>
            </aside> 
        </article>
    )
}