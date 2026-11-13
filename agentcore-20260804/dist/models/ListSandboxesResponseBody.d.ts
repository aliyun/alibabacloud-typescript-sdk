import * as $dara from '@darabonba/typescript';
export declare class ListSandboxesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The number of active sessions in the sandbox.
     *
     * @example
     * 1
     */
    activeSessionCount?: number;
    /**
     * @remarks
     * The time when the sandbox was created, in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The tag of the actual observed image of the currently returned instance. This parameter is empty if the tag cannot be parsed.
     *
     * @example
     * 202611031754
     */
    harnessVersion?: string;
    /**
     * @remarks
     * The time of the last activity of the sandbox, in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:02:00Z
     */
    lastActiveAt?: string;
    /**
     * @remarks
     * The time of the last heartbeat of the sandbox, in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:01:00Z
     */
    lastHeartbeatAt?: string;
    /**
     * @remarks
     * Used to continue calling GetSandboxRebuildOperation to query the overall result after a page refresh. This parameter is empty if there is no historical rebuild. Do not use the ID of a subsequently created task instead.
     *
     * @example
     * 01a19f98-906d-7e82-96aa-8b7ea1d1a29d
     */
    lastRebuildOperationId?: string;
    /**
     * @remarks
     * The maximum number of concurrent sessions allowed for the sandbox, which is obtained from the effective auto-scaling configuration at runtime. This parameter is empty if auto-scaling is disabled or the configuration is unavailable.
     *
     * @example
     * 7
     */
    maxConcurrentSessions?: number;
    /**
     * @remarks
     * The current running phase of the sandbox.
     *
     * @example
     * RUNNING
     */
    phase?: string;
    /**
     * @remarks
     * The sandbox ID, which can be queried by calling ListSandboxes.
     *
     * @example
     * sbx-2
     */
    sandboxId?: string;
    /**
     * @remarks
     * The server compares the actual image tag of the instance with the target image tag of the pool. The value is true if the tags are different during the RUNNING, HIBERNATED, or FAILED phase. The value is false if the tags are the same or during other known phases. This parameter is empty if the tag or phase cannot be confirmed, and it cannot be treated as false. The version sequence is not determined by the tag size.
     *
     * @example
     * true
     */
    updateAvailable?: boolean;
    /**
     * @remarks
     * A value of true indicates that the most recent rebuild corresponding to the current instance generation failed as a whole. A value of false indicates that there is no historical rebuild or the rebuild succeeded as a whole. This parameter is empty if the rebuild is in progress, canceled, replaced, the generation does not match, or the result cannot be confirmed.
     *
     * @example
     * false
     */
    updateFailed?: boolean;
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
export declare class ListSandboxesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS if the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code. The value is 200 if the request is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of sandboxes that meet the filter conditions.
     */
    items?: ListSandboxesResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page for this query.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message. The value is success if the request is successful.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The pagination token for the next page. An empty value indicates that no more results are available.
     *
     * @example
     * next-token-1
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID, which is used to locate and troubleshoot issues.
     *
     * @example
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. A value of true indicates success, and a value of false indicates failure.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of records that meet the query conditions.
     *
     * @example
     * 27
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
