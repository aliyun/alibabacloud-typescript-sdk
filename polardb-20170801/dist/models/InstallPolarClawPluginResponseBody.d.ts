import * as $dara from '@darabonba/typescript';
export declare class InstallPolarClawPluginResponseBody extends $dara.Model {
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
     * The status code.
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
     * The ID of the installed plug-in.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the gateway has been restarted.
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
