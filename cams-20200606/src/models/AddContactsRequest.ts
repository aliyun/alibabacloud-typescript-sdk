// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * Sample value
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: an empty set.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The description of the contact.
   * 
   * @example
   * 15111111111
   */
  contactDetails?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * mary
   */
  contactName?: string;
  /**
   * @remarks
   * The country.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * Sample value
   */
  email?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * Sample value
   */
  filePath?: string;
  /**
   * @remarks
   * The user group information.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  groups?: string;
  /**
   * @remarks
   * Specifies whether the whitelist of back-to-origin IP addresses needs to be updated. If the whitelist of back-to-origin IP addresses in use differs from the latest whitelist of back-to-origin IP addresses, the whitelist needs to be updated and this parameter returns true. Valid values:
   * - true: The whitelist needs to be updated.
   * - false: The whitelist does not need to be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  needUpdate?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      contactDetails: 'ContactDetails',
      contactName: 'ContactName',
      country: 'Country',
      email: 'Email',
      filePath: 'FilePath',
      groups: 'Groups',
      needUpdate: 'NeedUpdate',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contactDetails: 'string',
      contactName: 'string',
      country: 'string',
      email: 'string',
      filePath: 'string',
      groups: 'string',
      needUpdate: 'boolean',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

