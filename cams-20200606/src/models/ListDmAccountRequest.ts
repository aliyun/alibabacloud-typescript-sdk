// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDmAccountRequest extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @example
   * 83
   */
  pageIndex?: number;
  /**
   * @example
   * 86
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  sendType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

