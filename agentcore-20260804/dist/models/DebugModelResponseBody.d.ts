import * as $dara from '@darabonba/typescript';
export declare class DebugModelResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The model connection ID.
     *
     * @example
     * mc-1
     */
    connectionId?: string;
    /**
     * @remarks
     * Indicates whether the model debugging is successful.
     */
    debugSuccess?: boolean;
    /**
     * @remarks
     * The error code returned when debugging fails.
     *
     * @example
     * UPSTREAM_MODEL_ERROR
     */
    errorCode?: string;
    /**
     * @remarks
     * The error description returned when debugging fails.
     *
     * @example
     * The model endpoint rejected the debug request.
     */
    errorMessage?: string;
    /**
     * @remarks
     * The number of input tokens consumed by this model debugging request.
     *
     * @example
     * 3
     */
    inputTokens?: number;
    /**
     * @remarks
     * The duration of this model debugging invocation, in milliseconds.
     *
     * @example
     * 12
     */
    latencyMs?: number;
    /**
     * @remarks
     * The model ID.
     *
     * @example
     * model-1
     */
    modelId?: string;
    /**
     * @remarks
     * The number of output tokens consumed by this model debugging response.
     *
     * @example
     * 2
     */
    outputTokens?: number;
    /**
     * @remarks
     * The text response returned by the model when model debugging succeeds. This field is empty if debugging fails.
     *
     * @example
     * ok
     */
    response?: string;
    /**
     * @remarks
     * The debugging result status.
     *
     * @example
     * NORMAL
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
export declare class DebugModelResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS if the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The model debugging result.
     */
    data?: DebugModelResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value is 200 if the request is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message about the request processing result.
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
     * request-1
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
