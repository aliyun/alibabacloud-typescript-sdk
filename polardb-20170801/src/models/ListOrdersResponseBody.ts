// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrdersResponseBodyOrderList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1910740440664****
   */
  aliUid?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * - polardb_sub: subscription in the Chinese mainland.
   * 
   * - polardb_sub_intl: subscription in Hong Kong (China) and regions outside China.
   * 
   * - polardb_payg: pay-as-you-go in the Chinese mainland.
   * 
   * - polardb_payg_intl: pay-as-you-go in Hong Kong (China) and regions outside China.
   * 
   * - polardb_sub_jushita: Jushita subscription.
   * 
   * - polardb_payg_jushita: Jushita pay-as-you-go.
   * 
   * - polardb_sub_cainiao: Cainiao subscription.
   * 
   * - polardb_payg_cainiao: Cainiao pay-as-you-go.
   * 
   * > * If you use an Alibaba Cloud account for the China site, you can view only the commodity codes for the Chinese mainland.
   * >
   * > * If you use an Alibaba Cloud international site account, you can view only the commodity codes for regions outside the Chinese mainland.
   * >
   * > * If you use a Jushita account, you can view only the commodity codes for Jushita.
   * >
   * > * If you use a Cainiao account, you can view only the commodity codes for Cainiao.
   * 
   * @example
   * polardb_payg_intl
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the order was created.
   * 
   * @example
   * 2021-03-31T16:09:13
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-uf6k532gav*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 25808743077*****
   */
  orderId?: string;
  /**
   * @remarks
   * The status of the order.
   * 
   * - **pending**: The task is waiting to start.
   * 
   * - **create**: The order is placed and is being processed.
   * 
   * - **fail**: The instance failed to be created.
   * 
   * - **cancel**: The order is canceled.
   * 
   * - **success**: The instance is created.
   * 
   * @example
   * success
   */
  orderStatus?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * - BUY: The instance is purchased.
   * 
   * - UPGRADE: The instance configuration is changed.
   * 
   * - RENEW: The subscription is renewed.
   * 
   * - CONVERT: The billing method is changed.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * polardb
   */
  produceCode?: string;
  /**
   * @remarks
   * The region information
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      produceCode: 'ProduceCode',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      createdTime: 'string',
      instanceId: 'string',
      orderId: 'string',
      orderStatus: 'string',
      orderType: 'string',
      produceCode: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned for the current request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. If the query results are not returned in a single call, this token is returned. Use this token in a subsequent call to retrieve the remaining results.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of orders.
   * 
   * This parameter is required.
   */
  orderList?: ListOrdersResponseBodyOrderList[];
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3AA69096-757C-4647-B36C-29EBC2******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderList: 'OrderList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orderList: { 'type': 'array', 'itemType': ListOrdersResponseBodyOrderList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

