// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for a disk that supports this feature. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * > An error is returned if you specify this parameter for a disk that does not support the performance burst feature.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the automatic snapshots of the disk when the disk is deleted. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * Default value: null. A null value indicates that the current value is not changed.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether the disk is released along with the instance. Default value: null. A value of null indicates that the current value remains unchanged.
   * 
   * <props="china">This parameter is not supported for disks that have the multi-attach feature enabled.
   * 
   * An error is returned if you set the `DeleteWithInstance` parameter to `false` in either of the following scenarios: 
   *          
   * - The disk category is local disk (ephemeral).  
   * - The disk category is basic disk (cloud) and the disk is not detachable (Portable=false).  
   * 
   * >Warning: If you configure the disk not to be released with the instance (DeleteWithInstance=false), the disk is still released along with the instance if the ECS instance to which the disk is attached is locked for security reasons and the OperationLocks parameter indicates a lock status of "LockReason":"security". In this case, the DeleteWithInstance attribute of the disk is ignored.
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
   * > You cannot specify both the DiskId and DiskIds.N parameters. Specify one of them based on your requirements.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskId?: string;
  /**
   * @remarks
   * The IDs of the disks whose attributes you want to modify. Valid values of N: 0 to 100.
   * > You cannot specify both the DiskId and DiskIds.N parameters. Specify one of them based on your requirements.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskIds?: string[];
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length and can contain letters and digits in Unicode. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic snapshot policy feature for the disk. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * Default value: null. A null value indicates that the current value is not changed.
   * 
   * > **[Deprecated]** This parameter is deprecated. The automatic snapshot policy feature is enabled by default for newly created disks. You only need to apply an automatic snapshot policy to the disk.
   * 
   * @example
   * true
   */
  enableAutoSnapshot?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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

