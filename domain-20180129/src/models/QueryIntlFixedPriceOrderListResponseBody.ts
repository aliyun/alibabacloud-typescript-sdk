// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIntlFixedPriceOrderListResponseBodyModuleData extends $dara.Model {
  bizId?: string;
  createTime?: number;
  domain?: string;
  orderType?: number;
  price?: number;
  status?: number;
  updateTime?: number;
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
  currentPageNum?: number;
  data?: QueryIntlFixedPriceOrderListResponseBodyModuleData[];
  pageSize?: number;
  totalItemNum?: number;
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
  module?: QueryIntlFixedPriceOrderListResponseBodyModule;
  /**
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

