// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactByIdShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  bizCode?: string;
  /**
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  contactDetails?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  contactId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  contactName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  country?: string;
  /**
   * @example
   * 示例值
   */
  email?: string;
  ownerId?: number;
  /**
   * @example
   * test
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
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
      bizExtendShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

