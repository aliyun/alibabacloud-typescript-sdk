// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to attach the disk as a system disk. Valid values:
   * 
   * - true: Attach as a system disk.
   * 
   * - false: Do not attach as a system disk.
   * 
   * Default value: false.
   * 
   * > If `Bootable` is set to `true`, the target ECS instance must have no system disk attached.
   * 
   * @example
   * false
   */
  bootable?: boolean;
  /**
   * @remarks
   * Specifies whether to release the disk when the instance is released. Valid values:
   * 
   * - true: The disk is released with the instance.
   * - false: The disk is not released with the instance. The disk is retained as a pay-as-you-go data disk.
   * 
   * Default value: false.
   * 
   * Note the following when setting this parameter:
   * 
   * - If `DeleteWithInstance` is set to `false` and the ECS instance is under security control (that is, `OperationLocks` contains `"LockReason" : "security"`), this attribute is ignored when the ECS instance is released, and the disk is released along with the instance.
   * 
   * - If the disk to attach is an elastic ephemeral disk, you must set `DeleteWithInstance` to `true`.
   * 
   * - This parameter is not supported for disks with the multi-attach feature enabled.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The device name of the disk.
   * 
   * > This parameter is being deprecated. To improve compatibility, use other parameters to identify the disk.
   * 
   * @example
   * testDeviceName
   */
  device?: string;
  /**
   * @remarks
   * The ID of the disk to attach. The disk (`DiskId`) and the instance (`InstanceId`) must be in the same zone.
   * 
   * > Both data disks and system disks are supported. For the relevant constraints, see the operation description above.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1j4l5axzdy6ftk****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether the request is a forced attach request. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * Default value: false.
   * 
   * 
   * > Currently, only the ESSD regional disk type (cloud_regional_disk_auto) supports setting this field to true.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the ECS instance to which you want to attach the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1dq5lozx5f4pmd****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the SSH key pair to bind to a Linux ECS instance when attaching a system disk.
   * 
   * - Windows Server instances: SSH key pairs are not supported. Even if this parameter is specified, only the `Password` configuration takes effect.
   * 
   * - Linux instances: Password-based logon is disabled after the key pair is bound.
   * 
   * @example
   * KeyPairTestName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password for the instance when attaching a system disk. This parameter applies only to the administrator and root usernames. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify the `Password` parameter, use HTTPS to send the request to prevent password leakage.
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

