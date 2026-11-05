import * as $dara from '@darabonba/typescript';
export declare class ListSandboxesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The number of active sessions for this sandbox.
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
     * The time of the last activity on the sandbox, in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:02:00Z
     */
    lastActiveAt?: string;
    /**
     * @remarks
     * The time of the last heartbeat from the sandbox, in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:01:00Z
     */
    lastHeartbeatAt?: string;
    /**
     * @remarks
     * The maximum number of concurrent sessions allowed for this sandbox, derived from the auto scaling configuration in effect at runtime. This value is empty if auto scaling is not enabled or the configuration is unavailable.
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
     * The sandbox ID. You can call the ListSandboxes operation to query sandbox IDs.
     *
     * @example
     * sbx-2
     */
    sandboxId?: string;
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
     * The business status code. The value SUCCESS is returned if the request was successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code. The value 200 is returned if the request was successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of sandboxes that match the filter conditions.
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
     * The response message. The value success is returned if the request was successful.
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
     * Indicates whether the request was successful. Valid values:
     * - true: The request was successful.
     * - false: The request failed.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of records that match the query conditions.
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
