// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageOrdersResponseBodyPageOrderList extends $dara.Model {
  amount?: number;
  creatorAliUid?: number;
  deliveryAddress?: string;
  desktopId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  gmtCanceledTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  gmtPaidTime?: string;
  instanceId?: string;
  orderId?: string;
  orderStatus?: string;
  orderType?: string;
  productCode?: string;
  productSkuCode?: string;
  productType?: string;
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      creatorAliUid: 'CreatorAliUid',
      deliveryAddress: 'DeliveryAddress',
      desktopId: 'DesktopId',
      gmtCanceledTime: 'GmtCanceledTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtPaidTime: 'GmtPaidTime',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      productCode: 'ProductCode',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      creatorAliUid: 'number',
      deliveryAddress: 'string',
      desktopId: 'string',
      gmtCanceledTime: 'string',
      gmtCreateTime: 'string',
      gmtPaidTime: 'string',
      instanceId: 'string',
      orderId: 'string',
      orderStatus: 'string',
      orderType: 'string',
      productCode: 'string',
      productSkuCode: 'string',
      productType: 'string',
      tradePrice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageOrdersResponseBodyPage extends $dara.Model {
  currentPage?: number;
  orderList?: DescribePackageOrdersResponseBodyPageOrderList[];
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      orderList: 'OrderList',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      orderList: { 'type': 'array', 'itemType': DescribePackageOrdersResponseBodyPageOrderList },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageOrdersResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  page?: DescribePackageOrdersResponseBodyPage;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      page: DescribePackageOrdersResponseBodyPage,
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

