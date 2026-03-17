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
   * @remarks
   * The permission.
   * 
   * Valid values:
   * 
   * *   whatsapp_business_messaging: sending permission on WhatsApp messages
   * *   ads_management: management permission on advertisements
   * *   catalog_management: management permission on catalogs
   * 
   * @example
   * catalog_management
   */
  permissions?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the app. Valid value: WHATSAPP.
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
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

