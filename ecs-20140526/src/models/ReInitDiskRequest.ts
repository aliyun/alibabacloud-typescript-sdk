// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReInitDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically start the instance after the disk is re-initialized. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoStartInstance?: boolean;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the key pair. This parameter is empty by default.
   * 
   * > The parameter is applicable only to Linux instances. You can bind an SSH key pair to an instance as the logon credential when you re-initialize the system disk of the instance. After the SSH key pair is bound, the username and password-based logon method is disabled for the instance.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to reset the password of the instance when you re-initialize its system disk. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   *     ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * 
   * For Windows instances, passwords cannot start with a forward slash (/).
   * 
   * > If the `Password` parameter is specified, we recommend that you send requests over HTTPS to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to use Security Center free of charge after the system disk is re-initialized. Valid values:
   * 
   * *   Active: uses Security Center free of charge after the system disk is re-initialized. This value is applicable to only public images.
   * *   Deactive: does not use Security Center free of charge after the system disk is re-initialized. This value is applicable to all images.
   * 
   * Default value: Deactive.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoStartInstance: 'AutoStartInstance',
      diskId: 'DiskId',
      keyPairName: 'KeyPairName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStartInstance: 'boolean',
      diskId: 'string',
      keyPairName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityEnhancementStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

