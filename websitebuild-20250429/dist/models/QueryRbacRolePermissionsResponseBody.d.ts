import * as $dara from '@darabonba/typescript';
export declare class QueryRbacRolePermissionsResponseBodyModuleData extends $dara.Model {
    /**
     * @remarks
     * The system-defined parameter. Set the value to **DeleteIntegration**.
     *
     * @example
     * js
     */
    action?: string;
    /**
     * @remarks
     * The scenario description.
     *
     * @example
     * lshm-mysql-coypt
     */
    description?: string;
    /**
     * @remarks
     * The scenario ID.
     *
     * @example
     * 9953352
     */
    id?: string;
    /**
     * @remarks
     * The name of the alert rule.
     *
     * @example
     * lb-uf6wxzsjwavr2kyq92slf-80-clb4
     */
    resource?: string;
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
export declare class QueryRbacRolePermissionsResponseBodyModuleNext extends $dara.Model {
    /**
     * @remarks
     * The system-defined parameter. Set the value to **GetCreateCustomerInfomation**.
     *
     * @example
     * accept
     */
    action?: string;
    /**
     * @remarks
     * The scenario description.
     *
     * @example
     * lx_supabase_test_02
     */
    description?: string;
    /**
     * @remarks
     * The scenario ID.
     *
     * @example
     * 1000039405002
     */
    id?: string;
    /**
     * @remarks
     * The statistical method for the Warn level.
     *
     * The value of `Statistics` varies with the cloud service. For more information, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
     *
     * @example
     * mwaf-apisec0629.wafqax.top-waf
     */
    resource?: string;
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
export declare class QueryRbacRolePermissionsResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 12
     */
    currentPageNum?: number;
    /**
     * @remarks
     * The request result.
     */
    data?: QueryRbacRolePermissionsResponseBodyModuleData[];
    /**
     * @remarks
     * The ID of the next feature.
     */
    next?: QueryRbacRolePermissionsResponseBodyModuleNext;
    /**
     * @remarks
     * Indicates whether a next page exists.
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
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * Indicates whether a previous page exists.
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
     * 0
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
export declare class QueryRbacRolePermissionsResponseBody extends $dara.Model {
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
     * The dynamic message. This parameter is not used. Ignore it.
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
     * Indicates whether the move is successful.
     */
    module?: QueryRbacRolePermissionsResponseBodyModule;
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
     * Specifies whether synchronous processing is used.
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
