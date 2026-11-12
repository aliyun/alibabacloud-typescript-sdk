import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterAndNodesParametersRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to clear binlogs. This parameter takes effect only when binlogs are disabled.
     *
     * @example
     * false
     */
    clearBinlog?: boolean;
    /**
     * @remarks
     * The cluster ID. The DBClusterStatus of the target cluster must be Running. You can call the DescribeDBClusters operation to check the current status. Usage notes: The DBClusterStatus of the cluster must be Running. You can call the DescribeDBClusters operation to verify the status.
     *
     * This parameter is required.
     *
     * @example
     * pc-**********
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The node IDs. You can set this parameter to modify the parameters of the cluster and the specified nodes. Separate multiple node IDs with commas (,).
     *
     * > If this parameter is left empty, only the cluster parameters are modified.
     *
     * @example
     * pi-**********,pi-**********
     */
    DBNodeIds?: string;
    /**
     * @remarks
     * Specifies whether to execute the parameter modification and cluster restart immediately or at a scheduled time. Valid values:
     *
     * - **false**: The task is executed at a scheduled time. This is the default value.
     *
     * - **true**: The task is executed immediately.
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
     * pcpg-**********
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The JSON string of parameters and their values.
     *
     * @example
     * {"wait_timeout":"86","innodb_old_blocks_time":"10"}
     */
    parameters?: string;
    /**
     * @remarks
     * The latest time to start the scheduled task. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format and in UTC.
     * > * The latest time must be at least 30 minutes later than the start time.
     * > * If `PlannedStartTime` is specified but this parameter is not, the latest start time defaults to 30 minutes after the start time. For example, if `PlannedStartTime` is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task will start no later than `2021-01-14T09:30:00Z`.
     *
     * @example
     * 2021-01-14T09:30:00Z
     */
    plannedEndTime?: string;
    /**
     * @remarks
     * The earliest time to start the scheduled task. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format and in UTC.
     * > * The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the allowed start time ranges from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
     * > * If this parameter is left empty, the task is executed immediately by default.
     *
     * @example
     * 2021-01-14T09:00:00Z
     */
    plannedStartTime?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The list of secondary clusters in the Global Database Network (GDN) that require parameter settings synchronization.
     *
     * @example
     * gdn-**********,gdn-**********
     */
    standbyClusterIdListNeedToSync?: string;
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
