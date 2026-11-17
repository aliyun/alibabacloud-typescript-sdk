import * as $dara from '@darabonba/typescript';
export declare class ListMemorySessionsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The agent ID. This field is not returned if the session is not associated with an agent ID.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The creation time in RFC 3339 format with time zone.
     *
     * @example
     * 2026-09-23T10:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The string key-value tags set by the caller. A maximum of 16 tags are supported. A key can be up to 64 Unicode characters in length, and a value can be up to 1,024 Unicode characters in length. Empty strings are allowed. Nested objects or arrays are not supported.
     *
     * @example
     * {"topic":"hiking"}
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The business team ID defined by the caller. If specified, the value cannot be empty and can be up to 128 UTF-8 bytes in length.
     *
     * @example
     * team-001
     */
    teamId?: string;
    /**
     * @remarks
     * The session title.
     *
     * @example
     * Travel plan
     */
    title?: string;
    /**
     * @remarks
     * The user ID. This field is not returned if the session is not associated with a user ID.
     *
     * @example
     * user-001
     */
    userId?: string;
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
export declare class ListMemorySessionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of sessions.
     */
    items?: ListMemorySessionsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page.
     *
     * @example
     * 100
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * eyJvZmZzZXQiOjEwMH0=
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 01A00000-0000-0000-0000-000000000001
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * null
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
