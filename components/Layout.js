import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({title,keywords,description,children}) {
    return (
        <div>
            <Head>
                 <title>{title}</title>
                 <meta name={description} 
                 content={keywords}/>
            </Head>

            <Header/>

            <div className={styles.container}>
            {children}
            </div>

            <Footer/>
        </div>
    )
}
Layout.defaultProps={
    title:"Dj-Events | Find The hottest parties",
    description:"Find The Latest DJs and Musical Events",
    keywords:"music,dj,events,parties"
}