// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable performance burst for the disk if the disk supports performance burst. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  An error is reported if you specify this parameter for a disk that does not support performance burst.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the automatic snapshots of the disk when the disk is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is empty by default, which indicates that the current value remains unchanged.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether to release the disk together with the associated instance. This parameter is empty by default, which indicates that the current value remains unchanged.
   * 
   * An error is returned if you set `DeleteWithInstance` to `false` in one of the following cases:
   * 
   * *   The disk is a local disk.
   * *   The disk is a basic disk and is not removable. If the Portable attribute of a disk is set to false, the disk is not removable.
   * 
   * **
   * 
   * **Warning** If you set DeleteWithInstance to false and the instance to which the disk is attached is locked for security reasons, the DeleteWithInstance attribute of the disk is ignored and the disk is released together with the instance. If "LockReason" : "security" is displayed in the response when you query information about an instance, the instance is locked for security reasons.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the disk. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the disk whose attributes you want to modify.
   * 
   * >  You can specify `DiskId` or `DiskIds.N`, but not both.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskId?: string;
  /**
   * @remarks
   * The IDs of the disks whose attributes you want to modify. Valid values of N: 0 to 100.
   * 
   * >  You can specify `DiskId` or `DiskIds.N`, but not both.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskIds?: string[];
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length and can contain Unicode characters under the Decimal Number category and the categories whose names contain Letter. The name can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic snapshot policy feature. Valid values:
   * 
   * *   true: enables the automatic snapshot policy feature for the cloud disk.
   * *   false: disables the automatic snapshot policy feature for the cloud disk.
   * 
   * This parameter is empty by default, which indicates that the current value remains unchanged.
   * 
   * >  This parameter is deprecated. By default, the automatic snapshot policy feature is enabled for cloud disks. You only need to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
   * 
   * @example
   * true
   */
  enableAutoSnapshot?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the command. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      diskId: 'DiskId',
      diskIds: 'DiskIds',
      diskName: 'DiskName',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'boolean',
      deleteAutoSnapshot: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      diskId: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      diskName: 'string',
      enableAutoSnapshot: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

