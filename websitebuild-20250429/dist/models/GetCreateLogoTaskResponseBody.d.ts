import * as $dara from '@darabonba/typescript';
export declare class GetCreateLogoTaskResponseBodyTask extends $dara.Model {
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 604860995
     */
    taskId?: string;
    /**
     * @remarks
     * The current status of the task. Valid values:
     *
     * - pending: Pending execution.
     * - configuring: Being configured.
     * - success: Succeeded.
     * - failed: Failed.
     * - partialFailed: Partially failed.
     *
     * @example
     * SUCCESS
     */
    taskStatus?: string;
    /**
     * @remarks
     * The URL of the prefetched resource.
     */
    urls?: string[];
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
export declare class GetCreateLogoTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code. Valid values: If the request is successful, the ErrorCode field is not returned. If the request fails, the ErrorCode field is returned. For more information, see the error codes in this topic.
     *
     * @example
     * 0
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * aliuid:1998006665794443 assumeRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
     */
    errorMsg?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     *
     * @example
     * true
     */
    success?: boolean;
    /**
     * @remarks
     * The task information.
     */
    task?: GetCreateLogoTaskResponseBodyTask;
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
