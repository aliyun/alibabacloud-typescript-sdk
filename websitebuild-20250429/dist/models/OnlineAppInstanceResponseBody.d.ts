import * as $dara from '@darabonba/typescript';
export declare class OnlineAppInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the authentication failure.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether a retry is allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The name of the application. The name can contain digits, letters, and hyphens (-). It must start with a letter, cannot end with a hyphen (-), and cannot exceed 36 characters in length.
     *
     * @example
     * stg.mlp_finance_cap_refund_hi
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic error code. This parameter is about to be deprecated.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The placeholder in the dynamic error message.
     *
     * @example
     * xxxxx
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The application module.
     *
     * @example
     * {\\"StorageSize\\": \\"3.29 MB\\", \\"FileNum\\": 30}
     */
    module?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CAB8FBB7-F93D-596D-8BA9-FB278ADF9C22
     */
    requestId?: string;
    /**
     * @remarks
     * The error code.
     *
     * @example
     * SYSTEM.ERROR
     */
    rootErrorCode?: string;
    /**
     * @remarks
     * The exception message.
     *
     * @example
     * System exception
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * Indicates whether the request is processed synchronously.
     *
     * @example
     * True
     */
    synchro?: boolean;
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
