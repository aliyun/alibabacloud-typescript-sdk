import * as $dara from '@darabonba/typescript';
export declare class DeletePolarClawChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The channel ID.
     *
     * This parameter is required.
     *
     * @example
     * feishu
     */
    channelId?: string;
    /**
     * @remarks
     * The plugin ID. This parameter is required if `UninstallPlugin` is set to `true`.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the channel is deleted. Default value: `true`.
     *
     * @example
     * true
     */
    restart?: boolean;
    /**
     * @remarks
     * Specifies whether to uninstall the channel plugin. Default value: `false`.
     *
     * @example
     * true
     */
    uninstallPlugin?: boolean;
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
