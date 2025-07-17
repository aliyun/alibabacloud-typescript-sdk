// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEffectiveOrdersResponseBodyOrderSummaryOrderList extends $dara.Model {
  /**
   * @remarks
   * The UID of the user who placed the order.
   * 
   * @example
   * 2698420314****
   */
  buyerId?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2022-11-24 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of database instances that you can use DMS to manage.
   * 
   * @example
   * 7
   */
  insNum?: string;
  /**
   * @remarks
   * The ID of the instance for the purchased service.
   * 
   * @example
   * rm-bp1xd1v866****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2190037****
   */
  orderId?: string;
  /**
   * @remarks
   * The time when the instance is started.
   * 
   * @example
   * 2022-10-24 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      endTime: 'EndTime',
      insNum: 'InsNum',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      endTime: 'string',
      insNum: 'string',
      instanceId: 'string',
      orderId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEffectiveOrdersResponseBodyOrderSummary extends $dara.Model {
  /**
   * @remarks
   * The commodity code of DMS.
   * 
   * *   dms_pre_public_cn: DMS that uses the subscription billing method
   * *   dms_post_public_cn: DMS that uses the pay-as-you-go billing method
   * 
   * @example
   * dms_pre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * *   **VersionType**: DMS that supports control modes
   * *   **SensitiveDataProtection**: DMS that supports sensitive data protection
   * 
   * @example
   * VersionType
   */
  commodityType?: string;
  /**
   * @remarks
   * Details about the orders.
   */
  orderList?: ListEffectiveOrdersResponseBodyOrderSummaryOrderList[];
  /**
   * @remarks
   * The sum of the number of instances that you can use DMS to manage in all orders.
   * 
   * @example
   * 12
   */
  totalQuota?: number;
  /**
   * @remarks
   * The control mode of DMS. Valid values:
   * 
   * *   **stand**: Stable Change
   * *   **safety**: Security Collaboration
   * 
   * @example
   * safety
   */
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityType: 'CommodityType',
      orderList: 'OrderList',
      totalQuota: 'TotalQuota',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityType: 'string',
      orderList: { 'type': 'array', 'itemType': ListEffectiveOrdersResponseBodyOrderSummaryOrderList },
      totalQuota: 'number',
      versionType: 'string',
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

export class ListEffectiveOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about orders.
   */
  orderSummary?: ListEffectiveOrdersResponseBodyOrderSummary[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8FE12AA-300D-5FDF-806F-C2CB99161F32
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      orderSummary: 'OrderSummary',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      orderSummary: { 'type': 'array', 'itemType': ListEffectiveOrdersResponseBodyOrderSummary },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.orderSummary)) {
      $dara.Model.validateArray(this.orderSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

