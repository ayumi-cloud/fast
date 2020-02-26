import { ButtonBaseClassNameContract as NeutralButtonClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import { ComponentStyles } from "@microsoft/fast-jss-manager";
import { DesignSystem } from "../design-system";
import { baseButton, buttonStyles } from "../patterns/button";
import { applyFocusVisible } from "@microsoft/fast-jss-utilities";
import {
    neutralFillActive,
    neutralFillHover,
    neutralFillRest,
    neutralFocus,
    neutralForegroundRest,
} from "../utilities/color";
import {
    highContrastDisabledBorder,
    highContrastLinkBorder,
    highContrastLinkOutline,
    highContrastOutline,
    highContrastOutlineFocus,
    highContrastSelected,
    highContrastSelector,
} from "../utilities/high-contrast";

const styles: ComponentStyles<NeutralButtonClassNameContract, DesignSystem> = {
    ...baseButton,
    button: {
        ...buttonStyles(),
        color: neutralForegroundRest,
        fill: neutralForegroundRest,
        background: neutralFillRest,
        "&:not($button__disabled):hover": {
            background: neutralFillHover,
            ...highContrastSelected,
        },
        "&:not($button__disabled):active": {
            background: neutralFillActive,
        },
        ...applyFocusVisible<DesignSystem>({
            "border-color": neutralFocus,
            ...highContrastOutlineFocus,
        }),
        "&:disabled": {
            ...highContrastDisabledBorder,
        },
        "&::-moz-focus-inner": {
            border: "0",
        },
        ...highContrastOutline,
        "a&": {
            ...highContrastLinkOutline,
            "&:hover": {
                ...highContrastLinkBorder,
            },
            "&$button__disabled": {
                ...highContrastDisabledBorder,
                "&:hover": {
                    [highContrastSelector]: {
                        "box-shadow": "none !important",
                    },
                },
            },
        },
    },
};

export default styles;
