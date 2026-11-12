import * as $dara from '@darabonba/typescript';
export declare class UpgradeDBClusterVersionZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value on the client side. The value must be unique across different requests and is case-sensitive. It can contain up to 64 ASCII characters.
     *
     * @example
     * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
     */
    clientToken?: string;
    /**
     * @remarks
     * The ID of the PolarDB on ENS cluster. Only cluster IDs returned by the DescribeDBClustersZonal operation are supported. Before you call this operation, you must create an edge cluster by using ENS infrastructure. Standard PolarDB cluster IDs are not supported. Note: Only edge cluster IDs returned by DescribeDBClustersZonal are accepted, and the edge cluster must be created based on ENS.
     *
     * This parameter is required.
     *
     * @example
     * pc-a************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to immediately execute or schedule the kernel version upgrade. Valid values:
     *
     * - **false** (default): Scheduled execution.
     *
     * - **true**: Immediate execution.
     *
     * > You do not need to specify this parameter when you invoke this operation.
     *
     * @example
     * false
     */
    fromTimeService?: boolean;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The latest time to start the scheduled task. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
     * > * The latest time must be at least 30 minutes later than the start time.
     * > * If you specify `PlannedStartTime` but do not specify this parameter, the latest time to start the task defaults to 30 minutes after the start time. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts at `2021-01-14T09:30:00Z` at the latest.
     *
     * @example
     * 2021-01-14T09:30:00Z
     */
    plannedEndTime?: string;
    /**
     * @remarks
     * The earliest time to start the scheduled Milvus version upgrade task. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
     * > * The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the allowed start time ranges from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
     * > * If you leave this parameter empty, the Milvus version upgrade task is immediately executed by default.
     *
     * @example
     * 2022-04-28T14:00:00Z
     */
    plannedStartTime?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The version code of the target database engine version. You can obtain the value from the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation.
     *
     * @example
     * 20230707
     */
    targetDBRevisionVersionCode?: string;
    /**
     * @remarks
     * The version code of the target PolarProxy version. You can obtain the value from the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation.
     *
     * @example
     * 20240702
     */
    targetProxyRevisionVersionCode?: string;
    /**
     * @remarks
     * The kernel version upgrade label. Set the value to **INNOVATE**.
     *
     * > - This parameter applies only to upgrades from PolarDB for MySQL 8.0.1 to PolarDB for MySQL 8.0.2.
     * > - If you specify this parameter, you must set `UpgradePolicy` to **COLD**.
     *
     * @example
     * INNOVATE
     */
    upgradeLabel?: string;
    /**
     * @remarks
     * The kernel version upgrade policy. Valid values:
     *
     * - **HOT**: Hot upgrade.
     *
     * - **COLD**: Cold upgrade. Only PolarDB for MySQL 8.0 Cluster Edition supports this upgrade method.
     *
     * @example
     * HOT
     */
    upgradePolicy?: string;
    /**
     * @remarks
     * The upgrade type. Valid values:
     *
     * - **PROXY**: Upgrades only PolarProxy.
     *
     * - **DB**: Upgrades only the database engine.
     *
     * - **ALL** (default): Upgrades both PolarProxy and the database engine.
     *
     * @example
     * PROXY
     */
    upgradeType?: string;
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
