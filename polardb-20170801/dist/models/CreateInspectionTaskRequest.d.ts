import * as $dara from '@darabonba/typescript';
export declare class CreateInspectionTaskRequestDBClusterList extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB cluster to be inspected.
     *
     * @example
     * pc-test123456
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The region ID of the cluster to be inspected.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
export declare class CreateInspectionTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The cron expression of the inspection task, which specifies the periodic execution schedule.
     *
     * @example
     * 0 0 * * *
     */
    cronExpression?: string;
    /**
     * @remarks
     * The list of clusters associated with the inspection task.
     */
    DBClusterList?: CreateInspectionTaskRequestDBClusterList[];
    /**
     * @remarks
     * The region ID of the task.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-123
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The ID of the inspection space. This parameter is required. If it is not provided, the API returns InvalidSpaceId.Malformed (HTTP 400).
     *
     * @example
     * space-123
     */
    spaceId?: string;
    /**
     * @remarks
     * The description of the inspection task.
     *
     * @example
     * Periodic inspection task
     */
    taskDescription?: string;
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
