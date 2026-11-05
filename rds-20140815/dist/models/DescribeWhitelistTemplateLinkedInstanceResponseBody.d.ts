import * as $dara from '@darabonba/typescript';
export declare class DescribeWhitelistTemplateLinkedInstanceResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The instance information.
     */
    insName?: string[];
    /**
     * @remarks
     * The ID of the whitelist template.
     *
     * @example
     * 412
     */
    templateId?: number;
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
export declare class DescribeWhitelistTemplateLinkedInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code. Valid values:
     * - **200**: Normal.
     * - **400**: Client fault.
     * - **401**: Authentication failed.
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
    data?: DescribeWhitelistTemplateLinkedInstanceResponseBodyData;
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
     * Successful
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. Valid values:
     *
     * - **true**: The request is successful.
     * - **false**: The request fails.
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
