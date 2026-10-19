// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new instance name. The name must be 2 to 80 characters in length and must start with an uppercase letter, a lowercase letter, or a Chinese character. The name cannot contain spaces or the following special characters: `@/:="<>{[]}`
   * 
   * @example
   * newinstancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The [release protection status](https://help.aliyun.com/document_detail/165005.html) of the instance. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * > This parameter is supported only for pay-as-you-go instances.
   * 
   * @example
   * true
   */
  instanceReleaseProtection?: boolean;
  /**
   * @remarks
   * The new password of the default account. The default account is named after the instance ID (for example, r-bp10noxlhcoim2****).
   * > The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (`!@#$%^&*()_+-=`).
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

