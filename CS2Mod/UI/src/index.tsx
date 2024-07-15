import { ModRegistrar } from "cs2/modding";
import ToolbarIcon from "mods/ToolbarIcon/ToolbarIcon";

import config from "../mod.json";

const register: ModRegistrar = (moduleRegistry) => {

    // moduleRegistry.append('GameTopLeft', ToolbarIcon);
    // moduleRegistry.extend("game-ui/game/components/toolbar/top/toggles.tsx", "PhotoModeToggle", ToolbarIcon);
    moduleRegistry.extend("game-ui/game/components/tool-options/mouse-tool-options/mouse-tool-options.tsx", 'MouseToolOptions', ToolbarIcon);

    console.log(`${config.id} UI module registrations completed.`);
}

export default register;