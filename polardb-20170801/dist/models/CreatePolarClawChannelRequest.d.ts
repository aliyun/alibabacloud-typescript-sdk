import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawChannelRequest extends $dara.Model {
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
     * The channel configuration.
     *
     * @example
     * {
     *     "enabled": true,
     *     "dmPolicy": "open",
     *     "allowFrom": [
     *         "*"
     *     ]
     * }
     */
    channelConfig?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The unique identifier of the channel.
     *
     * This parameter is required.
     *
     * @example
     * feishu
     */
    channelId?: string;
    /**
     * @remarks
     * The npm package name of the channel plugin, including the version number.
     *
     * This parameter is required.
     *
     * @example
     * @larksuite/openclaw-lark@2026.4.7
     */
    npmPackage?: string;
    /**
     * @remarks
     * The name of the channel plugin.
     *
     * This parameter is required.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after creation. Default value: true. Note: &#39;The value must be the string true or false. JSON boolean values are not accepted.&#39; Coordinate to confirm whether the type field should be updated to string accordingly.
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
