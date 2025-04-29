// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to release the system disk or data disk when the instance from which you want to detach the disk is released. Valid values:
   * 
   * *   true: releases the disk when the instance is released.
   * *   false: does not release the disk when the instance is released. The disk is retained as a pay-as-you-go data disk.
   * 
   * Default value: true.
   * 
   * Take note of the following items:
   * 
   * *   You cannot specify this parameter for disks for which the multi-attach feature is enabled.
   * *   If a data disk is to be detached, the default value is `false`.
   * *   If you want to detach an `elastic ephemeral disk`, you must set `DeleteWithInstance` to `true`.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The ID of the disk that you want to detach.
   * 
   * *   The disk that you want to detach must be attached to an ECS instance and in the In Use (`In_use`) state.
   * *   The instance from which you want to detach a data disk must be in the `Running` or `Stopped` state.
   * *   The instance from which you want to detach the system disk must be in the `Stopped` state.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the ECS instance from which you want to detach the disk.
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

