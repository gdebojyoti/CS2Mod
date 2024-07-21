// import { Button } from "cs2/ui"
// import { bindValue, trigger, useValue } from "cs2/api"
import { ModuleRegistryExtend, getModule } from "cs2/modding"
import { tool } from "cs2/bindings"
// import { useLocalization } from "cs2/l10n"
import classNames from "classnames"

import trafficIcon from "images/sample-1.svg"
import styles from "./ToolbarIcon.module.scss"

// export const markerVisible$ = bindValue<boolean>("edt", 'markersvisible')

const ToolbarIcon: ModuleRegistryExtend = (Component: any) => {
    return (props) => {
        const { children, ...otherProps } = props || {}
        
        // const markerVisible: boolean = useValue(markerVisible$)
        // const { translate } = useLocalization()

        const ToolButtonElm = getModule("game-ui/game/components/tool-options/tool-button/tool-button.tsx", "ValueToolButton")({
            selected: true,
            tooltip: "tool tip 1",
            // tooltip: translate("ToolOptions.TOOLTIP[ShowMarker]"),
            // src: "Media/Tools/Snap Options/All.svg",
            src: trafficIcon,
            onSelect: () => {
                console.log("I'll try to toggle this marker")
                // trigger("edt", "togglemarkers")
            }
        })

        const SectionElm = getModule("game-ui/game/components/tool-options/mouse-tool-options/mouse-tool-options.tsx", "Section")({
            title: "Some Title",
            // children: ToolButtonElm
            children: <>{ToolButtonElm}</>
        })

        const DummyComponent = () => <div className={classNames(styles.bgGreen, styles.cGold)}>This is just for testing</div>

        return (
            <>
                {tool.activeTool$.value.id === tool.NET_TOOL && <>
                    <DummyComponent />
                    {SectionElm}
                    {/* <SectionElm /> */}
                </>}
                <Component {...otherProps} />
            </>
        )
    }
}

export default ToolbarIcon