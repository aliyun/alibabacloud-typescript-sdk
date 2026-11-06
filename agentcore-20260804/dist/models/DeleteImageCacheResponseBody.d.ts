import * as $dara from '@darabonba/typescript';
export declare class DeleteImageCacheResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the deletion is in progress. The current implementation always returns false. To confirm the visibility of the cache, call GetImageCache or ListImageCaches.
     *
     * This parameter is required.
     *
     * @example
     * false
     */
    deletionPending?: boolean;
    /**
     * @remarks
     * The image cache ID.
     *
     * This parameter is required.
     *
     * @example
     * img-example
     */
    imageId?: string;
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
export declare class DeleteImageCacheResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business response code.
     *
     * This parameter is required.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The image cache deletion result.
     *
     * This parameter is required.
     */
    data?: DeleteImageCacheResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * This parameter is required.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message.
     *
     * This parameter is required.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID, which is used for troubleshooting.
     *
     * This parameter is required.
     *
     * @example
     * req-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. A successful request does not mean that the cache creation is complete.
     *
     * This parameter is required.
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
