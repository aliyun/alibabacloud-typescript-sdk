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
     * Indicates whether the model debugging was successful.
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
     * The error message returned when debugging fails.
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
     * The time consumed by this model debugging call, in milliseconds.
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
     * The text response returned by the model when debugging succeeds. This value is empty when debugging fails.
     *
     * @example
     * ok
     */
    response?: string;
    /**
     * @remarks
     * The debug result status.
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
     * The business status code. The value SUCCESS indicates success.
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
     * The HTTP status code. The value 200 indicates success.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request processing result message.
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
