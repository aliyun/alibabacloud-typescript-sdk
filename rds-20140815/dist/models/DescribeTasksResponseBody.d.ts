import * as $dara from '@darabonba/typescript';
export declare class DescribeTasksResponseBodyItemsTaskProgressInfo extends $dara.Model {
    beginTime?: string;
    currentStepName?: string;
    DBName?: string;
    expectedFinishTime?: string;
    finishTime?: string;
    progress?: string;
    progressInfo?: string;
    remain?: number;
    status?: string;
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
export declare class DescribeTasksResponseBodyItems extends $dara.Model {
    taskProgressInfo?: DescribeTasksResponseBodyItemsTaskProgressInfo[];
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
    items?: DescribeTasksResponseBodyItems;
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
     * The number of entries returned on the current page.
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
     * A103039D-B1B2-4C57-B989-7D7C0DA95426
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 40
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
