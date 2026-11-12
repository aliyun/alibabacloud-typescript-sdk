import * as $dara from '@darabonba/typescript';
export declare class GetMemoryStoreResponseBodyData extends $dara.Model {
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
     * The MemoryStore description.
     *
     * @example
     * Used to store long-term user preferences
     */
    description?: string;
    /**
     * @remarks
     * The custom extraction instructions.
     *
     * @example
     * Extract only long-term preferences explicitly expressed by the user
     */
    extractInstructions?: string;
    /**
     * @remarks
     * The MemoryStore ID.
     *
     * @example
     * ms-2f5f9c5a8d0e4c3b
     */
    memoryStoreId?: string;
    /**
     * @remarks
     * The MemoryStore name. It cannot be modified after creation.
     *
     * @example
     * customer-memory
     */
    memoryStoreName?: string;
    /**
     * @remarks
     * The lifecycle status of the MemoryStore.
     *
     * @example
     * Ready
     */
    status?: string;
    /**
     * @remarks
     * The last update time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
     *
     * @example
     * 2026-09-23T10:05:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The AgentCore workspace ID.
     *
     * @example
     * ws-2f5f9c5a8d0e4c3b
     */
    workspaceId?: string;
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
export declare class GetMemoryStoreResponseBody extends $dara.Model {
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
     * The MemoryStore details.
     */
    data?: GetMemoryStoreResponseBodyData;
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
