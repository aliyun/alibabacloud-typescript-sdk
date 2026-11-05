import * as $dara from '@darabonba/typescript';
export declare class ListAppTemplatesResponseBodyModuleData extends $dara.Model {
    /**
     * @remarks
     * The application type.
     *
     * @example
     * supabase
     */
    appType?: string;
    /**
     * @remarks
     * The application instance ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The color scheme.
     *
     * @example
     * Red
     */
    colorScheme?: string;
    /**
     * @remarks
     * The color scheme name.
     *
     * @example
     * red
     */
    colorSchemeName?: string;
    /**
     * @remarks
     * The actual amount of data copied from the original table during a DMS lock-free change.
     *
     * @example
     * 100
     */
    copyCount?: number;
    /**
     * @remarks
     * The creator ID.
     *
     * @example
     * SOAR
     */
    creator?: string;
    /**
     * @remarks
     * The creation time. The time is displayed in ISO 8601 format in UTC (Z).
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 2025-11-20T02:26:38Z
     */
    gmtCreateTime?: string;
    /**
     * @remarks
     * The modification time. The time is a UNIX timestamp in milliseconds.
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 1627545952000
     */
    gmtModifiedTime?: string;
    /**
     * @remarks
     * The primary key.
     *
     * @example
     * 9953352
     */
    id?: number;
    /**
     * @remarks
     * The industry of the file to be analyzed. Default value: **common** (general industry). Select an appropriate industry so that the backend can match the applicable algorithm combination. Valid values:
     *
     * - **microVideo**: short video industry
     * - **common**: general industry
     *
     * @example
     * NOUSE
     */
    industry?: string;
    /**
     * @remarks
     * The industry name.
     *
     * @example
     * abc
     */
    industryName?: string;
    /**
     * @remarks
     * Specifies whether the template is recommended.
     */
    isRecommended?: boolean;
    /**
     * @remarks
     * The last modifier ID.
     *
     * @example
     * admin
     */
    lastModifier?: string;
    /**
     * @remarks
     * The number of likes.
     *
     * @example
     * 100
     */
    likeCount?: number;
    /**
     * @remarks
     * Indicates whether the current user has liked the item.
     */
    liked?: boolean;
    /**
     * @remarks
     * The repair action.
     *
     * @example
     * {\\"memFrom\\": \\"text\\", \\"uid\\": \\"text\\", \\"labels\\": \\"jsonb\\", \\"content\\": \\"text\\", \\"fromId\\": \\"text\\", \\"uuid\\": \\"text\\"}
     */
    metadata?: string;
    /**
     * @remarks
     * The preview URL.
     *
     * @example
     * https://preview-lyj.aliyuncs.com/preview/b2c5a245c44946b99cf5435210bbb8b8?subSceneIds=728166
     */
    previewUrl?: string;
    /**
     * @remarks
     * The product version. Valid values:
     * - **BasicVersion**: Basic Edition
     * - **EnterpriseVersion**: Enterprise Edition
     *
     * @example
     * EnterpriseVersion
     */
    productVersion?: string;
    /**
     * @remarks
     * The edition name.
     *
     * @example
     * 1.0.1
     */
    productVersionName?: string;
    /**
     * @remarks
     * The number of shares.
     *
     * @example
     * 100
     */
    shareCount?: number;
    /**
     * @remarks
     * The file status.
     *
     * @example
     * RUNNING
     */
    status?: string;
    /**
     * @remarks
     * The template ID.
     *
     * @example
     * de10bf7d782392a70f293a3b1f7bb8fc
     */
    templateId?: string;
    /**
     * @remarks
     * The template name.
     * - The maximum length is 128 characters.
     *
     * @example
     * cfdna6
     */
    templateName?: string;
    /**
     * @remarks
     * The application thumbnail.
     *
     * @example
     * http://www.aliyun.com
     */
    thumbnailUrl?: string;
    /**
     * @remarks
     * The number of views.
     *
     * @example
     * 100
     */
    viewCount?: number;
    /**
     * @remarks
     * The weight.
     *
     * @example
     * 255
     */
    weight?: number;
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
export declare class ListAppTemplatesResponseBodyModuleNext extends $dara.Model {
    /**
     * @remarks
     * The application type.
     *
     * @example
     * memory
     */
    appType?: string;
    /**
     * @remarks
     * The bizId of the associated application instance.
     *
     * @example
     * WS20260502160409000001
     */
    bizId?: string;
    /**
     * @remarks
     * The color scheme.
     *
     * @example
     * red
     */
    colorScheme?: string;
    /**
     * @remarks
     * The color scheme name.
     *
     * @example
     * red
     */
    colorSchemeName?: string;
    /**
     * @remarks
     * The actual amount of data copied from the original table during a DMS lock-free change.
     *
     * @example
     * 100
     */
    copyCount?: number;
    /**
     * @remarks
     * The tenant user information.
     *
     * @example
     * 208116853206125255
     */
    creator?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2025-09-17 20:43:21
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The modification time.
     *
     * @example
     * 2026-03-18T10:03:56+08:00
     */
    gmtModified?: string;
    /**
     * @remarks
     * The primary key.
     *
     * @example
     * 1000039405002
     */
    id?: number;
    /**
     * @remarks
     * The industry. Default value: **common** (General industry). Valid values:
     *
     * - **microVideo**: Short video industry.
     *
     * - **common**: General industry.
     *
     * @example
     * NOUSE
     */
    industry?: string;
    /**
     * @remarks
     * The industry name.
     *
     * @example
     * abc
     */
    industryName?: string;
    /**
     * @remarks
     * Specifies whether the template is recommended.
     */
    isRecommended?: boolean;
    /**
     * @remarks
     * The ID of the last modifier.
     *
     * @example
     * admin
     */
    lastModifier?: string;
    /**
     * @remarks
     * The number of likes.
     *
     * @example
     * 100
     */
    likeCount?: number;
    /**
     * @remarks
     * Indicates whether the current user has liked the item.
     */
    liked?: boolean;
    /**
     * @remarks
     * The fix details.
     *
     * @example
     * {\\"knowledge_point\\":\\"text\\",\\"trunk_id\\":\\"text\\",\\"doc_name\\":\\"text\\",\\"knowledge_point_id\\":\\"text\\",\\"doc_id\\":\\"text\\",\\"trunk_content\\":\\"text\\"}
     */
    metadata?: string;
    /**
     * @remarks
     * The preview URL.
     *
     * @example
     * https://preview-lyj.aliyuncs.com/preview/b989c9ac526e4fb48e018805f43d5fb1?subSceneIds=816576
     */
    previewUrl?: string;
    /**
     * @remarks
     * The product version. Valid values:
     * - **BasicVersion**: Basic Edition.
     * - **EnterpriseVersion**: Enterprise Edition.
     * > Specify this parameter only when ProductForm is set to IntegrationForm.
     *
     * @example
     * BasicVersion
     */
    productVersion?: string;
    /**
     * @remarks
     * The edition name.
     *
     * @example
     * 1.0.2
     */
    productVersionName?: string;
    /**
     * @remarks
     * The number of shares.
     *
     * @example
     * 100
     */
    shareCount?: number;
    /**
     * @remarks
     * The status. Valid values: unknown, init, testing, and online.
     *
     * @example
     * Succeeded
     */
    status?: string;
    /**
     * @remarks
     * The template ID.
     *
     * @example
     * 3802aefc8cb0003b71286c47afc83624
     */
    templateId?: string;
    /**
     * @remarks
     * The template name.
     *
     * @example
     * iem
     */
    templateName?: string;
    /**
     * @remarks
     * The application thumbnail.
     *
     * @example
     * http://www.aliyun.com
     */
    thumbnailUrl?: string;
    /**
     * @remarks
     * The number of views.
     *
     * @example
     * 100
     */
    viewCount?: number;
    /**
     * @remarks
     * The weight.
     *
     * @example
     * 1
     */
    weight?: number;
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
export declare class ListAppTemplatesResponseBodyModule extends $dara.Model {
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
    data?: ListAppTemplatesResponseBodyModuleData[];
    /**
     * @remarks
     * The decision weight.
     */
    next?: ListAppTemplatesResponseBodyModuleNext;
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
     * Indicates whether the query result is truncated. In addition to the pagination limit, the server processes a maximum of the latest 1,000 records for the current query. If the number of results exceeds 1,000, **ResultLimit** is set to **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is set to **false**.
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
export declare class ListAppTemplatesResponseBody extends $dara.Model {
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
     * Indicates whether retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The app name.
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
     * The error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The number of results returned per query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response data.
     */
    module?: ListAppTemplatesResponseBodyModule;
    /**
     * @remarks
     * The token used to start the next query. This parameter is empty if there is no next query.
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
