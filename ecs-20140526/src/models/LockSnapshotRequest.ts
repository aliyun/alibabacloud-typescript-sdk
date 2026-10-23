// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/en/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * @example
   * 5EC38E7D-389F-1925-ABE2-D7925A8F****
   */
  clientToken?: string;
  /**
   * @remarks
   * The cool-off period. In compliance mode, you can set a cool-off period or skip the cool-off period to lock the snapshot directly. 
   * 
   * During the cool-off period, users with the required RAM permissions can unlock the snapshot, extend or shorten the cool-off period, and extend or shorten the lock duration. The snapshot cannot be deleted during the cool-off period. 
   * 
   * After the cool-off period ends, you can only extend the lock duration. 
   * 
   * Unit: hours. 
   * 
   * Valid values: 0 to 72. A value of 0 indicates that the cool-off period is skipped and the snapshot is locked directly. 
   * 
   * If the snapshot has entered the compliance mode lock period, you must set this parameter to 0 to extend the lock duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  coolOffPeriod?: number;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values: 
   * - true: sends a check request. The operation is not performed. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned. 
   * - false (default): sends a normal request. The request is executed after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The lock duration. The snapshot lock automatically expires after the lock duration ends. 
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
   * - compliance: locks the snapshot in compliance mode. A snapshot locked in compliance mode cannot be unlocked by any user and can be deleted only after the lock duration expires. Users cannot shorten the lock duration, but users with the required RAM permissions can extend the lock duration at any time. When you lock a snapshot in compliance mode, you can optionally specify a cool-off period.
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
   * The region ID. You can call the [DescribeRegions](https://www.alibabacloud.com/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions) operation to query the most recent region list.
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

