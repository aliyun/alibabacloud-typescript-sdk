import * as $dara from '@darabonba/typescript';
export declare class GetImageCacheResponseBodyDataError extends $dara.Model {
    /**
     * @remarks
     * The error code for creation failure.
     *
     * This parameter is required.
     *
     * @example
     * ACSCacheBuildFailed
     */
    code?: string;
    /**
     * @remarks
     * The description of the creation failure.
     *
     * This parameter is required.
     *
     * @example
     * Image cache creation failed. Try again
     */
    message?: string;
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
export declare class GetImageCacheResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The source ACR instance ID.
     *
     * This parameter is required.
     *
     * @example
     * cri-example
     */
    acrInstanceId?: string;
    /**
     * @remarks
     * The number of agents using the cache.
     *
     * This parameter is required.
     *
     * @example
     * 0
     */
    agentCount?: number;
    /**
     * @remarks
     * The cache size in bytes.
     *
     * This parameter is required.
     *
     * @example
     * 1073741824
     *
     * **if can be null:**
     * true
     */
    cacheSizeBytes?: number;
    /**
     * @remarks
     * Indicates whether deletion is allowed.
     *
     * This parameter is required.
     *
     * @example
     * false
     */
    canDelete?: boolean;
    /**
     * @remarks
     * The resource creation time. The format is RFC 3339. The Z at the end of the example indicates the UTC time zone.
     *
     * This parameter is required.
     *
     * @example
     * 2026-10-10T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The reason for blocking deletion.
     *
     * This parameter is required.
     *
     * @example
     * INSTANCES_RELEASING
     *
     * **if can be null:**
     * true
     */
    deleteBlockReason?: string;
    /**
     * @remarks
     * The current content digest.
     *
     * This parameter is required.
     *
     * @example
     * sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
     */
    digest?: string;
    /**
     * @remarks
     * The cache failure reason.
     *
     * This parameter is required.
     *
     * **if can be null:**
     * true
     */
    error?: GetImageCacheResponseBodyDataError;
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
    /**
     * @remarks
     * The source image domain name.
     *
     * This parameter is required.
     *
     * @example
     * example-registry.cn-hangzhou.cr.aliyuncs.com
     */
    registry?: string;
    /**
     * @remarks
     * The source image repository path.
     *
     * This parameter is required.
     *
     * @example
     * team/app
     */
    repository?: string;
    /**
     * @remarks
     * The image cache status.
     *
     * This parameter is required.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The source image tag.
     *
     * This parameter is required.
     *
     * @example
     * v1
     */
    tag?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * This parameter is required.
     *
     * @example
     * ws-example
     */
    workspaceId?: string;
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
export declare class GetImageCacheResponseBody extends $dara.Model {
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
     * The image cache details.
     *
     * This parameter is required.
     */
    data?: GetImageCacheResponseBodyData;
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
     * The request ID, used for troubleshooting.
     *
     * This parameter is required.
     *
     * @example
     * req-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. This does not mean that the cache creation is complete.
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
