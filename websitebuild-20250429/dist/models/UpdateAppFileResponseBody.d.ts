import * as $dara from '@darabonba/typescript';
export declare class UpdateAppFileResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details about the access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name. The name can contain digits, letters, and hyphens (-). It must start with a letter, cannot end with a hyphen (-), and cannot exceed 36 characters in length.
     *
     * @example
     * watermark
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic code. This parameter is not in use. Ignore this parameter.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The dynamic error message, which is used to replace the `%s` variable in the **ErrMessage** parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the **DtsJobId** request parameter is invalid.
     *
     * @example
     * abc
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * Indicates whether the move operation is successful.
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
     * 系统异常
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * Indicates whether the request is synchronously processed.
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
