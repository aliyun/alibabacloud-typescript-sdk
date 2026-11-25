import * as $dara from '@darabonba/typescript';
export declare class ListRbacOrgTreeResponseBodyModuleData extends $dara.Model {
    /**
     * @remarks
     * The creation time. The time follows the ISO 8601 standard and is in the UTC time zone (Z).
     *
     * @example
     * 2026-05-08T02:28:26Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The folder level.
     *
     * @example
     * 1
     */
    depth?: number;
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
     * The file name.
     *
     * @example
     * File name
     */
    name?: string;
    /**
     * @remarks
     * The script path.
     */
    path?: string;
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
export declare class ListRbacOrgTreeResponseBodyModuleNext extends $dara.Model {
    /**
     * @remarks
     * The creation date. The date follows the ISO 8601 standard and is in the UTC time zone (Z).
     *
     * @example
     * 2025-12-15T02:29:22Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The category level. The root category is 1.
     *
     * @example
     * 2
     */
    depth?: number;
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
     * The scenario name.
     *
     * @example
     * docs
     */
    name?: string;
    /**
     * @remarks
     * The URI of the request.
     *
     * @example
     * /h6sRMdP&LTdQz/44ImvD/JtjSeUza/wVcp1i/dsxnl0FlL0/bvL/d+0~V6Fi5+R/P8ebktwGxe/l&AqBD_/Y+TstdpTo06U_Q/4i4:EDPGo/7.fIVgd.//AOJtXP5/X
     */
    path?: string;
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
export declare class ListRbacOrgTreeResponseBodyModule extends $dara.Model {
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
    data?: ListRbacOrgTreeResponseBodyModuleData[];
    /**
     * @remarks
     * The ID of the next feature.
     */
    next?: ListRbacOrgTreeResponseBodyModuleNext;
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
export declare class ListRbacOrgTreeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether retry is allowed.
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
     * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** error message.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified request parameter **DtsJobId** is invalid.
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
     * The number of entries to return for each query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The task object.
     */
    module?: ListRbacOrgTreeResponseBodyModule;
    /**
     * @remarks
     * The token used to start the next query. If no next query is available, this parameter is empty.
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
