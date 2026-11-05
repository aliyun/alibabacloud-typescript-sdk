import * as $dara from '@darabonba/typescript';
export declare class UpgradePolarClawChannelResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the upgraded channel.
     *
     * @example
     * feishu
     */
    channelId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The name of the upgraded npm package.
     *
     * @example
     * @larksuite/openclaw-lark@2026.4.7
     */
    npmPackage?: string;
    /**
     * @remarks
     * Indicates whether the operation was successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * The ID of the upgraded plugin.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Indicates whether the plugin was upgraded.
     *
     * @example
     * true
     */
    pluginUpgraded?: boolean;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the gateway was restarted.
     *
     * @example
     * true
     */
    restarted?: boolean;
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
