import * as $dara from '@darabonba/typescript';
export declare class ListRbacRolesResponseBodyModuleData extends $dara.Model {
    /**
     * @remarks
     * The creation date in ISO 8601 format in the UTC time zone.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The primary key.
     *
     * @example
     * 9953352
     */
    id?: string;
    /**
     * @remarks
     * Specifies whether the report is the default report. Valid values:
     * - **0**: Not the default report.
     * - **1**: Default report.
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
     * Aliyun:dnm329@cn-shanghai+dir-8452400651
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
export declare class ListRbacRolesResponseBodyModuleNext extends $dara.Model {
    /**
     * @remarks
     * The task creation time. Format: YYYY-MM-DD HH:mm:ss.
     *
     * @example
     * 2020-11-27 16:02:28
     */
    createdAt?: string;
    /**
     * @remarks
     * The primary key.
     *
     * @example
     * 1000039405002
     */
    id?: string;
    /**
     * @remarks
     * Specifies whether the private gateway is the default one.
     *
     * @example
     * false
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
     * label-03\\"&$(curl D93PCxNZ.popscan.xaliyun.com)%3B
     */
    label?: string;
    /**
     * @remarks
     * The scenario name.
     *
     * @example
     * docs
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
export declare class ListRbacRolesResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    currentPageNum?: number;
    /**
     * @remarks
     * The request results.
     */
    data?: ListRbacRolesResponseBodyModuleData[];
    /**
     * @remarks
     * The decision weight.
     */
    next?: ListRbacRolesResponseBodyModuleNext;
    /**
     * @remarks
     * Specifies whether a next page exists.
     *
     * @example
     * False
     */
    nextPage?: boolean;
    /**
     * @remarks
     * The page size.
     *
     * @example
     * 50
     */
    pageSize?: number;
    /**
     * @remarks
     * Specifies whether a previous page exists.
     *
     * @example
     * False
     */
    prePage?: boolean;
    /**
     * @remarks
     * In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is **true**. Narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
     *
     * @example
     * False
     */
    resultLimit?: boolean;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
     */
    totalItemNum?: number;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 1
     */
    totalPageNum?: number;
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
export declare class ListRbacRolesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason for access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name.
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
     * The dynamic message. This parameter is not used and can be ignored.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The error parameters returned.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The maximum number of results per query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response data.
     */
    module?: ListRbacRolesResponseBodyModule;
    /**
     * @remarks
     * The token used to start the next query. If there is no next query, this parameter is empty.
     *
     * @example
     * 0l45bkwM022Dt+rOvPi/oQ==
     */
    nextToken?: string;
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
