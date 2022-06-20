import { useRouter } from 'next/router';

import styles from './sidebar.module.scss';

const Sidebar = () => {

    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1
                className={styles.title}
                onClick={() => router.push('/')}
            >
                Home
            </h1>
            <h1
                className={styles.title}
                onClick={() => router.push('/clients')}
            >
                Clients
            </h1>
            <h1
                className={styles.title}
                onClick={() => router.push('/products')}
            >
                Products
            </h1>
        </div>
    )
}

export { Sidebar };