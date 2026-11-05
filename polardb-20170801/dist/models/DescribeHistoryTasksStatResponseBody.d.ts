import * as $dara from '@darabonba/typescript';
export declare class DescribeHistoryTasksStatResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The task status.
     *
     * - Scheduled: The task is waiting to be executed.
     *
     * - Running: The task is running.
     *
     * - Succeed: The task is successful.
     *
     * - Failed: The task failed.
     *
     * - Cancelling: The task is being canceled.
     *
     * - Canceled: The task is canceled.
     *
     * - Waiting: The task is waiting for a scheduled time.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 13
     */
    totalCount?: number;
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
export declare class DescribeHistoryTasksStatResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of tasks.
     */
    items?: DescribeHistoryTasksStatResponseBodyItems[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 45D24263-7E3A-4140-9472-************
     */
    requestId?: string;
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
