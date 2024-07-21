import { ModuleRegistryExtend } from "cs2/modding"

import styles from "./MainMenuNavigationExtend.module.scss"

// extending a React Component 
const MainMenuNavigationExtend: ModuleRegistryExtend = (Component) => {
    return (props) => {
        const { children, ...otherProps } = props || {}

        return (
            <Component {...otherProps}>
                <div className={styles.item}>Injected item</div>
                {children}
                <div className={styles.item}>Injected item 2</div>
            </Component>
        )
    }
}

export default MainMenuNavigationExtend