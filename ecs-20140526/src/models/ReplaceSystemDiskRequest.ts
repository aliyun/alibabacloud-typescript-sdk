// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceSystemDiskRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new capacity of the system disk. Unit: GiB. Valid values:
   * 
   * - Basic disk: Max{20, image size specified by the ImageId parameter} to 500.
   * - Enterprise SSD:
   *   - PL0: Max{1, image size specified by the ImageId parameter} to 2048.
   *   - PL1: Max{20, image size specified by the ImageId parameter} to 2048.
   *   - PL2: Max{461, image size specified by the ImageId parameter} to 2048.
   *   - PL3: Max{1261, image size specified by the ImageId parameter} to 2048.
   * - ESSD AutoPL disk: Max{1, image size specified by the ImageId parameter} to 2048.
   * - Other disk types: Max{20, image size specified by the ImageId parameter} to 2048.
   * 
   * Default value: Max{40, image size specified by the ImageId parameter}.
   * 
   * > Disk capacity that exceeds `Max{20, original system disk capacity}` incurs additional charges.
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceSystemDiskRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * 0
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * null
   */
  rolearn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleType: 'RoleType',
      rolearn: 'Rolearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      roleType: 'string',
      rolearn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceSystemDiskRequest extends $dara.Model {
  systemDisk?: ReplaceSystemDiskRequestSystemDisk;
  /**
   * @remarks
   * > **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * i386
   */
  architecture?: string;
  /**
   * @remarks
   * This parameter is not available for use.
   */
  arn?: ReplaceSystemDiskRequestArn[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * > **[Deprecated]** This parameter is deprecated. To improve compatibility, use `ImageId` instead.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  diskId?: string;
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * - true: encrypts the disk.
   * 
   * - false: does not encrypt the disk.
   * 
   * Default value: false.
   * 
   * >Notice: When you use a shared encrypted image to create a disk based on an encrypted snapshot, you must set the request parameter Encrypted=true for the disk to ensure that the disk uses the key of the account that receives the shared image.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the image to use when resetting the system disk. This parameter is required.
   * 
   * @example
   * m-bp67acfmxazb4ph****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the target instance.
   * 
   * > Make sure that the target instance is in the `Stopped` instance status before you send the request.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  /**
   * @remarks
   * The KMS key ID of the system disk.
   * 
   * @example
   * e522b26d-abf6-4e0d-b5da-04b7******3c
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The name of the key pair. 
   * 
   * > This parameter applies only to Linux ECS instances. You can bind an SSH key pair to an ECS instance as a logon credential. After an SSH key pair is bound, username and password-based logon is disabled.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to reset the password of the ECS instance. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * Default value: The password remains unchanged.
   * 
   * > If you specify the `Password` parameter, use HTTPS to send the request to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image.
   * 
   * Default value: false.
   * 
   * > If you use this parameter, the Password parameter must be empty. Make sure that the image you use has a preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * > **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to use Security Center for free after the system disk is replaced. Valid values: 
   * 
   * - Active: Uses Security Center. This value is supported only for public images.
   * 
   * - Deactive: Does not use Security Center. This value is supported for all images.
   * 
   * Default value: Deactive.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * Specifies whether to use the virtual machine system configurations provided by Alibaba Cloud (Windows: NTP and KMS. Linux: NTP and YUM).
   * 
   * > This parameter takes effect only when the system disk is attached (that is, the device name is /dev/xvda).
   * 
   * @example
   * true
   */
  useAdditionalService?: boolean;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      architecture: 'Architecture',
      arn: 'Arn',
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      keyPairName: 'KeyPairName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      useAdditionalService: 'UseAdditionalService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: ReplaceSystemDiskRequestSystemDisk,
      architecture: 'string',
      arn: { 'type': 'array', 'itemType': ReplaceSystemDiskRequestArn },
      clientToken: 'string',
      diskId: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      imageId: 'string',
      instanceId: 'string',
      KMSKeyId: 'string',
      keyPairName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityEnhancementStrategy: 'string',
      useAdditionalService: 'boolean',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

