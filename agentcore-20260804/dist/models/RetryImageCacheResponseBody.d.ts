import * as $dara from '@darabonba/typescript';
export declare class RetryImageCacheResponseBodyDataError extends $dara.Model {
    /**
     * @remarks
     * The secure and non-empty error code for the current production failure.
     *
     * This parameter is required.
     *
     * @example
     * ACSCacheBuildFailed
     */
    code?: string;
    /**
     * @remarks
     * The secure and non-empty display reason for the production failure, excluding credentials, internal addresses, or stack traces.
     *
     * This parameter is required.
     *
     * @example
     * Image cache production failed. Try again
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
export declare class RetryImageCacheResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The source ACR Enterprise instance ID.
     *
     * This parameter is required.
     *
     * @example
     * cri-example
     */
    acrInstanceId?: string;
    /**
     * @remarks
     * The deduplicated number of agents in the current workspace that have useImageCache set to true and are associated with this logical resource. The value is greater than or equal to 0. This is the same set as the imageCacheId filter in ListAllAgents. Agents with the feature disabled are not counted, regardless of the number of occupied instances.
     *
     * This parameter is required.
     *
     * @example
     * 0
     */
    agentCount?: number;
    /**
     * @remarks
     * The actual cache size in bytes. Known values are greater than or equal to 0. If unknown, the value is null. The compressed size of the source image cannot be used as a substitute.
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
     * Indicates whether deletion is allowed. The value is true when the current workspace has no configuration references with the switch enabled, no valid instances occupy the resource, and the resource is not being deleted. If the reference status is unknown, the query should fail instead of allowing deletion by default.
     *
     * This parameter is required.
     *
     * @example
     * false
     */
    canDelete?: boolean;
    /**
     * @remarks
     * The creation time of the logical resource in the current workspace, in RFC3339 format with time zone. Content updates for the "latest" tag do not refresh this time.
     *
     * This parameter is required.
     *
     * @example
     * 2026-10-10T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The reason for blocking deletion. The value is null when canDelete is true. Otherwise, the value is returned based on the priority of DELETING, AGENT_ENABLED, and INSTANCES_RELEASING. Old instances may still occupy the resource even if the agent count is 0.
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
     * The current content digest in the sha256: format followed by a 64-character lowercase hexadecimal string. It only describes the currently registered content and does not prove that old instances have been switched.
     *
     * This parameter is required.
     *
     * @example
     * sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
     */
    digest?: string;
    /**
     * @remarks
     * The cache failure reason. It must be a non-empty object when the status is FAILED, and null for other statuses. It only describes the current content and the current production round.
     *
     * This parameter is required.
     *
     * **if can be null:**
     * true
     */
    error?: RetryImageCacheResponseBodyDataError;
    /**
     * @remarks
     * The logical resource ID manageable by the current workspace, not the shared physical cache ID.
     *
     * This parameter is required.
     *
     * @example
     * img-example
     */
    imageId?: string;
    /**
     * @remarks
     * The source image domain name, excluding the protocol, path, and credentials.
     *
     * This parameter is required.
     *
     * @example
     * example-registry.cn-hangzhou.cr.aliyuncs.com
     */
    registry?: string;
    /**
     * @remarks
     * The source image repository path in the namespace/repository format, which includes the namespace.
     *
     * This parameter is required.
     *
     * @example
     * team/app
     */
    repository?: string;
    /**
     * @remarks
     * The image cache status. Valid values:
     * - PENDING: creating
     * - READY: available
     * - FAILED: abnormal
     * - DELETING: deleting in the current workspace
     *
     * This parameter is required.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The source image tag. Case is preserved. Regular tags cannot be registered with different digests, except for the exact lowercase "latest" tag.
     *
     * This parameter is required.
     *
     * @example
     * v1
     */
    tag?: string;
    /**
     * @remarks
     * The workspace ID. It is consistent with the requested workspace. Resources with the same content from other workspaces are not returned.
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
export declare class RetryImageCacheResponseBody extends $dara.Model {
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
     * The retry image cache result.
     *
     * This parameter is required.
     */
    data?: RetryImageCacheResponseBodyData;
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
     * Indicates whether the request is successful. This does not mean that the cache production is complete.
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
