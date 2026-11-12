import * as $dara from '@darabonba/typescript';
export declare class ListImageCachesResponseBodyItemsError extends $dara.Model {
    /**
     * @remarks
     * The error code for the creation failure.
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
export declare class ListImageCachesResponseBodyItems extends $dara.Model {
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
     * The resource creation time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
     *
     * This parameter is required.
     *
     * @example
     * 2026-10-10T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The reason why deletion is blocked.
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
     * The reason for the cache failure.
     *
     * This parameter is required.
     *
     * **if can be null:**
     * true
     */
    error?: ListImageCachesResponseBodyItemsError;
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
export declare class ListImageCachesResponseBody extends $dara.Model {
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
     * The records on the current page. An empty array is returned if no matching items are found.
     *
     * This parameter is required.
     */
    items?: ListImageCachesResponseBodyItems[];
    /**
     * @remarks
     * The actual page size used for this request, which is not the number of items on the current page.
     *
     * This parameter is required.
     *
     * @example
     * 20
     */
    maxResults?: number;
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
     * The opaque cursor for the next page. An empty string indicates the end of the list.
     *
     * This parameter is required.
     *
     * @example
     * opaque-token
     */
    nextToken?: string;
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
    /**
     * @remarks
     * The total number of records under the current filter conditions. Do not use this value to determine whether the traversal is complete.
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    totalCount?: number;
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
