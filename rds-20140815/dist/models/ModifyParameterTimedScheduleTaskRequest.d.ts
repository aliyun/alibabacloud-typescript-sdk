import * as $dara from '@darabonba/typescript';
export declare class ModifyParameterTimedScheduleTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the instance.
     *
     * @example
     * pgm-bp102g323jd4****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The scheduled switchover time to set. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     *
     * @example
     * 2022-05-06T09:24:00Z
     */
    switchTime?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 440437220
     */
    taskId?: number;
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
