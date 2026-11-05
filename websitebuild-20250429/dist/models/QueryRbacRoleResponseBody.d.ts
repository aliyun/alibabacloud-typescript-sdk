import * as $dara from '@darabonba/typescript';
export declare class QueryRbacRoleResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The time when the task was created, in ISO 8601 format, such as 2024-01-01T00:00:00Z.
     *
     * @example
     * 2026-02-06T10:20:09Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The scenario ID.
     *
     * @example
     * 16257
     */
    id?: string;
    /**
     * @remarks
     * Indicates whether it is the default. Valid values:
     * - 0: No.
     * - 1: Yes.
     *
     * @example
     * true
     */
    isDefault?: boolean;
    /**
     * @remarks
     * Specifies whether the approval template is system-defined. Valid values:
     * - 1: Yes.
     * - 0: No.
     */
    isSystem?: boolean;
    /**
     * @remarks
     * The name.
     *
     * @example
     * oss://anchashiscan.oss-cn-hangzhou.aliyuncs.com/prodpopscansDZBFBGr
     */
    label?: string;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * File name
     */
    name?: string;
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
export declare class QueryRbacRoleResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason for the access denial.
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
     * The name of the application.
     *
     * @example
     * spring-cloud-b
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
     * The response data.
     */
    module?: QueryRbacRoleResponseBodyModule;
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
