// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate a client token. Make sure that a unique client token is used for each request. ClientToken only supports ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/zh/ecs/developer-reference/how-to-ensure-idempotence?spm=a2c4g.11186623.0.0.2a29d467Bh2sO5).
   * 
   * @example
   * 5EC38E7D-389F-1925-ABE2-D7925A8F****
   */
  clientToken?: string;
  /**
   * @remarks
   * Cooling-off period. In compliance mode, you can set a cooling-off period or skip the cooling-off period to directly lock the snapshot.
   * 
   * During the cooling-off period, users with corresponding RAM permissions can unlock snapshots, extend or shorten the cooling-off period, and extend or shorten the lock duration. Snapshots cannot be deleted during the cooling-off period.
   * 
   * After the cooling-off period ends, only extending the lock duration is supported.
   * 
   * Unit: hours.
   * 
   * Valid values: 0 to 72. A value of 0 indicates skipping the cooling-off period and directly locking the snapshot.
   * 
   * If the snapshot has entered the compliance mode lock period, set this parameter to 0 when extending the lock duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * *   true: The request is checked and is not executed. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the check fails, the corresponding error is returned. If the check passes, the error code DryRunOperation is returned.
   * *   false (default): Sends a normal request, checks it, and executes the request directly if it passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Lock duration. After the lock duration ends, the snapshot lock will automatically expire.
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
   * The lock mode. Valid values:
   * 
   * *   compliance: The snapshot is locked in compliance mode. A snapshot that is locked in compliance mode cannot be unlocked by any user. It can be deleted only after the lock duration expires. Users cannot shorten the lock duration, but users with the corresponding RAM permissions can extend the lock duration at any time. When locking a snapshot in compliance mode, you can optionally specify a cooling-off period.
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
   * The region ID You can call the [DescribeRegions](https://help.aliyun.com/zh/ecs/developer-reference/api-ecs-2014-05-26-describeregions?spm=a2c4g.11186623.0.i2) operation to query the most recent region list.
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

