// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReplaceSystemDiskRequestSystemDisk } from "./ReplaceSystemDiskRequestSystemDisk";
import { ReplaceSystemDiskRequestArn } from "./ReplaceSystemDiskRequestArn";


export class ReplaceSystemDiskRequest extends $dara.Model {
  systemDisk?: ReplaceSystemDiskRequestSystemDisk;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * i386
   */
  architecture?: string;
  /**
   * @remarks
   * This parameter is not available for public use.
   */
  arn?: ReplaceSystemDiskRequestArn[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but make sure that the token is unique across requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * >  This parameter is deprecated. To improve compatibility, we recommend that you use `ImageId`.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  diskId?: string;
  /**
   * @remarks
   * > This parameter is not available for public use.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  When you use a shared encrypted image to create the disk based on an encrypted snapshot, you must set Encrypted to true to ensure that the disk uses an encryption key of your own.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the image used to replace the system disk. This parameter is required.
   * 
   * @example
   * m-bp67acfmxazb4ph****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the instance whose operating system you want to replace.
   * 
   * >  Make sure that the instance is in the `Stopped` (`Stopped`) state.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the KMS key to use for the system disk.
   * 
   * @example
   * e522b26d-abf6-4e0d-b5da-04b7******3c
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * > This parameter is applicable only to Linux instances. You can bind an SSH key pair to the instance as a logon credential. After you bind the SSH key pair, the username and password logon method is disabled for the instance.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to reset the password for the instance. The password must be 8 to 30 characters in length and contain at least three of the following items: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   *     ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * 
   * The passwords of Windows instances cannot start with a forward slash (/).
   * 
   * This parameter is empty by default, which indicates that the current password remains unchanged.
   * 
   * > If you specify `Password`, we recommend that you send requests over HTTPS to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image.
   * 
   * Default value: false
   * 
   * > If the PasswordInherit parameter is specified, you must leave the Password parameter empty. Before you use this parameter, make sure that a password is preset for the image.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to use Security Center Basic after the system disk is replaced. Valid values:
   * 
   * *   Active: uses Security Center Basic after the system disk is re-initialized. This value is applicable only to public images.
   * *   Deactive: does not use Security Center Basic after the system disk is re-initialized. This value is applicable to all images.
   * 
   * Default value: Deactive.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * Specifies whether to use the system configurations for virtual machines provided by Alibaba Cloud. System configurations for Windows: NTP and KMS. System configurations for Linux: NTP and YUM.
   * 
   * > This parameter takes effect only when you attach a system disk whose device name is /dev/xvda.
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

