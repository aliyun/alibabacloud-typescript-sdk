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
     * The time when the sandbox was created. The time is in the RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The time of the last activity of the sandbox. The time is in the RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:02:00Z
     */
    lastActiveAt?: string;
    /**
     * @remarks
     * The time of the last heartbeat of the sandbox. The time is in the RFC 3339 UTC format.
     *
     * @example
     * 2026-08-29T00:01:00Z
     */
    lastHeartbeatAt?: string;
    /**
     * @remarks
     * The maximum number of concurrent sessions allowed for the sandbox. This value is obtained from the auto-scaling configuration that takes effect at runtime. If auto-scaling is disabled or the configuration is unavailable, this value is empty.
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
     * The business status code. The value is SUCCESS when the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code. The value is 200 when the request is successful.
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
     * The response message. The value is success when the request is successful.
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
