// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLockedSnapshotsResponseBodyLockedSnapshotsInfo extends $dara.Model {
  /**
   * @remarks
   * The cooling-off period of the compliance mode. Unit: hours.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * The end time of the cooling-off period in compliance mode. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC).
   * 
   * @example
   * 2025-10-15T13:00:00Z
   */
  coolOffPeriodExpiredTime?: string;
  /**
   * @remarks
   * The date and time at which the snapshot is locked. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC).
   * 
   * @example
   * 2025-10-15T10:00:00Z
   */
  lockCreationTime?: string;
  /**
   * @remarks
   * The lock duration. The snapshot lock automatically expires after the lock duration ends. Unit: days.
   * 
   * @example
   * 1
   */
  lockDuration?: number;
  /**
   * @remarks
   * The start time of the lock duration. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC). If you lock a snapshot that is in the Progressing state, the lock time is not calculated until the snapshot enters the Accomplished state.
   * 
   * @example
   * 2025-10-15T10:00:00Z
   */
  lockDurationStartTime?: string;
  /**
   * @remarks
   * The time when the lock expires. The time follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in the yyyy-MM-ddTHH:mm:ssZ format (in UTC).
   * 
   * @example
   * 2025-10-16T10:00:00Z
   */
  lockExpiredTime?: string;
  /**
   * @remarks
   * The lock status. Valid values:
   * 
   * *   compliance-cooloff: The snapshot is locked in compliance mode but is still in a cooling-off period. Snapshots cannot be deleted. However, users with the corresponding RAM permissions can unlock snapshots, extend or shorten the cooling-off period, and extend or shorten the lock duration.
   * *   compliance: The snapshot is locked in compliance mode and the cooling-off period has ended. Snapshots cannot be unlocked or deleted. However, users with the corresponding RAM permissions can extend the lock duration.
   * *   expired: The snapshot was once locked, but the lock duration has ended and the lock has expired. The snapshot is not locked and can be deleted.
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
   * Details of the locked snapshots.
   */
  lockedSnapshotsInfo?: DescribeLockedSnapshotsResponseBodyLockedSnapshotsInfo[];
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
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

