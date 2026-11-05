import * as $dara from '@darabonba/typescript';
export declare class DescribeAllWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
    /**
     * @remarks
     * The primary key of the data table.
     *
     * @example
     * 123
     */
    id?: number;
    /**
     * @remarks
     * The list of IP addresses.
     *
     * @example
     * 12.2.X.X,10.0.X.X
     */
    ips?: string;
    /**
     * @remarks
     * The ID of the whitelist template.
     *
     * @example
     * 412
     */
    templateId?: number;
    /**
     * @remarks
     * The name of the whitelist template.
     *
     * @example
     * template_123
     */
    templateName?: string;
    /**
     * @remarks
     * The ID of the user.
     *
     * @example
     * 168****
     */
    userId?: number;
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
export declare class DescribeAllWhitelistTemplateResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    currPageNumbers?: number;
    /**
     * @remarks
     * Indicates whether the queried data has a next page. Valid values:
     *
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * true
     */
    hasNext?: boolean;
    /**
     * @remarks
     * Indicates whether the queried data has a previous page. Valid values:
     *
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * false
     */
    hasPrev?: boolean;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    maxRecordsPerPage?: number;
    /**
     * @remarks
     * The whitelist templates returned on the current page.
     */
    templates?: DescribeAllWhitelistTemplateResponseBodyDataTemplates[];
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 3
     */
    totalPageNumbers?: number;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 402
     */
    totalRecords?: number;
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
export declare class DescribeAllWhitelistTemplateResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code. Valid values:
     *
     * - **200**: Normal.
     * - **400**: Client error.
     * - **401**: Failed to authenticate.
     * - **404**: Requested page not found.
     * - **500**: Server error.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The returned data.
     */
    data?: DescribeAllWhitelistTemplateResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. Valid values:
     *
     * - **200**: Normal.
     * - **400**: Client error.
     * - **500**: Server error.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 16C62438-491B-5C02-9B49-BA924A1372A2
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: Successful.
     * - **false**: Failed.
     *
     * @example
     * true
     */
    success?: boolean;
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
