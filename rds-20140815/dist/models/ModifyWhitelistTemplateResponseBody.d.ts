import * as $dara from '@darabonba/typescript';
export declare class ModifyWhitelistTemplateResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The returned status. Valid values:
     * - **ok**: Normal response.
     * - **error**: Error response.
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
export declare class ModifyWhitelistTemplateResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code. Valid values:
     * - **200**: Normal.
     * - **400**: Client error.
     * - **401**: Authentication failed.
     * - **404**: The requested page is not found.
     * - **500**: Server error.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The list of returned data.
     */
    data?: ModifyWhitelistTemplateResponseBodyData;
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
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID. The ID is unique for each request and can be used for troubleshooting.
     *
     * @example
     * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
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
