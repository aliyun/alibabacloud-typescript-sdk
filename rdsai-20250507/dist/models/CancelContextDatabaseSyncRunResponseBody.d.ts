import * as $dara from '@darabonba/typescript';
export declare class CancelContextDatabaseSyncRunResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The run ID, a system-generated UUID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    runId?: string;
    /**
     * @remarks
     * The run status after the cancellation request is submitted. For runs in the queued or running state, the operation immediately returns cancelling.
     *
     * @example
     * cancelling
     */
    status?: string;
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
export declare class CancelContextDatabaseSyncRunResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * Example value
     */
    code?: string;
    /**
     * @remarks
     * The returned data.
     */
    data?: CancelContextDatabaseSyncRunResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 1
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message.
     *
     * @example
     * Example value
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * id-001
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
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
