import * as $dara from '@darabonba/typescript';
export declare class SearchMemoriesResponseBodyDataMemoriesMemoryContent extends $dara.Model {
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
export declare class SearchMemoriesResponseBodyDataMemoriesMemoryScope extends $dara.Model {
    /**
     * @remarks
     * The agent ID. The ID must be 1 to 128 bytes in length and encoded in UTF-8. The ID cannot contain a forward slash (/) or an asterisk (*). If the memory is not associated with an agent ID, this field is not returned.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The session ID. The ID must be 1 to 128 bytes in length and encoded in UTF-8. The ID cannot contain a forward slash (/) or an asterisk (*). If the memory is not associated with a session ID, this field is not returned.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The user ID. The ID must be 1 to 128 bytes in length and encoded in UTF-8. The ID cannot contain a forward slash (/) or an asterisk (*). If the memory is not associated with a user ID, this field is not returned.
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
     * The time when the memory was created.
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
    scope?: SearchMemoriesResponseBodyDataMemoriesMemoryScope;
    /**
     * @remarks
     * The time when the memory was last updated.
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
export declare class SearchMemoriesResponseBodyDataMemories extends $dara.Model {
    /**
     * @remarks
     * The matched memory.
     */
    memory?: SearchMemoriesResponseBodyDataMemoriesMemory;
    /**
     * @remarks
     * The relevance score.
     *
     * @example
     * 0.86
     */
    score?: number;
    /**
     * @remarks
     * The vector similarity.
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
     * The retrieval results.
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
