import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterTimedScheduleTaskResponseBodyTaskList extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rm-2ze2za3is7baay****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The modified parameter settings.
     *
     * @example
     * {"auto_increment_increment":"1000","back_log":"99"}
     */
    parameters?: string;
    /**
     * @remarks
     * The status. Valid values:
     * * **PENDING**: Pending.
     * * **EXECUTING**: Executing.
     * * **COMPLETED**: Completed.
     * * **EXECUTING**: Failed.
     *
     * @example
     * PENDING
     */
    status?: string;
    /**
     * @remarks
     * The effective period of the parameter modification.
     *
     * @example
     * 2022-05-06T09:24:00Z
     */
    switchTime?: string;
    /**
     * @remarks
     * The ID of the scheduled parameter modification task.
     *
     * @example
     * 27056921
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
export declare class DescribeParameterTimedScheduleTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A807C95D-410C-5BB5-96C0-C6E09F2C3D36
     */
    requestId?: string;
    /**
     * @remarks
     * The list of scan tasks.
     */
    taskList?: DescribeParameterTimedScheduleTaskResponseBodyTaskList[];
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
