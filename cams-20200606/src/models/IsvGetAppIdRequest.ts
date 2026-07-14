// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvGetAppIdRequest extends $dara.Model {
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 2
   */
  intlVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The permissions.
   * 
   * @example
   * Example value
   */
  permissions?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - whatsapp: WhatsApp.
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
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

