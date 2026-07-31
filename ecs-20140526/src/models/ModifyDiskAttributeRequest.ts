// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for disks that support burst. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * > If you specify this parameter for a disk that does not support the burst feature, an error is returned.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the automatic snapshots of the disk when the disk is deleted. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * Default value: null, which indicates that the current value remains unchanged.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether to release the disk along with the instance. Default value: null, which indicates that the current value remains unchanged.
   * 
   * <props="china">Disks that have the multi-attach feature enabled do not support this parameter.
   * 
   * Setting `DeleteWithInstance` to `false` returns an error in the following cases: 
   *          
   * - The disk category is local disk (ephemeral).  
   * - The disk category is basic disk (cloud) and the disk is not detachable (Portable=false).  
   * 
   * >Warning: If you set DeleteWithInstance to false, when the ECS instance to which the disk is attached is security-locked and the OperationLocks parameter contains "LockReason" : "security", the DeleteWithInstance attribute is ignored and the disk is released along with the instance.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the disk whose attributes you want to modify.
   * > The `DiskId` and `DiskIds.N` parameters cannot be specified at the same time. Specify one of them as needed.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskId?: string;
  /**
   * @remarks
   * The IDs of the disks whose attributes you want to modify. Valid values of N: 0 to 100.
   * > The `DiskId` and `DiskIds.N` parameters cannot be specified at the same time. Specify one of them as needed.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskIds?: string[];
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length and can contain letters, digits, and characters categorized as letter in Unicode, including Chinese characters. The name can contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic snapshot policy for the disk. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: null, which indicates that the current value remains unchanged.
   * 
   * > This parameter is deprecated. The automatic snapshot policy is enabled by default for disks after creation. You only need to associate an automatic snapshot policy with the disk.
   * 
   * @example
   * true
   */
  enableAutoSnapshot?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

