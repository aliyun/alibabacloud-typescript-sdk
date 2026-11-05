import * as $dara from '@darabonba/typescript';
export declare class RemoveRbacRoleHierarchyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the permission check failure.
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
     * The name of the application to query.
     *
     * @example
     * or
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic error code.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The dynamic message.
     *
     * @example
     * SYSTEM_ERROR
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
     * true
     */
    module?: boolean;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
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
     * Indicates whether the processing is synchronous.
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
