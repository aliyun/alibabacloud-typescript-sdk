// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to attach the disk as a system disk. Valid values:
   * 
   * - true: The disk is attached as a system disk.
   * 
   * - false: The disk is not attached as a system disk.
   * 
   * Default value: false.
   * 
   * > If you set `Bootable=true`, the destination ECS instance must have no system disk attached.
   * 
   * @example
   * false
   */
  bootable?: boolean;
  /**
   * @remarks
   * Specifies whether to release the disk when the instance is released. Valid values:
   * 
   * - true: The disk is released together with the instance.
   * - false: The disk is not released together with the instance. The disk is retained as a pay-as-you-go data disk.
   * 
   * Default value: false.
   * 
   * Take note of the following items when you set this parameter:
   * 
   * - If you set `DeleteWithInstance` to `false` and the ECS instance is locked for security reasons, meaning that `OperationLocks` contains `"LockReason" : "security"`, this attribute is ignored when the ECS instance is released, and the disk is released together with the instance.
   * 
   * - If the destination disk is an `elastic ephemeral disk`, you must set `DeleteWithInstance` to `true`.
   * 
   * - Disks with the multi-attach feature enabled do not support this parameter.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The device name of the disk.
   * 
   * > This parameter will be deprecated soon. To improve compatibility, use other parameters to identify the disk.
   * 
   * @example
   * testDeviceName
   */
  device?: string;
  /**
   * @remarks
   * The ID of the disk to be attached. The disk (`DiskId`) and the instance (`InstanceId`) must be in the same zone.
   * 
   * > You can attach data disks and system disks. For related constraints, see the operation description section above.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1j4l5axzdy6ftk****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to forcefully attach the disk. Valid values:
   * 
   * - true: Forcefully attaches the disk.
   * - false: Does not forcefully attach the disk.
   * 
   * Default value: false.
   * 
   * 
   * > Currently, only regional ESSDs (cloud_regional_disk_auto) support setting this parameter to true.
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
   * The name of the SSH key pair that is bound to the Linux ECS instance when you attach a system disk.
   * 
   * - Windows Server instances: SSH key pairs are not supported. Even if this parameter is specified, only the `Password` configuration takes effect.
   * 
   * - Linux instances: The password logon method is disabled by default.
   * 
   * @example
   * KeyPairTestName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password that is set for the instance when you attach a system disk. The password is effective only for the administrator and root usernames and is not effective for other usernames. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify the `Password` parameter, send the request over HTTPS to prevent password leaks.
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

