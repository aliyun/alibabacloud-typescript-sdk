// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * Example value
   */
  bizCode?: string;
  /**
   * @remarks
   * The extended business information. Default value: an empty set.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The description of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  contactDetails?: string;
  /**
   * @remarks
   * The ID of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  contactId?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  contactName?: string;
  /**
   * @remarks
   * The country code.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  country?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * Example value
   */
  email?: string;
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
      contactId: 'ContactId',
      contactName: 'ContactName',
      country: 'Country',
      email: 'Email',
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
      contactId: 'string',
      contactName: 'string',
      country: 'string',
      email: 'string',
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

