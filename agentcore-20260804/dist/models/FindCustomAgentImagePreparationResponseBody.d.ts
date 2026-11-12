import * as $dara from '@darabonba/typescript';
export declare class FindCustomAgentImagePreparationResponseBodyDataError extends $dara.Model {
    /**
     * @remarks
     * The business error code for image preparation. Used to identify the failure type. For the specific cause, see the message.
     *
     * @example
     * ImageSyncFailed
     */
    code?: string;
    /**
     * @remarks
     * The specific cause of the failure. It may include underlying errors such as image not found, authentication failure, network timeout, or certificate verification error. Passwords, tokens, or authentication headers are not returned. A general description is returned if the underlying cause is not provided.
     *
     * @example
     * tls: failed to verify certificate: x509: certificate signed by unknown authority
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
export declare class FindCustomAgentImagePreparationResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The ID of the target agent.
     *
     * @example
     * agent-example
     */
    agentId?: string;
    /**
     * @remarks
     * The error information. Returned only when the preparation fails. Otherwise, the value is null.
     */
    error?: FindCustomAgentImagePreparationResponseBodyDataError;
    /**
     * @remarks
     * The phase where the failure occurred. Returned only when the phase is FAILED. Otherwise, the value is null.
     *
     * @example
     * COPYING
     */
    failedPhase?: string;
    /**
     * @remarks
     * The current phase. Only SUCCEEDED indicates that the target version is deployed successfully.
     *
     * @example
     * FAILED
     */
    phase?: string;
    /**
     * @remarks
     * The ID of the task submitted in the console.
     *
     * @example
     * agent-example:1
     */
    preparationId?: string;
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
export declare class FindCustomAgentImagePreparationResponseBody extends $dara.Model {
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
     * The preparation query result. Check the phase for the asynchronous execution status.
     */
    data?: FindCustomAgentImagePreparationResponseBodyData;
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
     * 123e4567-e89b-12d3-a456-426614174000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the API call is successful.
     *
     * @example
     * true
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
