// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to configure the automatic release attribute when detaching a system disk or data disk. This attribute determines whether the system disk or data disk is released together with the ECS instance.
   * 
   * - true: The disk is released together with the instance.
   * - false: The disk is not released together with the instance. The disk is retained as a pay-as-you-go data disk.
   * 
   * Default value: true.
   * 
   * Take note of the following items:
   * 
   * - Disks with the multi-attach feature enabled do not support this parameter.
   * - If the disk to be detached is a data disk, the default value is `false`.
   * - If the disk to be detached is an `elastic ephemeral disk`, you must set `DeleteWithInstance` to `true`.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The ID of the disk that you want to detach.
   * 
   * - The disk must be attached to an instance and in the In Use (`In_use`) state.
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
   * The ID of the ECS instance to which the disk to be detached is attached.
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

