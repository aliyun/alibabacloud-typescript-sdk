import * as $dara from '@darabonba/typescript';
export declare class DetachWhitelistTemplateToInstanceResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The returned status. Valid values:
     * - **ok**: Successful.
     * - **error**: Failed.
     *
     * @example
     * ok
     */
    status?: string;
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
export declare class DetachWhitelistTemplateToInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code. Valid values:
     * - **200**: Normal.
     * - **400**: Client fault.
     * - **401**: Failed to authenticate.
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
    data?: DetachWhitelistTemplateToInstanceResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. Valid values:
     * - **200**: Successful.
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
     * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
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
