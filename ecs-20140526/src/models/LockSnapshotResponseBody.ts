// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockSnapshotResponseBodyLockedSnapshotInfo extends $dara.Model {
  /**
   * @remarks
   * The cool-off period for compliance mode. Unit: hours.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * The time the cool-off period for compliance mode ends. The time is in UTC and follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2025-10-15T13:00:00Z
   */
  coolOffPeriodExpiredTime?: string;
  /**
   * @remarks
   * The time the lock was created. The time is in UTC and follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2025-10-15T10:00:00Z
   */
  lockCreationTime?: string;
  /**
   * @remarks
   * The lock duration, in days. The snapshot lock automatically expires at the end of this period.
   * 
   * @example
   * 1
   */
  lockDuration?: number;
  /**
   * @remarks
   * The time the lock duration starts. The time is in UTC and follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * If you lock a snapshot that is in the `progressing` state, the lock duration starts only after the snapshot enters the `accomplished` state.
   * 
   * @example
   * 2025-10-15T10:00:00Z
   */
  lockDurationStartTime?: string;
  /**
   * @remarks
   * The time the lock expires. The time is in UTC and follows the [ISO 8601](https://help.aliyun.com/zh/ecs/developer-reference/iso-8601-time-format?spm=a2c4g.11186623.0.0.277c6c92kl7kXM) standard in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2025-10-16T10:00:00Z
   */
  lockExpiredTime?: string;
  /**
   * @remarks
   * The lock mode. Possible value:
   * 
   * - `compliance`: The snapshot is locked in compliance mode. A snapshot in compliance mode cannot be unlocked and can be deleted only after its lock duration expires. You cannot shorten the lock duration, but users with the required Resource Access Management (RAM) permissions can extend it at any time. When you lock a snapshot in compliance mode, you can optionally specify a cool-off period.
   * 
   * @example
   * compliance
   */
  lockMode?: string;
  /**
   * @remarks
   * The lock status. Possible values:
   * 
   * - `compliance-cooloff`: The snapshot is locked in compliance mode but is still in its cool-off period. The snapshot cannot be deleted. However, users with the required Resource Access Management (RAM) permissions can unlock it, change the cool-off period, and adjust the lock duration.
   * 
   * - `compliance`: The snapshot is locked in compliance mode, and the cool-off period has ended. The snapshot cannot be unlocked or deleted, but users with the required Resource Access Management (RAM) permissions can extend the lock duration.
   * 
   * - `expired`: The snapshot was previously locked, but the lock duration has ended, and the lock has expired. The snapshot is not currently locked and can be deleted.
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
   * Information about the locked snapshot.
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

