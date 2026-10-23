// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for a cloud disk that supports this feature. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * > An error is returned if you specify this parameter for a cloud disk that does not support the performance burst feature.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the automatic snapshots of the cloud disk when the cloud disk is deleted. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * Default value: null. A value of null indicates that the current value is not changed.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether to release the cloud disk when the instance is released. Default value: null. A value of null indicates that the current value is not changed.
   * 
   * <props="china">This parameter is not supported for cloud disks that have the multi-attach feature enabled.
   * 
   * An error is returned if you set the `DeleteWithInstance` parameter to `false` in the following scenarios: 
   *          
   * - The category of the cloud disk is local disk (ephemeral).  
   * - The category of the cloud disk is basic cloud disk (cloud) and the cloud disk is not removable (Portable=false).  
   * 
   * >Warning: If you set this parameter to false, the cloud disk is not released when the instance is released. However, if the ECS instance to which the cloud disk is attached is locked for security reasons and the "LockReason" : "security" state is added to OperationLocks, the DeleteWithInstance attribute of the cloud disk is ignored and the cloud disk is released along with the instance.</warning>
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the cloud disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud disk whose attributes you want to modify.
   * > You cannot specify both the `DiskId` and `DiskIds.N` parameters. Specify one of them based on your business requirements.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskId?: string;
  /**
   * @remarks
   * The IDs of the cloud disks whose attributes you want to modify. Valid values of N: 0 to 100.
   * > You cannot specify both the `DiskId` and `DiskIds.N` parameters. Specify one of them based on your business requirements.
   * 
   * @example
   * d-bp1famypsnar20bv****
   */
  diskIds?: string[];
  /**
   * @remarks
   * The name of the cloud disk. The name must be 2 to 128 characters in length and can contain letters and digits in Unicode. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic snapshot policy feature for the cloud disk. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: null. A value of null indicates that the current value is not changed.
   * 
   * > This parameter is deprecated. The automatic snapshot policy feature is enabled by default for newly created cloud disks. You only need to apply an automatic snapshot policy to the cloud disk to use the feature.
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

