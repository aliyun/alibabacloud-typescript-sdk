// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to attach the disk as the system disk. Valid values:
   * 
   * *   true: attaches the disk as the system disk.
   * *   false: does not attach the disk as the system disk.
   * 
   * Default value: false.
   * 
   * >  You can set `Bootable` to true only if the instance does not have a system disk.
   * 
   * @example
   * false
   */
  bootable?: boolean;
  /**
   * @remarks
   * Specifies whether to release the disk when the instance is released. Valid values:
   * 
   * *   true: releases the disk when the instance is released.
   * *   false: does not release the disk when the instance is released. The disk is retained as a pay-as-you-go data disk.
   * 
   * Default value: false.
   * 
   * When you specify this parameter, take note of the following items:
   * 
   * *   If `OperationLocks` in the DescribeInstances response contains `"LockReason" : "security"` for the instance to which the disk is attached, the instance is locked for security reasons. Regardless of whether you set `DeleteWithInstance` to `false`, the DeleteWithInstance setting is ignored, and the disk is released when the instance is released.
   * *   If you want to attach an `elastic ephemeral disk`, you must set `DeleteWithInstance` to `true`.
   * *   You cannot specify DeleteWithInstance for disks for which the multi-attach feature is enabled.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The device name of the disk.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * testDeviceName
   */
  device?: string;
  /**
   * @remarks
   * The ID of the disk. The disk specified by `DiskId` and the instance specified by `InstanceId` must reside in the same zone.
   * 
   * >  For information about the limits on attaching a data disk and a system disk, see the "Usage notes" section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1j4l5axzdy6ftk****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to force attach the disk to the instance. Valid values:
   * 
   * *   true: force attaches the disk to the instance.
   * *   false: does not force attach the disk to the instance.
   * 
   * Default value: false.
   * 
   * >  You can set this parameter to true only for Regional Enterprise SSDs (ESSDs) (cloud_regional_disk_auto).
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the instance to which you want to attach the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1dq5lozx5f4pmd****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the SSH key pair that you bind to the Linux instance when you attach the system disk.
   * 
   * *   Windows instances do not support logons based on SSH key pairs. The `Password` parameter takes effect even if the KeyPairName parameter is specified.
   * *   For Linux instances, the username and password-based logon method is disabled by default.
   * 
   * @example
   * KeyPairTestName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password that is set when you attach the system disk. The password is applicable only to the administrator and root users. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   *     ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * 
   * For Windows instances, passwords cannot start with a forward slash (/).
   * 
   * > If `Password` is configured, we recommend that you send requests over HTTPS to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bootable: 'Bootable',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
      diskId: 'DiskId',
      force: 'Force',
      instanceId: 'InstanceId',
      keyPairName: 'KeyPairName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootable: 'boolean',
      deleteWithInstance: 'boolean',
      device: 'string',
      diskId: 'string',
      force: 'boolean',
      instanceId: 'string',
      keyPairName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
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

