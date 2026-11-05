import * as $dara from '@darabonba/typescript';
export declare class SubmitMaterialTaskResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The business group ID.
     *
     * @example
     * xxx
     */
    bizGroupId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 01baf7bcdd5c3a4c8d481cdd57c15837
     */
    taskId?: string;
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
export declare class SubmitMaterialTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the permission verification failure.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether retry is allowed. Valid values:
     * - false: Retry is not allowed.
     * - true: Retry is allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name. The application with this name is queried.
     *
     * @example
     * dewuApp
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
     * SYSTEM_ERRROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The error code. The ErrorCode field is not returned if the request is successful. If the request fails, the ErrorCode field is returned. For more information, see the error codes in this topic.
     *
     * @example
     * 0
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
     */
    errorMsg?: string;
    /**
     * @remarks
     * The response data.
     */
    module?: SubmitMaterialTaskResponseBodyModule;
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
     * The root error code.
     *
     * @example
     * SYSTEM.ERROR
     */
    rootErrorCode?: string;
    /**
     * @remarks
     * The root error message.
     *
     * @example
     * System exception
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     *
     * @example
     * true
     */
    success?: boolean;
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
