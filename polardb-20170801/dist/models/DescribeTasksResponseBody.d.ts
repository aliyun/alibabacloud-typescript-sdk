import * as $dara from '@darabonba/typescript';
export declare class DescribeTasksResponseBodyTasksTask extends $dara.Model {
    beginTime?: string;
    currentStepName?: string;
    DBName?: string;
    expectedFinishTime?: string;
    finishTime?: string;
    progress?: number;
    progressInfo?: string;
    remain?: number;
    stepProgressInfo?: string;
    stepsInfo?: string;
    taskAction?: string;
    taskErrorCode?: string;
    taskErrorMessage?: string;
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
export declare class DescribeTasksResponseBodyTasks extends $dara.Model {
    task?: DescribeTasksResponseBodyTasksTask[];
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
export declare class DescribeTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID associated with the task.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end time of the query.
     *
     * The time is in the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mmZ).
     *
     * @example
     * 2020-12-02T03:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of records on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4352AD99-9FF5-41A6-A319-068089******
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query.
     *
     * The time is in the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mmZ).
     *
     * @example
     * 2020-11-30T00:00Z
     */
    startTime?: string;
    tasks?: DescribeTasksResponseBodyTasks;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
