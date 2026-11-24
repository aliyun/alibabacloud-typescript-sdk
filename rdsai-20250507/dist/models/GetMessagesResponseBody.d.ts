import * as $dara from '@darabonba/typescript';
export declare class GetMessagesResponseBodyDataEvents extends $dara.Model {
    /**
     * @remarks
     * The tool invocation approval status.
     *
     * @example
     * pending
     */
    approvalStatus?: string;
    /**
     * @remarks
     * The tool invocation ID.
     *
     * @example
     * call-example
     */
    callId?: string;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * conversation-example
     */
    conversationId?: string;
    /**
     * @remarks
     * The tool invocation description.
     *
     * @example
     * Search ContextDB records
     */
    description?: string;
    /**
     * @remarks
     * The message ID.
     *
     * @example
     * message-example
     */
    messageId?: string;
    /**
     * @remarks
     * The tool approval round ID.
     *
     * @example
     * round-example
     */
    roundId?: string;
    /**
     * @remarks
     * The tool invocation parameters.
     */
    toolArguments?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The tool name.
     *
     * @example
     * contextdb.search
     */
    toolName?: string;
    answer?: string;
    event?: string;
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
export declare class GetMessagesResponseBodyDataMessageFiles extends $dara.Model {
    id?: string;
    previewUrl?: string;
    type?: string;
    /**
     * @remarks
     * The uploaded file ID.
     *
     * @example
     * file-example
     */
    uploadFileId?: string;
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
export declare class GetMessagesResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The reply.
     *
     * @example
     * The instance rm-bp14as9914vd3**** you inquired about has a disk usage of 23%, so no storage expansion is needed at the moment. If you need to view detailed configurations, check performance monitoring, or perform other operations on a specific instance, please let me know your specific requirements.
     */
    answer?: string;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 9cbbe885-b240-4803-9d15-6781a3fd****
     */
    conversationId?: string;
    /**
     * @remarks
     * The time when the message was created. The value is a UNIX timestamp in seconds.
     *
     * @example
     * 1763986004
     */
    createdAt?: string;
    /**
     * @remarks
     * The list of events.
     */
    events?: GetMessagesResponseBodyDataEvents[];
    /**
     * @remarks
     * The feedback.
     *
     * @example
     * like
     */
    feedback?: string;
    generationFinishedAt?: string;
    generationStartedAt?: string;
    generationStatus?: string;
    /**
     * @remarks
     * The message ID.
     *
     * @example
     * 84dc9f9b-424a-404d-9c36-35e9d000****
     */
    id?: string;
    lastSentEntryId?: string;
    messageFiles?: GetMessagesResponseBodyDataMessageFiles[];
    /**
     * @remarks
     * The query statement.
     *
     * @example
     * Disk usage of instance rm-bp14as9914vd3**** and whether capacity expansion is required
     */
    query?: string;
    /**
     * @remarks
     * The retrieved resources.
     */
    retrieverResources?: any[];
    streamKey?: string;
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
export declare class GetMessagesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The query results.
     */
    data?: GetMessagesResponseBodyData[];
    /**
     * @remarks
     * Indicates whether there is a next page.
     *
     * @example
     * true
     */
    hasMore?: boolean;
    /**
     * @remarks
     * The maximum number of query results.
     *
     * @example
     * 100
     */
    limit?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
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
