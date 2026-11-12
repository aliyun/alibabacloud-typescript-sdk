import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawTaskResponseBodyTaskError extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * INVALID_REQUEST
     */
    code?: string;
    /**
     * @remarks
     * The error details.
     *
     * @example
     * channelId format invalid
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
export declare class DescribePolarClawTaskResponseBodyTask extends $dara.Model {
    /**
     * @remarks
     * The timestamp when the task was created, in milliseconds.
     *
     * @example
     * 1778564698304
     */
    createdAtMs?: number;
    /**
     * @remarks
     * The error object. This object is returned when the task fails.
     *
     * @example
     * {}
     */
    error?: DescribePolarClawTaskResponseBodyTaskError;
    /**
     * @remarks
     * The name of the operation.
     *
     * @example
     * LoginPolarClawChannel
     */
    operation?: string;
    /**
     * @remarks
     * The task result object. This object is returned when the task succeeds. The content varies based on the operation.
     *
     * @example
     * {}
     */
    result?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The task status. Valid values: pending, running, succeeded, and failed.
     *
     * @example
     * running
     */
    state?: string;
    /**
     * @remarks
     * The task ID (UUID).
     *
     * @example
     * 5956e600-ce6e-4d11-9648-939ef3286e94
     */
    taskId?: string;
    /**
     * @remarks
     * The timestamp when the task was updated, in milliseconds.
     *
     * @example
     * 1778564750541
     */
    updatedAtMs?: number;
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
export declare class DescribePolarClawTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C890995A-CF06-4F4D-8DB8-DD26C2******
     */
    requestId?: string;
    /**
     * @remarks
     * The task object.
     *
     * @example
     * {}
     */
    task?: DescribePolarClawTaskResponseBodyTask;
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
