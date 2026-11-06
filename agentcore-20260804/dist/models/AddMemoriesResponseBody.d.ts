import * as $dara from '@darabonba/typescript';
export declare class AddMemoriesResponseBodyDataMemories extends $dara.Model {
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
export declare class AddMemoriesResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The memory references. This parameter is returned only when sync is set to true. An empty array is allowed. This parameter is not returned together with taskId.
     */
    memories?: AddMemoriesResponseBodyDataMemories[];
    /**
     * @remarks
     * The task ID. This parameter is returned only when sync is set to false. This parameter is not returned together with memories.
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
export declare class AddMemoriesResponseBody extends $dara.Model {
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
     * The write result.
     */
    data?: AddMemoriesResponseBodyData;
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
