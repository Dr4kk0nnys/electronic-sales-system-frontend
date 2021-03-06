import type { NextPage } from 'next'

import { Sidebar } from '../components/sidebar'
import { Home as _Home } from '../components/pages/home'

const Home: NextPage = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', margin: -8 }}>

            <div style={{ height: '100vh' }}>
                <Sidebar />
            </div>

            <div>
                <_Home />
            </div>
        </div >
    )
}

export default Home
