import * as $dara from '@darabonba/typescript';
/**
 */
export declare class AddMemoriesRequestBodyMessages extends $dara.Model {
    /**
     * @remarks
     * The message content.
     *
     * This parameter is required.
     *
     * @example
     * The user likes hiking
     */
    content?: string;
    /**
     * @remarks
     * The message role.
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
export declare class AddMemoriesRequestBodyScope extends $dara.Model {
    /**
     * @remarks
     * The agent ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*).
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The session ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*).
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The user ID. The length is limited to 1 to 128 UTF-8 bytes. The value cannot contain a forward slash (/) or an asterisk (*).
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
export declare class AddMemoriesRequestBody extends $dara.Model {
    /**
     * @remarks
     * The message list. You must provide either this parameter or Text, but not both. You can specify 1 to 20 messages, and the total size of the content cannot exceed 32,000 UTF-8 bytes.
     */
    messages?: AddMemoriesRequestBodyMessages[];
    /**
     * @remarks
     * The string key-value metadata. You can specify up to 16 keys. The maximum length of a key is 64 characters, and the maximum length of a value is 1,024 characters.
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The time reference point for the batch of messages or text. The value must be in RFC 3339 format with a time zone and support fractional seconds.
     *
     * @example
     * 2023-05-08T13:56:00+08:00
     */
    referenceTime?: string;
    /**
     * @remarks
     * The write scope. UserId, AgentId, and SessionId are all optional.
     */
    scope?: AddMemoriesRequestBodyScope;
    /**
     * @remarks
     * Specifies whether to synchronously wait for the memory extraction to complete. Default value: true.
     */
    sync?: boolean;
    /**
     * @remarks
     * The text to be written directly. You must provide either this parameter or Messages, but not both. The size cannot exceed 32,000 UTF-8 bytes.
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
export declare class AddMemoriesRequest extends $dara.Model {
    /**
     * @remarks
     * The write memory request.
     *
     * This parameter is required.
     */
    body?: AddMemoriesRequestBody;
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
