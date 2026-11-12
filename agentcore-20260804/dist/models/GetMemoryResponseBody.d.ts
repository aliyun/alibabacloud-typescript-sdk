import * as $dara from '@darabonba/typescript';
export declare class GetMemoryResponseBodyDataContent extends $dara.Model {
    /**
     * @remarks
     * The memory text.
     *
     * @example
     * The user likes hiking
     */
    text?: string;
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
export declare class GetMemoryResponseBodyDataScope extends $dara.Model {
    /**
     * @remarks
     * The agent ID. The length is limited to 1 to 128 UTF-8 bytes. It cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with an agent ID.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The session ID. The length is limited to 1 to 128 UTF-8 bytes. It cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a session ID.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The user ID. The length is limited to 1 to 128 UTF-8 bytes. It cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a user ID.
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
export declare class GetMemoryResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The memory content.
     */
    content?: GetMemoryResponseBodyDataContent;
    /**
     * @remarks
     * The creation time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
     *
     * @example
     * 2026-09-23T10:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The long-term memory ID.
     *
     * @example
     * mem-2f5f9c5a8d0e4c3b
     */
    memoryId?: string;
    /**
     * @remarks
     * The memory metadata.
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The memory scope.
     */
    scope?: GetMemoryResponseBodyDataScope;
    /**
     * @remarks
     * The last update time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
     *
     * @example
     * 2026-09-23T10:05:00Z
     */
    updatedAt?: string;
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
export declare class GetMemoryResponseBody extends $dara.Model {
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
     * The long-term memory details.
     */
    data?: GetMemoryResponseBodyData;
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
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
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
