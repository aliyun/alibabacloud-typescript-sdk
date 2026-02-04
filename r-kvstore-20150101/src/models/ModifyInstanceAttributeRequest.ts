// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the instance. The name must be 2 to 80 characters in length. The name must start with a letter and cannot contain spaces and the following special characters: `@ / : = " < > { [ ] }`
   * 
   * @example
   * newinstancename
   */
  instanceName?: string;
  /**
   * @remarks
   * [Specifies whether to enable release protection for the instance.](https://help.aliyun.com/document_detail/165005.html) Valid values:
   * 
   * *   **true**: enables release protection.
   * *   **false**: disables release protection.
   * 
   * >  This parameter is available only for pay-as-you-go instances.
   * 
   * @example
   * true
   */
  instanceReleaseProtection?: boolean;
  /**
   * @remarks
   * The new password for the default account. The default account is named after the instance ID. Example: r-bp10noxlhcoim2\\*\\*\\*\\*.
   * 
   * > The password must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. These special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * @example
   * uW8+nsrp
   */
  newPassword?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceReleaseProtection: 'InstanceReleaseProtection',
      newPassword: 'NewPassword',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceReleaseProtection: 'boolean',
      newPassword: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

