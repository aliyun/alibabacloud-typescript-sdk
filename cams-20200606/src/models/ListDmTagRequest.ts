// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDmTagRequest extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @example
   * 82
   */
  pageIndex?: number;
  /**
   * @example
   * 89
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

