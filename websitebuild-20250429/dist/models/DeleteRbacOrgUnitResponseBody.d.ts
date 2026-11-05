import * as $dara from '@darabonba/typescript';
export declare class DeleteRbacOrgUnitResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access denial details.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether retries are allowed. Valid values:
     * - false: Retries are not allowed.
     * - true: Retries are allowed.
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
     * The dynamic code. This parameter is not in use and can be ignored.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The dynamic error message, which is used to replace `%s` in the **ErrMessage** error message.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
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
     * The response data.
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
     * The reserved parameter.
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
