import * as $dara from '@darabonba/typescript';
export declare class DeleteParameterTimedScheduleTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the instance.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The ID of the scheduled task for parameter modification.
     *
     * @example
     * 41698
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
