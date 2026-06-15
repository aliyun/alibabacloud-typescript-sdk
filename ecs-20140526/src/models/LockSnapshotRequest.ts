// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * A unique, case-sensitive token that you provide to ensure the idempotence of the request. The token can contain only ASCII characters and must not exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/zh/ecs/developer-reference/how-to-ensure-idempotence?spm=a2c4g.11186623.0.0.2a29d467Bh2sO5).
   * 
   * @example
   * 5EC38E7D-389F-1925-ABE2-D7925A8F****
   */
  clientToken?: string;
  /**
   * @remarks
   * The cool-off period. In compliance mode, you can specify a cool-off period or set this parameter to 0 to lock the snapshot immediately.
   * 
   * During the cool-off period, users with the required RAM permissions can unlock the snapshot, extend or shorten the cool-off period, and extend or shorten the lock duration. The snapshot cannot be deleted during the cool-off period.
   * 
   * After the cool-off period ends, you can only extend the lock duration.
   * 
   * Unit: hours.
   * 
   * Valid values: 0 to 72. A value of 0 indicates that the cool-off period is skipped and the snapshot is locked immediately.
   * 
   * If a snapshot is already locked in compliance mode, you must set this parameter to 0 to extend its lock duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - `true`: Performs a dry run to check the request without executing it. The system checks for required parameters, request format, business constraints, and permissions. If the check passes, the `DryRunOperation` error code is returned. If the check fails, a corresponding error is returned.
   * 
   * - `false` (default): Checks the request and, if the checks pass, executes the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The number of days to lock the snapshot. The lock automatically expires at the end of this period.
   * 
   * Unit: days.
   * 
   * Valid values: 1 to 36500.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  lockDuration?: number;
  /**
   * @remarks
   * The lock mode. Valid value:
   * 
   * - `compliance`: Locks the snapshot in compliance mode. A snapshot locked in compliance mode cannot be unlocked by any user and can be deleted only after its lock duration expires. You cannot shorten the lock duration. However, users with the required RAM permissions can extend the lock duration at any time. When you lock a snapshot in compliance mode, you can optionally specify a cool-off period.
   * 
   * This parameter is required.
   * 
   * @example
   * compliance
   */
  lockMode?: string;
  /**
   * @example
   * 158704318252****
   */
  ownerAccount?: string;
  /**
   * @example
   * 158704318252****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/zh/ecs/developer-reference/api-ecs-2014-05-26-describeregions?spm=a2c4g.11186623.0.i2) to get the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 158704318252****
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 158704318252****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-9dp2qojdpdfmgfmf****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      coolOffPeriod: 'CoolOffPeriod',
      dryRun: 'DryRun',
      lockDuration: 'LockDuration',
      lockMode: 'LockMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      coolOffPeriod: 'number',
      dryRun: 'boolean',
      lockDuration: 'number',
      lockMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

