// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLockedSnapshotsResponseBodyLockedSnapshotsInfo extends $dara.Model {
  /**
   * @remarks
   * The cool-off period for compliance mode, in hours.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * The time when the cool-off period ends. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard and is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2025-10-15T13:00:00Z
   */
  coolOffPeriodExpiredTime?: string;
  /**
   * @remarks
   * The time when the snapshot was locked. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard and is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2025-10-15T10:00:00Z
   */
  lockCreationTime?: string;
  /**
   * @remarks
   * The lock duration in days. The lock automatically expires when this period ends.
   * 
   * @example
   * 1
   */
  lockDuration?: number;
  /**
   * @remarks
   * The time when the lock duration starts. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard and is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format. If a snapshot in the progressing state is locked, its lock duration begins after it enters the accomplished state.
   * 
   * @example
   * 2025-10-15T10:00:00Z
   */
  lockDurationStartTime?: string;
  /**
   * @remarks
   * The time when the lock expires. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard and is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2025-10-16T10:00:00Z
   */
  lockExpiredTime?: string;
  /**
   * @remarks
   * The lock mode. Valid value:
   * 
   * - compliance: The snapshot is locked in compliance mode. A snapshot locked in compliance mode cannot be unlocked and can only be deleted after its lock duration expires. You cannot shorten the lock duration, but users with the required RAM permissions can extend the lock duration at any time. When you lock a snapshot in compliance mode, you can optionally specify a cool-off period.
   * 
   * @example
   * compliance
   */
  lockMode?: string;
  /**
   * @remarks
   * The lock status. Valid values:
   * 
   * - compliance-cooloff: The snapshot is locked in compliance mode and is in the cool-off period. The snapshot cannot be deleted. However, users with the required RAM permissions can unlock the snapshot and adjust the cool-off period or lock duration.
   * 
   * - compliance: The snapshot is locked in compliance mode, and its cool-off period has ended. The snapshot cannot be unlocked or deleted. However, users with the required RAM permissions can extend the lock duration.
   * 
   * - expired: The lock has expired, and the snapshot can be deleted.
   * 
   * @example
   * compliance-cooloff
   */
  lockStatus?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      coolOffPeriod: 'CoolOffPeriod',
      coolOffPeriodExpiredTime: 'CoolOffPeriodExpiredTime',
      lockCreationTime: 'LockCreationTime',
      lockDuration: 'LockDuration',
      lockDurationStartTime: 'LockDurationStartTime',
      lockExpiredTime: 'LockExpiredTime',
      lockMode: 'LockMode',
      lockStatus: 'LockStatus',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coolOffPeriod: 'number',
      coolOffPeriodExpiredTime: 'string',
      lockCreationTime: 'string',
      lockDuration: 'number',
      lockDurationStartTime: 'string',
      lockExpiredTime: 'string',
      lockMode: 'string',
      lockStatus: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLockedSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the locked snapshots.
   */
  lockedSnapshotsInfo?: DescribeLockedSnapshotsResponseBodyLockedSnapshotsInfo[];
  /**
   * @remarks
   * A token to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lockedSnapshotsInfo: 'LockedSnapshotsInfo',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockedSnapshotsInfo: { 'type': 'array', 'itemType': DescribeLockedSnapshotsResponseBodyLockedSnapshotsInfo },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lockedSnapshotsInfo)) {
      $dara.Model.validateArray(this.lockedSnapshotsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

