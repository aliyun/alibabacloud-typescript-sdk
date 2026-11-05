import * as $dara from '@darabonba/typescript';
export declare class ListAppTemplateDictsResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The dictionary code.
     *
     * @example
     * abc
     */
    dictCode?: string;
    /**
     * @remarks
     * The dictionary label.
     *
     * @example
     * label
     */
    dictLabel?: string;
    /**
     * @remarks
     * The template dictionary type enumeration.
     *
     * @example
     * product_version
     */
    dictType?: string;
    /**
     * @remarks
     * The dictionary value.
     *
     * @example
     * abc
     */
    dictValue?: string;
    /**
     * @remarks
     * Indicates whether templates exist.
     */
    hasTemplates?: boolean;
    /**
     * @remarks
     * The sort order. Default value: DESC.
     *
     * Valid values:
     *
     * - ASC: Ascending order.
     *
     * - DESC: Descending order.
     *
     * @example
     * desc
     */
    sortOrder?: number;
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
export declare class ListAppTemplateDictsResponseBody extends $dara.Model {
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
     * Indicates whether retry is allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name to query.
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
     * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** return parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
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
     * The number of entries per query.
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
    module?: ListAppTemplateDictsResponseBodyModule[];
    /**
     * @remarks
     * The token for the next query. This parameter is empty if no more results exist.
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
     * System exception.
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
