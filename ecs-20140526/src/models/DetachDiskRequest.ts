// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The Settings for the automatic release property when uninstalling a system disk or data disk. Specifies whether the system disk or data disk is released when the ECS instance is released.
   * 
   * - true: The disk is released.
   * - false: The disk is not released. The disk is retained and transformed to a pay-as-you-go data disk.
   * 
   * Default value: true.
   * 
   * Take note of the following items:
   * 
   * - This parameter cannot be configured for disks that have the multi-attach attribute enabled.
   * - If you uninstall a data disk, the default value is `false`.
   * - If the disk to be uninstalled is an elastic ephemeral disk, you must set the `DeleteWithInstance` parameter to `true`.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The ID of the disk to be detached.
   * 
   * - The disk must be attached to an instance and be in the In Use (`In_use`) state.
   * 
   * - When you detach a data disk, the instance to which the disk is attached must be in the Running (`Running`) or Stopped (`Stopped`) state.
   * 
   * - When you detach a system disk, the instance to which the disk is attached must be in the Stopped (`Stopped`) state.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The ECS instance ID to which the disk to be uninstalled is attached.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'boolean',
      diskId: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

