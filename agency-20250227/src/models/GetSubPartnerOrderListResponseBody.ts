// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerOrderListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Order discount
   * 
   * @example
   * 0.9
   */
  amountDiscount?: number;
  /**
   * @remarks
   * Actual payment amount
   * 
   * @example
   * 3750
   */
  amountDue?: number;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-07-07 07:52:22
   */
  createdAt?: string;
  /**
   * @remarks
   * Customer classification
   * 
   * @example
   * C类
   */
  customerClassification?: string;
  /**
   * @remarks
   * Coupon amount
   * 
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @remarks
   * Discounted price
   * 
   * @example
   * 3750
   */
  discountedPrice?: number;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 236414227150922
   */
  orderId?: number;
  /**
   * @remarks
   * Order status:  
   * - 1 Unpaid  
   * - 2 Abandoned  
   * - 3 Paid
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * Order type:  
   * - BUY: New purchase  
   * - UPGRADE: Upgrade  
   * - DOWNGRADE: Downgrade  
   * - RENEW: Renewal  
   * - REFUND: Refund  
   * - OTHERS: Others
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * Payment Time
   * 
   * @example
   * 2024-07-07 07:52:22
   */
  paidAt?: string;
  /**
   * @remarks
   * Payment type:  
   * 1: Non-agent payment  
   * 2: Agent payment
   * 
   * @example
   * 1
   */
  payType?: number;
  /**
   * @remarks
   * Original price/List price
   * 
   * @example
   * 3750
   */
  price?: number;
  /**
   * @remarks
   * Product code
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * Product name.
   * 
   * @example
   * 弹性计算
   */
  productName?: string;
  /**
   * @remarks
   * Opportunity ID
   * 
   * @example
   * 202502233443
   */
  projectId?: number;
  /**
   * @remarks
   * Sub-partner Name
   * 
   * @example
   * xxx有限公司
   */
  subPartnerName?: string;
  /**
   * @remarks
   * Secondary partner UID
   * 
   * @example
   * 1123132
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      amountDiscount: 'AmountDiscount',
      amountDue: 'AmountDue',
      createdAt: 'CreatedAt',
      customerClassification: 'CustomerClassification',
      deductedAmountByCoupons: 'DeductedAmountByCoupons',
      discountedPrice: 'DiscountedPrice',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      paidAt: 'PaidAt',
      payType: 'PayType',
      price: 'Price',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountDiscount: 'number',
      amountDue: 'number',
      createdAt: 'string',
      customerClassification: 'string',
      deductedAmountByCoupons: 'number',
      discountedPrice: 'number',
      orderId: 'number',
      orderStatus: 'number',
      orderType: 'string',
      paidAt: 'string',
      payType: 'number',
      price: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      subPartnerName: 'string',
      subPartnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerOrderListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: GetSubPartnerOrderListResponseBodyData[];
  /**
   * @remarks
   * Message
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Paging size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * TotalCount indicates the total amount of data under the current request conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSubPartnerOrderListResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

