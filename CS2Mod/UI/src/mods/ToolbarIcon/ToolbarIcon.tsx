import { Button } from "cs2/ui"
import { bindValue, trigger, useValue } from "cs2/api"
import { ModuleRegistryExtend } from "cs2/modding"
import { useLocalization } from "cs2/l10n"
import { PropsSection, Section } from "../../../game-ui/game/components/tool-options/mouse-tool-options/mouse-tool-options"
import { PropsToolButton, ToolButton } from "../../../game-ui/game/components/tool-options/tool-button/tool-button"

// import classNames from "classnames"
import trafficIcon from "images/sample-1.svg"
import styles from "./ToolbarIcon.module.scss"

// export const markerVisible$ = bindValue<boolean>("edt", 'markersvisible');

const ToolbarIcon: ModuleRegistryExtend = (Component: any) => {
    return (props) => {
        // const markerVisible: boolean = useValue(markerVisible$)
        const { translate } = useLocalization();

        const PropsToolButton: PropsToolButton = {
            selected: true,
            tooltip: translate("ToolOptions.TOOLTIP[ShowMarker]"),
            src: "Media/Tools/Snap Options/All.svg",
            onSelect: () => {
                console.log("I'll try to toggle this marker")
                // trigger("edt", "togglemarkers")
            }
        }

        const ShowMarkerProps: PropsSection = {
            title: translate("Toolbar.SHOWMARKER"),//"Show Marker",
            children: ToolButton(PropsToolButton)
        }

        // This defines aspects of the components.
        const { children, ...otherProps } = props || {};
        const result: JSX.Element = Component()


        result.props.children?.unshift(
            Section(ShowMarkerProps),
        )
        console.log("children", children, JSON.stringify(result.props.children))

        return result

        return (
            <Button
                src={trafficIcon}
                variant="floating"
                // className={classNames(styles.toolModes)}
                onSelect={() => console.log("clicked!!!")}
            ></Button>
        )
    }
}

export default ToolbarIcon