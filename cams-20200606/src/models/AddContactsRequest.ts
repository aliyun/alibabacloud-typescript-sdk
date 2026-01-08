// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContactsRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  bizCode?: string;
  /**
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @example
   * 15111111111
   */
  contactDetails?: string;
  /**
   * @example
   * mary
   */
  contactName?: string;
  /**
   * @example
   * China
   */
  country?: string;
  /**
   * @example
   * 示例值示例值
   */
  email?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  filePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  groups?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  needUpdate?: boolean;
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

