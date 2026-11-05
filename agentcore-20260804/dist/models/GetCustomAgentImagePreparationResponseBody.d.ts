import * as $dara from '@darabonba/typescript';
export declare class GetCustomAgentImagePreparationResponseBodyDataError extends $dara.Model {
    /**
     * @remarks
     * The business error code for image preparation. This code is used to identify the failure type. For the specific cause, see the message parameter.
     *
     * @example
     * ImageSyncFailed
     */
    code?: string;
    /**
     * @remarks
     * The specific cause of the failure. This may include underlying errors such as image not found, authentication failure, network timeout, or certificate verification error. Passwords, tokens, or authentication headers are not returned. If the underlying system does not provide a cause, a general description is returned.
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
export declare class GetCustomAgentImagePreparationResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The target agent ID.
     *
     * @example
     * agent-example
     */
    agentId?: string;
    /**
     * @remarks
     * The security error. This parameter is returned only when the task fails. Otherwise, null is returned.
     */
    error?: GetCustomAgentImagePreparationResponseBodyDataError;
    /**
     * @remarks
     * The failed phase. This parameter is returned only when the phase is FAILED. Otherwise, null is returned.
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
     * The Console submission task ID.
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
export declare class GetCustomAgentImagePreparationResponseBody extends $dara.Model {
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
     * The preparation query result. Check the phase parameter for the asynchronous execution status.
     */
    data?: GetCustomAgentImagePreparationResponseBodyData;
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
