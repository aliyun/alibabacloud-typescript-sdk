// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockSnapshotResponseBodyLockedSnapshotInfo extends $dara.Model {
  /**
   * @remarks
   * The cool-off period in compliance mode. Unit: hours.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * The time when the cool-off period in compliance mode ends. The time follows the [ISO 8601](https://www.alibabacloud.com/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * The time when the lock duration starts. The time follows the [ISO 8601](https://www.alibabacloud.com/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. 
   * 
   * If you lock a snapshot that is in the progressing state, the lock duration starts only after the snapshot enters the accomplished state.
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
   * - compliance: The snapshot is locked in compliance mode. A snapshot locked in compliance mode cannot be unlocked by any user and can be deleted only after the lock duration expires. Users cannot shorten the lock duration, but users with the required RAM permissions can extend the lock duration at any time. When locking a snapshot in compliance mode, you can optionally specify a cool-off period.
   * 
   * @example
   * compliance
   */
  lockMode?: string;
  /**
   * @remarks
   * The lock status. Valid values: 
   * - compliance-cooloff: The snapshot is locked in compliance mode but is still within the cool-off period. The snapshot cannot be deleted, but users with the required RAM permissions can unlock the snapshot, extend or shorten the cool-off period, and extend or shorten the lock duration. 
   * - compliance: The snapshot is locked in compliance mode and the cool-off period has ended. The snapshot cannot be unlocked or deleted, but users with the required RAM permissions can extend the lock duration. 
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
   * s-9dp2qojdpdfmgfmf****
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

export class LockSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The locked snapshot information.
   */
  lockedSnapshotInfo?: LockSnapshotResponseBodyLockedSnapshotInfo;
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
      lockedSnapshotInfo: 'LockedSnapshotInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockedSnapshotInfo: LockSnapshotResponseBodyLockedSnapshotInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.lockedSnapshotInfo && typeof (this.lockedSnapshotInfo as any).validate === 'function') {
      (this.lockedSnapshotInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

