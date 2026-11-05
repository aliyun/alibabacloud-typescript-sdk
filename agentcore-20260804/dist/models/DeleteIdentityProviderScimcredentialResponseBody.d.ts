import * as $dara from '@darabonba/typescript';
export declare class DeleteIdentityProviderSCIMCredentialResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. Use this code in combination with the HTTP status code and message to handle failures.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The processing status of this request, which is not equivalent to the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or error message. For asynchronous tasks, check the task result by using the corresponding query API.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID. Used to associate this call with troubleshooting. Keep this ID when a failure occurs.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. A value of true indicates that the request is processed successfully. For asynchronous writes, continue to query the task results.
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
