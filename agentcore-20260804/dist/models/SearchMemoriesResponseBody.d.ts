import * as $dara from '@darabonba/typescript';
export declare class SearchMemoriesResponseBodyDataMemoriesMemoryContent extends $dara.Model {
    /**
     * @remarks
     * The memory text.
     *
     * This parameter is required.
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
export declare class SearchMemoriesResponseBodyDataMemoriesMemoryScope extends $dara.Model {
    /**
     * @remarks
     * The agent ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with an agent ID.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The session ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a session ID.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The business team ID defined by the caller. If provided, it cannot be empty and can be up to 128 UTF-8 bytes in length.
     *
     * @example
     * team-001
     */
    teamId?: string;
    /**
     * @remarks
     * The user ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a user ID.
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
export declare class SearchMemoriesResponseBodyDataMemoriesMemory extends $dara.Model {
    /**
     * @remarks
     * The memory content.
     */
    content?: SearchMemoriesResponseBodyDataMemoriesMemoryContent;
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
     *
     * @example
     * {"topic":"hiking"}
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The memory scope.
     */
    scope?: SearchMemoriesResponseBodyDataMemoriesMemoryScope;
    /**
     * @remarks
     * The memory source. Valid values: session_extraction (extracted from session events), content_extraction (extracted from text or messages), and direct (written directly).
     *
     * @example
     * session_extraction
     */
    source?: string;
    /**
     * @remarks
     * The memory content type. Valid values: semantic (semantic memory), skill (skill), user_profile (user preference), and session_summary (session summary).
     *
     * @example
     * semantic
     */
    type?: string;
    /**
     * @remarks
     * The last updated time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
     *
     * @example
     * 2026-09-23T10:05:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * Indicates whether the memory is valid. A value of false indicates that the memory is revoked and is not included in valid memory retrieval.
     */
    valid?: boolean;
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
export declare class SearchMemoriesResponseBodyDataMemories extends $dara.Model {
    /**
     * @remarks
     * The matched memory.
     *
     * This parameter is required.
     */
    memory?: SearchMemoriesResponseBodyDataMemoriesMemory;
    /**
     * @remarks
     * The relevance score.
     *
     * This parameter is required.
     *
     * @example
     * 0.86
     */
    score?: number;
    /**
     * @remarks
     * The vector similarity.
     *
     * This parameter is required.
     *
     * @example
     * 0.91
     */
    similarity?: number;
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
export declare class SearchMemoriesResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of retrieval results.
     *
     * This parameter is required.
     */
    memories?: SearchMemoriesResponseBodyDataMemories[];
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
export declare class SearchMemoriesResponseBody extends $dara.Model {
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
     * The retrieval result.
     */
    data?: SearchMemoriesResponseBodyData;
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
