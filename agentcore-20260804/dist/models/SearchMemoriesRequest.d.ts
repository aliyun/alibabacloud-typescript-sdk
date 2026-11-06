import * as $dara from '@darabonba/typescript';
export declare class SearchMemoriesRequestBodyScope extends $dara.Model {
    /**
     * @remarks
     * The agent ID. The ID must be 1 to 128 bytes in length and encoded in UTF-8. The ID cannot contain forward slashes (/) or asterisks (*). If the memory is not associated with an agent ID, this field is not returned.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The session ID. The ID must be 1 to 128 bytes in length and encoded in UTF-8. The ID cannot contain forward slashes (/) or asterisks (*). If the memory is not associated with a session ID, this field is not returned.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The user ID. The ID must be 1 to 128 bytes in length and encoded in UTF-8. The ID cannot contain forward slashes (/) or asterisks (*). If the memory is not associated with a user ID, this field is not returned.
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
export declare class SearchMemoriesRequestBody extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable reranking. Default value: true.
     */
    enableRerank?: boolean;
    /**
     * @remarks
     * The string key-value metadata for exact match. A maximum of 16 keys are supported. Each key can be up to 64 characters in length, and each value can be up to 1,024 characters in length.
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The minimum relevance score. Valid values: 0 to 1. Default value: 0.2. If both minScore and minSimilarity are specified, the AND logic is applied for filtering.
     *
     * @example
     * 0.2
     */
    minScore?: number;
    /**
     * @remarks
     * The minimum similarity. Valid values: 0 to 1. Default value: 0.3. If both minScore and minSimilarity are specified, the AND logic is applied for filtering.
     *
     * @example
     * 0.3
     */
    minSimilarity?: number;
    /**
     * @remarks
     * The query text. The text can be up to 8,192 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * What sports does the user like?
     */
    query?: string;
    /**
     * @remarks
     * The retrieval scope. UserId, AgentId, and SessionId are all optional.
     */
    scope?: SearchMemoriesRequestBodyScope;
    /**
     * @remarks
     * The number of returned results.
     *
     * @example
     * 10
     */
    topK?: number;
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
export declare class SearchMemoriesRequest extends $dara.Model {
    /**
     * @remarks
     * The semantic retrieval request.
     *
     * This parameter is required.
     */
    body?: SearchMemoriesRequestBody;
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
