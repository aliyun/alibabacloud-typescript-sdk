import * as $dara from '@darabonba/typescript';
export declare class DeleteImageCacheResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the deletion is still in progress. A value of true indicates that the deletion is accepted but not yet complete, and a Get request returns DELETING until ImageCacheNotFound is explicitly returned. A value of false indicates that the current workspace is deleted or no longer exists.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    deletionPending?: boolean;
    /**
     * @remarks
     * The image cache ID, which matches the request. This ID is still returned even if the current workspace no longer exists.
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
     * Indicates whether the request is successful. This does not indicate that the cache creation is complete.
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
