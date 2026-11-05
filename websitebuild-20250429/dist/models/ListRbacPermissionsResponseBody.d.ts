import * as $dara from '@darabonba/typescript';
export declare class ListRbacPermissionsResponseBodyModuleData extends $dara.Model {
    /**
     * @remarks
     * The system-defined parameter. Set the value to **GetDISyncInstanceInfo**.
     *
     * @example
     * monitor
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
     * The allocated log storage space. Unit: GB.
     *
     * @example
     * sjapi-h5.aihuishou.com-waf
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
export declare class ListRbacPermissionsResponseBodyModuleNext extends $dara.Model {
    /**
     * @remarks
     * The system-defined parameter. Set the value to **GetRemind**.
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
     * The resource metadata declaration.
     *
     * **Note**: The metadata is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources. A valid resource declaration must include the full-path metadata declaration from level 0 to the validLeaf level.
     *
     * For more information, see [ResourceSchema documentation for Alibaba Cloud International](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
     *
     * @example
     * buy
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
export declare class ListRbacPermissionsResponseBodyModule extends $dara.Model {
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
    data?: ListRbacPermissionsResponseBodyModuleData[];
    /**
     * @remarks
     * The ID of the next feature.
     */
    next?: ListRbacPermissionsResponseBodyModuleNext;
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
     * In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
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
export declare class ListRbacPermissionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason why access is denied.
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
     * The name of the app.
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
     * The number of entries to return in each query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The returned object.
     */
    module?: ListRbacPermissionsResponseBodyModule;
    /**
     * @remarks
     * The token that is used to start the next query. This parameter is empty if no next query exists.
     *
     * @example
     * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
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
     * SYSTEM.EROR
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
