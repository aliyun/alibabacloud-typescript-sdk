import * as $dara from '@darabonba/typescript';
export declare class ModifyDBNodesParametersRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The node IDs. You can specify multiple node IDs separated by commas (,).
     *
     * This parameter is required.
     *
     * @example
     * pi-****************， pi-****************
     */
    DBNodeIds?: string;
    /**
     * @remarks
     * Specifies whether to immediately execute or schedule the parameter modification and restart. Valid values:
     * - false: schedules the task. This is the default value.
     * - true: immediately executes the task.
     *
     * @example
     * false
     */
    fromTimeService?: boolean;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The parameter template ID.
     *
     * @example
     * pcpg-**************
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The JSON string of parameters and their values. Only node-level parameters can be modified. You can call the DescribeDBClusterParameters operation and select parameters where IsNodeAvailable is set to 1 and IsModifiable is set to true. To modify cluster-level parameters, call the ModifyDBClusterParameters operation.
     *
     * @example
     * {"loose_imci_optimize_const_join_memory":"ON"}
     */
    parameters?: string;
    /**
     * @remarks
     * The latest time to start the scheduled task. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2022-04-28T14:30:00Z
     */
    plannedEndTime?: string;
    /**
     * @remarks
     * The earliest time to start the scheduled kernel version upgrade task within the specified time window. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2022-04-28T14:00:00Z
     */
    plannedStartTime?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
