import * as $dara from '@darabonba/typescript';
export declare class UpgradePolarClawPluginRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarClaw application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-********************
     */
    applicationId?: string;
    /**
     * @remarks
     * The new npm package name, including the version number.
     *
     * This parameter is required.
     *
     * @example
     * @larksuite/openclaw-lark@2026.4.7
     */
    npmPackage?: string;
    /**
     * @remarks
     * The ID of the plug-in to upgrade.
     *
     * This parameter is required.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the upgrade. Default value: true.
     *
     * @example
     * true
     */
    restart?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
