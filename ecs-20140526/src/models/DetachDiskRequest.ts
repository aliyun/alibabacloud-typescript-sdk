// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to release the system cloud disk or data cloud disk when the ECS instance is released. This parameter sets the automatic release attribute when you unmount a system cloud disk or data cloud disk.
   * 
   * - true: The disk is released.
   * - false: The disk is not released. The cloud disk is converted to a pay-as-you-go data cloud disk and is retained.
   * 
   * Default value: true.
   * 
   * Take note of the following items:
   * 
   * - This parameter cannot be set for cloud disks that have the multi-attach feature enabled.
   * - If you unmount a data cloud disk, the default value is `false`.
   * - If the disk to be unmounted is an elastic ephemeral disk, you must set the `DeleteWithInstance` parameter to `true`.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The ID of the disk to be unmounted.
   * 
   * - The disk must be mounted to an instance and be in the In Use (`In_use`) state.
   * 
   * - When you unmount a data cloud disk, the instance to which the disk is mounted must be in the Running (`Running`) or Stopped (`Stopped`) state.
   * 
   * - When you unmount a system cloud disk, the instance to which the disk is mounted must be in the Stopped (`Stopped`) state.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance to which the disk to be uninstalled is attached.
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

