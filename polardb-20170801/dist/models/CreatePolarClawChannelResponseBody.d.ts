import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawChannelResponseBody extends $dara.Model {
    /**
     * @remarks
     * **The application ID.**
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the created channel.
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
     * The name of the installed npm package.
     *
     * @example
     * @larksuite/openclaw-lark@2026.4.7
     */
    npmPackage?: string;
    /**
     * @remarks
     * Indicates whether the operation is successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * **The plugin ID.**
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Indicates whether a new plugin is installed.
     *
     * @example
     * true
     */
    pluginInstalled?: boolean;
    /**
     * @remarks
     * **The request ID.**
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the gateway is restarted.
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
