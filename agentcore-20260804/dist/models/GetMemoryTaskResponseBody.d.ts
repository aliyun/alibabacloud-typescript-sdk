import * as $dara from '@darabonba/typescript';
export declare class GetMemoryTaskResponseBodyDataChanges extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the memory.
     *
     * This parameter is required.
     *
     * @example
     * mem-2f5f9c5a8d0e4c3b
     */
    memoryId?: string;
    /**
     * @remarks
     * The memory change type. Valid values:
     * - ADD: Adds a memory.
     * - UPDATE: Updates a memory.
     * - DELETE: Deletes a memory.
     *
     * This parameter is required.
     *
     * @example
     * ADD
     */
    operation?: string;
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
export declare class GetMemoryTaskResponseBodyDataError extends $dara.Model {
    /**
     * @remarks
     * The task error code.
     *
     * This parameter is required.
     *
     * @example
     * UnknownError
     */
    code?: string;
    /**
     * @remarks
     * The task error message.
     *
     * This parameter is required.
     *
     * @example
     * Memory extraction failed.
     */
    message?: string;
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
export declare class GetMemoryTaskResponseBodyDataInputEventsDataContent extends $dara.Model {
    /**
     * @remarks
     * The tool invocation parameters. This field is required for tool_call content blocks and supports JSON values.
     *
     * @example
     * {"city":"Hangzhou"}
     */
    arguments?: any;
    /**
     * @remarks
     * The tool invocation ID. This field is required for tool_call content blocks and is used to associate subsequent tool messages.
     *
     * @example
     * call-001
     */
    callId?: string;
    /**
     * @remarks
     * The data format identifier for the opaque content block. A non-empty string is required.
     *
     * @example
     * application/json
     */
    format?: string;
    /**
     * @remarks
     * The tool name. This field is required for the tool_call type.
     *
     * @example
     * get_weather
     */
    name?: string;
    /**
     * @remarks
     * The text of the text or reasoning content block. This field is required and can be an empty string.
     *
     * @example
     * The user likes hiking
     */
    text?: string;
    /**
     * @remarks
     * The type of the message content block. Valid values: text, reasoning, tool_call, json, and opaque.
     *
     * This parameter is required.
     *
     * @example
     * text
     */
    type?: string;
    /**
     * @remarks
     * The data carried by the content block. This field is required for json and opaque content blocks and supports JSON values.
     *
     * @example
     * {"preference":"hiking"}
     */
    value?: any;
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
export declare class GetMemoryTaskResponseBodyDataInputEventsDataParentScope extends $dara.Model {
    /**
     * @remarks
     * The agent ID defined by the caller. If provided, it cannot be empty and can contain up to 128 UTF-8 bytes.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The session ID defined by the caller. If provided, it cannot be empty and can contain up to 128 UTF-8 bytes.
     *
     * This parameter is required.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The business team ID defined by the caller. If provided, it cannot be empty and can contain up to 128 UTF-8 bytes.
     *
     * @example
     * team-001
     */
    teamId?: string;
    /**
     * @remarks
     * The business user ID defined by the caller. If provided, it cannot be empty and can contain up to 128 UTF-8 bytes.
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
export declare class GetMemoryTaskResponseBodyDataInputEventsData extends $dara.Model {
    /**
     * @remarks
     * The tool invocation ID. It is used to associate a tool invocation with its response message.
     *
     * @example
     * call-001
     */
    callId?: string;
    /**
     * @remarks
     * The list of message content blocks. This field is required and can be an empty array.
     */
    content?: GetMemoryTaskResponseBodyDataInputEventsDataContent[];
    /**
     * @remarks
     * The list of visible event IDs referenced by the summary. This field cannot be empty.
     */
    eventIds?: string[];
    /**
     * @remarks
     * The event ID that serves as the cutoff position for historical references in the parent session.
     *
     * @example
     * evt-2f5f9c5a8d0e4c3b
     */
    parentEventId?: string;
    /**
     * @remarks
     * The full association scope of the parent session. Each dimension must be consistent with those specified when the parent session was created.
     */
    parentScope?: GetMemoryTaskResponseBodyDataInputEventsDataParentScope;
    /**
     * @remarks
     * The message role. Valid values: system, developer, user, assistant, and tool. The tool role also requires a callId.
     *
     * @example
     * user
     */
    role?: string;
    /**
     * @remarks
     * The summary content for the referenced events. This field cannot be empty.
     *
     * @example
     * The user plans a weekend hiking trip
     */
    summary?: string;
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
export declare class GetMemoryTaskResponseBodyDataInputEvents extends $dara.Model {
    /**
     * @remarks
     * The event content. Select fields based on the event type. For message events, use role, content, and an optional callId. For compaction events, use eventIds and summary. For fork events, use parentScope and parentEventId. Do not mix fields from different event types.
     *
     * This parameter is required.
     */
    data?: GetMemoryTaskResponseBodyDataInputEventsData;
    /**
     * @remarks
     * The unique identifier of the event.
     *
     * This parameter is required.
     *
     * @example
     * evt-2f5f9c5a8d0e4c3b
     */
    eventId?: string;
    /**
     * @remarks
     * The actual occurrence time of the event in Unix milliseconds, provided by the caller.
     *
     * This parameter is required.
     *
     * @example
     * 1758614400000
     */
    timestamp?: number;
    /**
     * @remarks
     * The event type. Valid values:
     * - message: message
     * - compaction: summary
     * - fork: session branch
     *
     * This parameter is required.
     *
     * @example
     * message
     */
    type?: string;
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
export declare class GetMemoryTaskResponseBodyDataInputMessages extends $dara.Model {
    /**
     * @remarks
     * The body content of the memory.
     *
     * This parameter is required.
     *
     * @example
     * The user likes hiking
     */
    content?: string;
    /**
     * @remarks
     * The reference time of this message in RFC 3339 format with time zone. If omitted, the request-level referenceTime is used. If both are omitted, the current request time is used.
     *
     * @example
     * 2023-05-08T13:56:00+08:00
     */
    referenceTime?: string;
    /**
     * @remarks
     * The message role. For example, user indicates the user, and assistant indicates the assistant.
     *
     * This parameter is required.
     *
     * @example
     * user
     */
    role?: string;
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
export declare class GetMemoryTaskResponseBodyDataInput extends $dara.Model {
    /**
     * @remarks
     * The list of session events to be processed.
     */
    events?: GetMemoryTaskResponseBodyDataInputEvents[];
    /**
     * @remarks
     * The list of messages to be processed.
     */
    messages?: GetMemoryTaskResponseBodyDataInputMessages[];
    /**
     * @remarks
     * The string key-value tags set by the caller. A maximum of 16 tags are supported. A key can contain up to 64 Unicode characters, and a value can contain up to 1024 Unicode characters. Empty strings are allowed. Nested objects or arrays are not supported.
     *
     * @example
     * {"topic":"hiking"}
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The reference time for interpreting relative times in the content, in RFC 3339 format with a time zone. If not provided, the time of the current request is used.
     *
     * @example
     * 2023-05-08T13:56:00+08:00
     */
    referenceTime?: string;
    /**
     * @remarks
     * The raw text to be extracted for this task.
     *
     * @example
     * The user likes hiking
     */
    text?: string;
    /**
     * @remarks
     * The input content format. Valid values:
     * - text: text
     * - messages: message list
     * - events: event list
     *
     * This parameter is required.
     *
     * @example
     * events
     */
    type?: string;
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
export declare class GetMemoryTaskResponseBodyDataMemories extends $dara.Model {
    /**
     * @remarks
     * The long-term memory ID.
     *
     * This parameter is required.
     *
     * @example
     * mem-2f5f9c5a8d0e4c3b
     */
    memoryId?: string;
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
export declare class GetMemoryTaskResponseBodyDataStrategyConfig extends $dara.Model {
    /**
     * @remarks
     * The custom extraction instructions used to restrict the content to be retained. If a conflict occurs with the memory base extraction instructions, this rule prevails. The auto type does not support non-empty instructions.
     *
     * @example
     * Retain only long-term preferences explicitly expressed by the user
     */
    instruction?: string;
    /**
     * @remarks
     * The memory extraction strategy type. Valid values:
     * - auto: automatic extraction that currently generates semantic memories
     * - semantic: semantic memory
     * - skill: skill
     * - user_profile: user preference
     * - session_summary: session summary
     *
     * This parameter is required.
     *
     * @example
     * auto
     */
    type?: string;
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
export declare class GetMemoryTaskResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of memory changes generated by the task, excluding memories that are not modified.
     */
    changes?: GetMemoryTaskResponseBodyDataChanges[];
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
     * The task error returned only when the status is FAILED or UNKNOWN. This does not indicate that the current query failed.
     */
    error?: GetMemoryTaskResponseBodyDataError;
    /**
     * @remarks
     * The task completion time in RFC 3339 format with time zone. This field is not returned if the task has not finished.
     *
     * @example
     * 2026-09-23T10:00:01Z
     */
    finishedAt?: string;
    /**
     * @remarks
     * The input content processed by this task.
     */
    input?: GetMemoryTaskResponseBodyDataInput;
    /**
     * @remarks
     * The number of messages, events, or text entries input for this task.
     *
     * @example
     * 8
     */
    inputMessageCount?: number;
    /**
     * @remarks
     * The number of tokens in the input content for this task.
     *
     * @example
     * 120
     */
    inputTokenCount?: number;
    /**
     * @remarks
     * Returned only when the task succeeds. An empty array is allowed.
     */
    memories?: GetMemoryTaskResponseBodyDataMemories[];
    /**
     * @remarks
     * The task start time in RFC 3339 format with time zone. This field is not returned if the task has not started.
     *
     * @example
     * 2026-09-23T10:00:00Z
     */
    startedAt?: string;
    /**
     * @remarks
     * The extraction task status.
     *
     * @example
     * SUCCEEDED
     */
    status?: string;
    /**
     * @remarks
     * The extraction strategy used for this task.
     */
    strategyConfig?: GetMemoryTaskResponseBodyDataStrategyConfig;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * task-2f5f9c5a8d0e4c3b
     */
    taskId?: string;
    /**
     * @remarks
     * The task trigger type. Valid values:
     * - AUTO: Automatically triggered by session events.
     * - MANUAL: Triggered when writing to memory.
     *
     * @example
     * AUTO
     */
    triggerType?: string;
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
export declare class GetMemoryTaskResponseBody extends $dara.Model {
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
     * The task details.
     */
    data?: GetMemoryTaskResponseBodyData;
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
