// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  bizCode?: string;
  bizExtendShrink?: string;
  /**
   * @example
   * 示例值示例值
   */
  contactDetails?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  contactName?: string;
  /**
   * @example
   * 示例值
   */
  country?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  filePath?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      contactDetails: 'ContactDetails',
      contactName: 'ContactName',
      country: 'Country',
      filePath: 'FilePath',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      contactDetails: 'string',
      contactName: 'string',
      country: 'string',
      filePath: 'string',
      ownerId: 'number',
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

