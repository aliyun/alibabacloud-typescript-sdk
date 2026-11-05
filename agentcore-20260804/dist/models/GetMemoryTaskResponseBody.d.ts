import * as $dara from '@darabonba/typescript';
export declare class GetMemoryTaskResponseBodyDataError extends $dara.Model {
    /**
     * @remarks
     * The task error code.
     *
     * @example
     * UnknownError
     */
    code?: string;
    /**
     * @remarks
     * The task error message.
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
export declare class GetMemoryTaskResponseBodyDataMemories extends $dara.Model {
    /**
     * @remarks
     * The long-term memory ID.
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
export declare class GetMemoryTaskResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The task error returned only when the status is FAILED or UNKNOWN. This does not indicate that the current query failed.
     */
    error?: GetMemoryTaskResponseBodyDataError;
    /**
     * @remarks
     * The memories returned only when the status is SUCCEEDED. An empty array is allowed.
     */
    memories?: GetMemoryTaskResponseBodyDataMemories[];
    /**
     * @remarks
     * The extraction task status.
     *
     * This parameter is required.
     *
     * @example
     * SUCCEEDED
     */
    status?: string;
    /**
     * @remarks
     * The task ID.
     *
     * This parameter is required.
     *
     * @example
     * task-2f5f9c5a8d0e4c3b
     */
    taskId?: string;
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
