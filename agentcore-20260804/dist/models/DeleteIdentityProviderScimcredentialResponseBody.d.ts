import * as $dara from '@darabonba/typescript';
export declare class DeleteIdentityProviderSCIMCredentialResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. If the request fails, use this code together with the HTTP status code and message for troubleshooting.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code of the request. This does not indicate the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message indicating whether the request is accepted or an error message. For asynchronous tasks, check the task result by calling the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID. Retain this ID for troubleshooting if the request fails.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. A value of true indicates that the request is successful. For asynchronous write operations, you must continue to query the task result.
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
