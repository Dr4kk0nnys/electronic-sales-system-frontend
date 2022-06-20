import type { NextPage } from 'next'

import { Sidebar } from '../components/sidebar'
import { Products } from '../components/pages/products'

const Home: NextPage = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', margin: -8 }}>

            <div style={{ height: '100vh' }}>
                <Sidebar />
            </div>

            <div>
                <Products />
            </div>
        </div >
    )
}

export default Home
