// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to attach the disk as a system disk. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * Default value: false.
   * 
   * > If you set this parameter to `Bootable=true`, the destination ECS instance must not have a system disk attached.
   * 
   * @example
   * false
   */
  bootable?: boolean;
  /**
   * @remarks
   * Specifies whether to release the disk when the instance is released. Valid values:
   * 
   * - true: The disk is released.
   * - false: The disk is not released. The disk is retained and converted to a pay-as-you-go data disk.
   * 
   * Default value: false.
   * 
   * When you configure this parameter, take note of the following items:
   * 
   * - If you set `DeleteWithInstance` to `false` and the ECS instance is locked for security reasons (that is, `"LockReason" : "security"` is marked in `OperationLocks`), this property of the disk is ignored and the disk is released when the ECS instance is released.
   * 
   * - If the destination disk that you want to attach is an `elastic ephemeral disk`, you must set the `DeleteWithInstance` parameter to `true`.
   * 
   * - This parameter cannot be configured for disks with the multi-attach feature enabled.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The device name of the disk.
   * 
   * > This parameter is being deprecated. To improve compatibility, we recommend that you use other parameters to identify the disk.
   * 
   * @example
   * testDeviceName
   */
  device?: string;
  /**
   * @remarks
   * The ID of the disk that you want to attach. The disk (`DiskId`) and the instance (`InstanceId`) must be in the same zone.
   * 
   * > You can attach data disks and system disks. For the related constraints, see the operation description section above.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1j4l5axzdy6ftk****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly attach the disk. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * Default value: false.
   * 
   * 
   * > Currently, only regional Enterprise SSDs (ESSDs) (`cloud_regional_disk_auto`) support setting this parameter to true.
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
   * The name of the SSH key pair to bind to a Linux ECS instance when you attach a system disk.
   * 
   * - Windows Server: SSH key pairs are not supported. Even if you specify this parameter, only the `Password` configuration is applied.
   * 
   * - Linux: Password-based logon is disabled by default.
   * 
   * @example
   * KeyPairTestName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The logon password of the instance, which is configured when you attach a system disk. This parameter takes effect only for the administrator and root usernames and does not take effect for other usernames. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The special characters can be:
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

