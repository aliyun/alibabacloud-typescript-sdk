// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBClusterVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to immediately run the kernel upgrade task. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * >  This parameter is not required when you call the operation.
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest start time to run the task that updates the kernel version of the cluster. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > *   The value of this parameter must be at least 30 minutes later than the value of PlannedStartTime.
   * >*   If you specify `PlannedStartTime` but do not specify PlannedEndTime, the latest start time of the task is `PlannedEndTime + 30 minutes`. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and do not specify PlannedEndTime, the latest start time of the task is set to `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest start time to run the task that updates the kernel version of the cluster. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The earliest start time of the task can be a point in time within the next 72 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a point in time from `2021-01-14T09:00:00Z` to `2021-01-17T09:00:00Z`.
   * 
   * *   If you do not specify this parameter, the kernel update task runs immediately after you submit the request.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the db version to which you want to upgrade the cluster. You can call the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation to query the version code.
   * 
   * @example
   * 20230707
   */
  targetDBRevisionVersionCode?: string;
  /**
   * @remarks
   * The code of the proxy version to which you want to upgrade the cluster. You can call the [DescribeDBClusterVersion](https://help.aliyun.com/document_detail/2319145.html) operation to query the version code.
   * 
   * @example
   * 20240702
   */
  targetProxyRevisionVersionCode?: string;
  /**
   * @remarks
   * The upgrade tag. The value is fixed as **INNOVATE**.
   * 
   * > *   This parameter is applicable only when you upgrade PolarDB for MySQL 8.0.1 to PolarDB for MySQL 8.0.2.
   * >*   If you specify this parameter, you must set `UpgradePolicy` to **COLD**.
   * 
   * @example
   * INNOVATE
   */
  upgradeLabel?: string;
  /**
   * @remarks
   * The engine version upgrade policy. Valid values:
   * 
   * *   **HOT**: hot upgrade.
   * *   **COLD**: cold upgrade. Only PolarDB for MySQL 8.0 Cluster Edition supports this upgrade method.
   * 
   * @example
   * HOT
   */
  upgradePolicy?: string;
  /**
   * @remarks
   * The update type. Valid values:
   * 
   * *   **PROXY**: specifies to upgrade PloarProxy.
   * *   **DB**: specifies to upgrade the kernel version.
   * *   **ALL**: specifies to upgrade both PloarProxy and kernel version.
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

