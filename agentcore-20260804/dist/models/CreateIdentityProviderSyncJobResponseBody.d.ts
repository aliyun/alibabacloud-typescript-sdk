import * as $dara from '@darabonba/typescript';
export declare class CreateIdentityProviderSyncJobResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The current execution step of the AgentCore asynchronous task. This parameter may not be returned if the task has not started.
     *
     * @example
     * SYNC
     */
    currentStep?: string;
    /**
     * @remarks
     * The failure summary of the asynchronous task. This parameter is not returned if no failure information is available. You can use this parameter together with taskId and requestId for troubleshooting.
     *
     * @example
     * The identity provider synchronization job failed.
     */
    failureReason?: string;
    /**
     * @remarks
     * The status of the synchronization task. Valid values:
     * - PENDING: The task is pending.
     * - RUNNING: The task is running.
     * - PAUSED: The task is paused.
     * - SUCCESS: The task is successful.
     * - FAILED: The task failed.
     * - CANCELED: The task is canceled.
     * The first three values are non-terminal states, and the last three are terminal states. Query the task until it reaches a terminal state to determine the result.
     *
     * @example
     * SUCCESS
     */
    status?: string;
    /**
     * @remarks
     * The number of user entries that have been locally read and written or updated, including existing users. This number does not represent the number of new users or the synchronization percentage. This parameter is not returned if no statistics are available.
     *
     * @example
     * 12
     */
    syncedUserCount?: number;
    /**
     * @remarks
     * The downstream AgentIdentity synchronization task ID. This parameter is not returned if the task is not created. You cannot use this ID instead of taskId to call GetIdentityProviderSyncJob.
     *
     * @example
     * syncjob_0123456789abcdef0123456789abcdef
     */
    synchronizationJobId?: string;
    /**
     * @remarks
     * The local AgentCore task ID returned by CreateIdentityProviderSyncJob. This is not the synchronizationJobId of AgentIdentity. You must use the same workspace and identity provider when querying the task.
     *
     * @example
     * 12345678-1234-4234-8234-123456789abc
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
export declare class CreateIdentityProviderSyncJobResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code of the API request. SUCCESS indicates that the request is successful, but does not indicate that the asynchronous synchronization task is complete.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The business data returned by the request.
     *
     * @example
     * {"taskId":"12345678-1234-4234-8234-123456789abc","status":"PENDING"}
     */
    data?: CreateIdentityProviderSyncJobResponseBodyData;
    /**
     * @remarks
     * The HTTP status code of the API request. This code does not indicate the execution result of the asynchronous task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message of the API request.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The unique identifier of the request. Provide this value when you troubleshoot issues.
     *
     * @example
     * 01234567-89AB-CDEF-0123-456789ABCDEF
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the API request is successful. To check whether the asynchronous task is complete, query the task status.
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
