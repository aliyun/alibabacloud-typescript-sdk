import * as $dara from '@darabonba/typescript';
export declare class ListMemoriesResponseBodyItemsContent extends $dara.Model {
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
export declare class ListMemoriesResponseBodyItemsScope extends $dara.Model {
    /**
     * @remarks
     * The agent ID. The value must be 1 to 128 bytes in length and encoded in UTF-8. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with an agent ID.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The session ID. The value must be 1 to 128 bytes in length and encoded in UTF-8. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a session ID.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The user ID. The value must be 1 to 128 bytes in length and encoded in UTF-8. The value cannot contain a forward slash (/) or an asterisk (*). This field is not returned if the memory is not associated with a user ID.
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
export declare class ListMemoriesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The memory content.
     */
    content?: ListMemoriesResponseBodyItemsContent;
    /**
     * @remarks
     * The creation time.
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
    scope?: ListMemoriesResponseBodyItemsScope;
    /**
     * @remarks
     * The last update time.
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
export declare class ListMemoriesResponseBody extends $dara.Model {
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
     * The list of memory records.
     */
    items?: ListMemoriesResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page.
     *
     * @example
     * 50
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
     * eyJvZmZzZXQiOjEwfQ==
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
