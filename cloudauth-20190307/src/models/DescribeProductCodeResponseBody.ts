// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductCodeResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Product code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Name corresponding to the product code.
   * 
   * @example
   * APP认证
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current query page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of product code information.
   */
  items?: DescribeProductCodeResponseBodyItems[];
  /**
   * @remarks
   * Number of products per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 7FBBADA3-9A66-5759-8AF8-2F99F5BE13F7
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of returned results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeProductCodeResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

