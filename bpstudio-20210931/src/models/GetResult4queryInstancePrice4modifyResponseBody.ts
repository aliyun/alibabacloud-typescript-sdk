// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList extends $dara.Model {
  /**
   * @example
   * 2
   */
  discountAmount?: number;
  error?: string;
  /**
   * @example
   * vpc
   */
  nodeType?: string;
  /**
   * @example
   * 3
   */
  originalAmount?: number;
  priceUnit?: string;
  promotionName?: string;
  /**
   * @example
   * 1
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalAmount: 'OriginalAmount',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalAmount: 'number',
      priceUnit: 'string',
      promotionName: 'string',
      tradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResult4QueryInstancePrice4ModifyResponseBodyData extends $dara.Model {
  priceList?: GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList[];
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * d9a3e99b-6954-4a16-ad51-954db4a528b7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      priceList: 'PriceList',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceList: { 'type': 'array', 'itemType': GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResult4QueryInstancePrice4ModifyResponseBody extends $dara.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetResult4QueryInstancePrice4ModifyResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetResult4QueryInstancePrice4ModifyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

