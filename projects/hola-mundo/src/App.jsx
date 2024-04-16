import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

export function App (){
    /*
    const midudev = {userName:'midudev'} //mala practica
    return(
        <div className='App'>
            <TwitterFollowCard {...midudev} >
                Miguel Ángel Duran
            </TwitterFollowCard>
            <TwitterFollowCard userName="pheralb" initialIsFollowing={true}>
                Pablo Hernandez
            </TwitterFollowCard>
        </div>
    )
    */
   return(
    <section className='App'>
        {
            users.map(user=>{
                const { userName, name,isFollowing}=user;
                return(
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
    </section>
   )
}