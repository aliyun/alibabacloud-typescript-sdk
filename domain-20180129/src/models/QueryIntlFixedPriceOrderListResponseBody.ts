// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIntlFixedPriceOrderListResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * T2023122019031400****
   */
  bizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1715134456000
   */
  createTime?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * jslxv.cn
   */
  domain?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * - 11: international fixed-price.
   * 
   * @example
   * 11
   */
  orderType?: number;
  /**
   * @remarks
   * The price.
   * 
   * @example
   * 15000
   */
  price?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 5: Transaction closed.
   * - 6: Paid.
   * - 7: Pending production.
   * - 9: Transaction completed.
   * 
   * @example
   * 6
   */
  status?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1715134456000
   */
  updateTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 545684317770****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      domain: 'Domain',
      orderType: 'OrderType',
      price: 'Price',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'number',
      domain: 'string',
      orderType: 'number',
      price: 'number',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntlFixedPriceOrderListResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The order list data.
   */
  data?: QueryIntlFixedPriceOrderListResponseBodyModuleData[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 294
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 4
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryIntlFixedPriceOrderListResponseBodyModuleData },
      pageSize: 'number',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIntlFixedPriceOrderListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response object.
   */
  module?: QueryIntlFixedPriceOrderListResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6CB3623-4726-4947-AC2B-2C6E673B447C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: QueryIntlFixedPriceOrderListResponseBodyModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

