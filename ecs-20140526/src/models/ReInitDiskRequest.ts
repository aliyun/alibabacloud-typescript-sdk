// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReInitDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically start the instance after the disk is reinitialized. Valid values:
   * 
   * - true: automatically starts the instance.
   * - false: does not automatically start the instance.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoStartInstance?: boolean;
  /**
   * @remarks
   * The ID of the disk to be reinitialized. The instance to which the disk is attached must have been started at least once and must currently be in the Stopped state.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * > This parameter is applicable only to Linux instances. When you reinitialize the system disk, you can bind an SSH key pair to the ECS instance as the logon credential. After an SSH key pair is used, the password logon method is disabled.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to reset the logon password of the ECS instance when you reinitialize the system disk. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The special characters include:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If you specify the `Password` parameter, send requests over HTTPS to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to use Security Center for free after the system disk is reinitialized. Valid values: 
   *          
   * - Active: enables Security Center. This value is supported only for public images.  
   * 
   * - Deactive: disables Security Center. This value is supported for all images.  
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

