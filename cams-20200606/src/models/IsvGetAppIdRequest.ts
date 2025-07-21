// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvGetAppIdRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  intlVersion?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  permissions?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      intlVersion: 'IntlVersion',
      ownerId: 'OwnerId',
      permissions: 'Permissions',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intlVersion: 'string',
      ownerId: 'number',
      permissions: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

