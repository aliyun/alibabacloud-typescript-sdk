import * as $dara from '@darabonba/typescript';
import { ModuleNextComponentsValue } from "./ModuleNextComponentsValue";
import { ModuleNextPropertiesValue } from "./ModuleNextPropertiesValue";
import { ModuleDataComponentsValue } from "./ModuleDataComponentsValue";
import { ModuleDataPropertiesValue } from "./ModuleDataPropertiesValue";
export declare class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData extends $dara.Model {
    /**
     * @remarks
     * The API status or POP error code.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The default values.
     */
    components?: {
        [key: string]: ModuleDataComponentsValue;
    };
    /**
     * @remarks
     * The file name.
     *
     * @example
     * 文件名
     */
    name?: string;
    /**
     * @remarks
     * The duration.
     */
    properties?: {
        [key: string]: ModuleDataPropertiesValue;
    };
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
export declare class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext extends $dara.Model {
    /**
     * @remarks
     * The API status or POP error code.
     *
     * @example
     * OK
     */
    code?: string;
    /**
     * @remarks
     * The default values.
     */
    components?: {
        [key: string]: ModuleNextComponentsValue;
    };
    /**
     * @remarks
     * The website name.
     *
     * @example
     * docs
     */
    name?: string;
    /**
     * @remarks
     * The frame rate.
     */
    properties?: {
        [key: string]: ModuleNextPropertiesValue;
    };
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
export declare class ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule extends $dara.Model {
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
    data?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleData[];
    /**
     * @remarks
     * The next feature ID.
     */
    next?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModuleNext;
    /**
     * @remarks
     * Indicates whether there is a next page.
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
     * Indicates whether there is a previous page.
     *
     * @example
     * False
     */
    prePage?: boolean;
    /**
     * @remarks
     * In addition to pagination limits, the server processes a maximum of the most recent 1000 records per query. If the results exceed 1000, **ResultLimit** is **true**, and you need to narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
     */
    resultLimit?: boolean;
    /**
     * @remarks
     * The total number of items.
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
export declare class ListAppCommoditySpecificationsV2ForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access denied detail.
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
     * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** error message of the response parameters.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
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
     * The number of results per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response data.
     */
    module?: ListAppCommoditySpecificationsV2ForPartnerResponseBodyModule;
    /**
     * @remarks
     * The token for the next query. This parameter is empty when there is no next query.
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
     * 系统异常
     */
    rootErrorMsg?: string;
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
