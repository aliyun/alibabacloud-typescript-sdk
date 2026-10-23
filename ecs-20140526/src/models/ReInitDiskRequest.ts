// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReInitDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically start the instance after the cloud disk is reinitialized. Valid values:
   * 
   * - true: Yes. The instance is automatically started.
   * - false: No.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoStartInstance?: boolean;
  /**
   * @remarks
   * The ID of the cloud disk to be reinitialized. The instance to which the cloud disk is attached must have been started at least once and must currently be in the Stopped state.
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
   * > This parameter is applicable only to Linux instances. When you reinitialize the system cloud disk, you can bind an SSH key pair to the ECS instance as the logon credential. After an SSH key pair is used, the password logon method is disabled.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to reset the logon password of the ECS instance when you reinitialize the system cloud disk. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   * ```
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ```
   * 
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
  /**
   * @remarks
   * Specifies whether to use Security Center for free after the cloud disk is reinitialized when the specified cloud disk is a system cloud disk. Valid values: 
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

