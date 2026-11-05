import * as $dara from '@darabonba/typescript';
export declare class ActivateMigrationTargetInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the target instance. You can invoke the DescribeDBInstances operation to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pgm-bp102g323jd4****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * Set the value to 1, which specifies a forced switchover.
     *
     * @example
     * 1
     */
    forceSwitch?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The reserved parameter. This parameter does not take effect.
     *
     * @example
     * 2022-02-25T06:57:41Z
     */
    switchTime?: string;
    /**
     * @remarks
     * The switchover time mode for cloud migration.
     *
     * Set the value to 0, which specifies an immediate switchover.
     *
     * @example
     * 0
     */
    switchTimeMode?: string;
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
