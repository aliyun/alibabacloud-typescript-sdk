// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLockedSnapshotsResponseBodyLockedSnapshotsInfo extends $dara.Model {
  /**
   * @remarks
   * The cooling-off period for compliance mode. Unit: hours.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * The time when the cooling-off period for compliance mode ends. The time follows the [ISO 8601](https://www.alibabacloud.com/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-10-15T13:00:00Z
   */
  coolOffPeriodExpiredTime?: string;
  /**
   * @remarks
   * The time when the snapshot was locked. The time follows the [ISO 8601](https://www.alibabacloud.com/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * The start time of the lock duration. The time follows the [ISO 8601](https://www.alibabacloud.com/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. If a snapshot in the progressing state is locked, the lock duration starts only after the snapshot enters the accomplished state.
   * 
   * @example
   * 2025-10-15T10:00:00Z
   */
  lockDurationStartTime?: string;
  /**
   * @remarks
   * The time when the lock expires. The time follows the [ISO 8601](https://www.alibabacloud.com/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-10-16T10:00:00Z
   */
  lockExpiredTime?: string;
  /**
   * @remarks
   * The lock mode. Valid values: 
   * - compliance: The snapshot is locked in compliance mode. A snapshot locked in compliance mode cannot be unlocked by any user and can be deleted only after the lock duration expires. Users cannot shorten the lock duration, but users with the required RAM permissions can extend the lock duration at any time. When locking a snapshot in compliance mode, you can optionally specify a cooling-off period.
   * 
   * @example
   * compliance
   */
  lockMode?: string;
  /**
   * @remarks
   * The lock status. Valid values: 
   * - compliance-cooloff: The snapshot is locked in compliance mode but is still within the cooling-off period. The snapshot cannot be deleted, but users with the required RAM permissions can unlock the snapshot, extend or shorten the cooling-off period, or extend or shorten the lock duration. 
   * - compliance: The snapshot is locked in compliance mode and the cooling-off period has ended. The snapshot cannot be unlocked or deleted, but users with the required RAM permissions can extend the lock duration. 
   * - expired: The snapshot was previously locked, but the lock duration has ended and the lock has expired. The snapshot is currently unlocked and can be deleted.
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
   * The collection of locked snapshot information.
   */
  lockedSnapshotsInfo?: DescribeLockedSnapshotsResponseBodyLockedSnapshotsInfo[];
  /**
   * @remarks
   * The pagination token returned in this call.
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

