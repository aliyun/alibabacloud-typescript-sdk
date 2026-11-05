import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterTimedScheduleTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-2ze2za3is7baay****
     */
    dbInstanceName?: string;
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
