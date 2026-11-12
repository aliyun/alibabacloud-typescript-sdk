import * as $dara from '@darabonba/typescript';
export declare class DisablePolarClawPluginResponseBody extends $dara.Model {
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
     * Indicates whether the operation is successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * The ID of the disabled plug-in.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 580EF224-9647-59E7-9950-D9EBFD6A2921
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
