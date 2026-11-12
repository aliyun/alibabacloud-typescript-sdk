// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBClusterVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, such as the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to execute the kernel version upgrade immediately or on a schedule. Valid values:
   * 
   * - **false** (default): The upgrade is executed on a schedule.
   * 
   * - **true**: The upgrade is executed immediately.
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
   * The latest time to start the scheduled task. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and displayed in UTC.
   * > * The latest time must be at least 30 minutes later than the start time.
   * > * If you specify PlannedStartTime but do not specify this parameter, the latest time to start the task defaults to the start time plus 30 minutes. For example, if PlannedStartTime is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task starts at `2021-01-14T09:30:00Z` at the latest.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled Milvus version upgrade task. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and displayed in UTC.
   * > * The start time must be within the next 72 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the allowed start time ranges from `2021-01-14T09:00:00Z` to `2021-01-17T09:00:00Z`.
   * > * If you leave this parameter empty, the Milvus version upgrade task is executed immediately by default.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The VersionCode of the target database version. You can obtain the value from the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation.
   * 
   * @example
   * 20230707
   */
  targetDBRevisionVersionCode?: string;
  /**
   * @remarks
   * The VersionCode of the target PolarProxy version. You can obtain the value from the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation.
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
   * > - When you specify this parameter, you must set UpgradePolicy to **COLD**.
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
   * - **COLD**: Cold upgrade. Currently, only PolarDB for MySQL 8.0 Cluster Edition supports this upgrade method.
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
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetDBRevisionVersionCode: 'TargetDBRevisionVersionCode',
      targetProxyRevisionVersionCode: 'TargetProxyRevisionVersionCode',
      upgradeLabel: 'UpgradeLabel',
      upgradePolicy: 'UpgradePolicy',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetDBRevisionVersionCode: 'string',
      targetProxyRevisionVersionCode: 'string',
      upgradeLabel: 'string',
      upgradePolicy: 'string',
      upgradeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

