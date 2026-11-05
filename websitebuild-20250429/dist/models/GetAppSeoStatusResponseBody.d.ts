import * as $dara from '@darabonba/typescript';
export declare class GetAppSeoStatusResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The primary domain name.
     *
     * @example
     * stxycw.com
     */
    domain?: string;
    /**
     * @remarks
     * The creation time of the output artifact. The time is in ISO 8601 format and includes a time zone offset.
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 2025-03-26T13:25:41.119+08:00
     */
    gmtCreateTime?: string;
    /**
     * @remarks
     * The modification time. The time is in ISO 8601 format with the time zone set to UTC (Z).
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 2025-07-04T00:47:01Z
     */
    gmtModifiedTime?: string;
    /**
     * @remarks
     * The index permissions.
     *
     * @example
     * authinfo
     */
    seAuthInfo?: string;
    /**
     * @remarks
     * The index status.
     *
     * @example
     * 0,1,2
     */
    seIndexStatus?: number;
    /**
     * @remarks
     * The search engine type.
     *
     * @example
     * baidu,bing,google
     */
    seType?: string;
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
export declare class GetAppSeoStatusResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason why access was denied.
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
     * The application name. The application with this name is queried.
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
     * The dynamic error message, which is used to replace the `%s` variable in the **ErrMessage** return parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
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
     * The response data.
     */
    module?: GetAppSeoStatusResponseBodyModule[];
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
     * A reserved parameter.
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
