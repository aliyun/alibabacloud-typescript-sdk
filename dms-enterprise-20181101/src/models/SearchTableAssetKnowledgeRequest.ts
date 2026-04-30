// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTableAssetKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  dbId?: number;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 订单
   */
  searchKey?: string;
  /**
   * @example
   * TABLE
   */
  showType?: string;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * order_info
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      offset: 'Offset',
      searchKey: 'SearchKey',
      showType: 'ShowType',
      size: 'Size',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      offset: 'number',
      searchKey: 'string',
      showType: 'string',
      size: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

