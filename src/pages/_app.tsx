import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return(
    //Todos os elementos dentro do Provider terá acesso aos dados desse contexto
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );  
}

export default MyApp
