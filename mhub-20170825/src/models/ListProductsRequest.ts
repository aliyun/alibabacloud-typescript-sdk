// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  offset?: number;
  pageNum?: number;
  pageSize?: number;
  productName?: string;
  searchKeyWord?: string;
  /**
   * @example
   * false
   */
  simple?: boolean;
  /**
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productName: 'ProductName',
      searchKeyWord: 'SearchKeyWord',
      simple: 'Simple',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productName: 'string',
      searchKeyWord: 'string',
      simple: 'boolean',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

