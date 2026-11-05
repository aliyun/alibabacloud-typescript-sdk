import * as $dara from '@darabonba/typescript';
export declare class DescribeWhitelistTemplateResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The primary key of the data table.
     *
     * @example
     * 1013
     */
    id?: number;
    /**
     * @remarks
     * The list of IP addresses.
     *
     * @example
     * 10.1.X.X,2.3.X.X
     */
    ips?: string;
    /**
     * @remarks
     * The ID of the whitelist template.
     *
     * @example
     * 424
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
     * 16****
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
export declare class DescribeWhitelistTemplateResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The whitelist template information.
     */
    template?: DescribeWhitelistTemplateResponseBodyDataTemplate;
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
export declare class DescribeWhitelistTemplateResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code. Valid values:
     * - **200**: Normal.
     * - **400**: Client fault.
     * - **401**: Failed to authenticate during identity verification.
     * - **404**: The requested page is not found.
     * - **500**: Server fault.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The list of returned data.
     */
    data?: DescribeWhitelistTemplateResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. Valid values:
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
     * The request ID.
     *
     * @example
     * ED169A3E-1657-4104-82AB-24EA8CD0DB75
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
     * - **false**: The request failed.
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
