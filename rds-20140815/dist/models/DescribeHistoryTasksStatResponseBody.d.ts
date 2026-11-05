import * as $dara from '@darabonba/typescript';
export declare class DescribeHistoryTasksStatResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The task status. Valid values:
     * - **Scheduled**: pending execution
     * - **Running**: running
     * - **Succeed**: succeeded
     * - **Failed**: failed
     * - **Cancelling**: being canceled
     * - **Canceled**: canceled
     * - **Waiting**: waiting for the scheduled time
     *
     * @example
     * Succeed,Waiting
     */
    status?: string;
    /**
     * @remarks
     * The total number of tasks.
     *
     * @example
     * 20
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
     * The list of task information.
     */
    items?: DescribeHistoryTasksStatResponseBodyItems[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
