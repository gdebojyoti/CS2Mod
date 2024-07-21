import { ModRegistrar, ModuleRegistry } from "cs2/modding"
import ToolbarIcon from "mods/ToolbarIcon/ToolbarIcon"
import MainMenuNavigationExtend from "mods/MainMenuNavigationExtend/MainMenuNavigationExtend"

import config from "../mod.json"

const register: ModRegistrar = (moduleRegistry: ModuleRegistry) => {

    // const mouseToolOptionsModule = getModule("game-ui/game/components/tool-options/mouse-tool-options/mouse-tool-options.tsx", "MouseToolOptions")
    // moduleRegistry.extend()
    
    // moduleRegistry.append('GameTopLeft', ToolbarIcon)
    // moduleRegistry.extend("game-ui/game/components/toolbar/top/toggles.tsx", "PhotoModeToggle", ToolbarIcon)
    moduleRegistry.extend("game-ui/game/components/tool-options/mouse-tool-options/mouse-tool-options.tsx", 'MouseToolOptions', ToolbarIcon)
    moduleRegistry.extend('game-ui/menu/components/main-menu-screen/main-menu-screen.tsx', 'MainMenuNavigation', MainMenuNavigationExtend)

    console.log('List of all "tool-options"', moduleRegistry.find(/game-ui\/game\/components\/tool-options/))

    console.log(`${config.id} UI module registrations completed.`)
}

export default register