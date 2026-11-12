import * as $dara from '@darabonba/typescript';
export declare class UpdateMemoryStoreResponseBodyData extends $dara.Model {
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
     * The description of the memory store.
     *
     * @example
     * Used to save long-term user preferences
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
     * The memory store ID.
     *
     * @example
     * ms-2f5f9c5a8d0e4c3b
     */
    memoryStoreId?: string;
    /**
     * @remarks
     * The name of the memory store. It cannot be modified after creation.
     *
     * @example
     * customer-memory
     */
    memoryStoreName?: string;
    /**
     * @remarks
     * The lifecycle state of the memory store.
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
export declare class UpdateMemoryStoreResponseBody extends $dara.Model {
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
     * The memory store details.
     */
    data?: UpdateMemoryStoreResponseBodyData;
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
