// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBClusterVersionZonalRequest extends $dara.Model {
  /**
   * @remarks
   * A unique, case-sensitive token that you provide to ensure the idempotence of the request. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-a************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to immediately perform or schedule the kernel upgrade. Valid values:
   * 
   * - **false** (default): Schedules the upgrade.
   * 
   * - **true**: Immediately performs the upgrade.
   * 
   * > You do not need to specify this parameter when you call this operation.
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time is in UTC.
   * 
   * > - The latest start time must be at least 30 minutes later than the earliest start time.
   * >
   * > - If you specify `PlannedStartTime` but not this parameter, the latest start time is 30 minutes after the value of `PlannedStartTime` by default. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled kernel upgrade. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time is in UTC.
   * 
   * > - The start time can be any point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a time in the range of `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * 
   * - If you do not specify this parameter, the upgrade task is executed immediately.
   * 
   * @example
   * 2022-04-28T14:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The version code of the target DB version. You can obtain this value by calling the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation.
   * 
   * @example
   * 20230707
   */
  targetDBRevisionVersionCode?: string;
  /**
   * @remarks
   * The version code of the target proxy version. You can obtain this value by calling the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation.
   * 
   * @example
   * 20240702
   */
  targetProxyRevisionVersionCode?: string;
  /**
   * @remarks
   * The label for the kernel version upgrade. Set the value to **INNOVATE**.
   * 
   * > - This parameter is applicable only when you upgrade a PolarDB for MySQL 8.0.1 cluster to PolarDB for MySQL 8.0.2.
   * >
   * > - If you specify this parameter, you must set `UpgradePolicy` to **COLD**.
   * 
   * @example
   * INNOVATE
   */
  upgradeLabel?: string;
  /**
   * @remarks
   * The upgrade policy for the kernel version. Valid values:
   * 
   * - **HOT**: hot upgrade
   * 
   * - **COLD**: cold upgrade. This upgrade method is supported only for PolarDB for MySQL 8.0 clusters.
   * 
   * @example
   * HOT
   */
  upgradePolicy?: string;
  /**
   * @remarks
   * The upgrade type. Valid values:
   * 
   * - **PROXY**: Upgrades only the database proxy (PolarProxy).
   * 
   * - **DB**: Upgrades only the kernel.
   * 
   * - **ALL** (default): Upgrades both the database proxy (PolarProxy) and the kernel.
   * 
   * @example
   * PROXY
   */
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

