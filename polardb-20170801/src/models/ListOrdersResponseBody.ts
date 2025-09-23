// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrdersResponseBodyOrderList extends $dara.Model {
  /**
   * @example
   * 1910740440664****
   */
  aliUid?: string;
  /**
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @example
   * polardb_payg_intl
   */
  commodityCode?: string;
  /**
   * @example
   * 2021-03-31T16:09:13
   */
  createdTime?: string;
  /**
   * @example
   * pc-uf6k532gav*******
   */
  instanceId?: string;
  /**
   * @example
   * 25808743077*****
   */
  orderId?: string;
  /**
   * @example
   * completed
   */
  orderStatus?: string;
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * polardb
   */
  produceCode?: string;
  /**
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
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderList?: ListOrdersResponseBodyOrderList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 3AA69096-757C-4647-B36C-29EBC2******
   */
  requestId?: string;
  /**
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

