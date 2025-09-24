// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRedeemResponseBodyDataRedeemRedeem extends $dara.Model {
  /**
   * @remarks
   * The services to which the redemption coupon is applicable.
   * 
   * @example
   * Elastic Compute Service (ECS)
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The balance of the redemption coupon.
   * 
   * @example
   * 0
   */
  balance?: string;
  /**
   * @remarks
   * The time when the redemption coupon took effect.
   * 
   * @example
   * 2018-05-14 20:25:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the redemption coupon expired.
   * 
   * @example
   * 2018-06-13 20:25:00
   */
  expiryTime?: string;
  /**
   * @remarks
   * The time when the redemption coupon was issued.
   * 
   * @example
   * 2018-05-14 20:25:00
   */
  grantedTime?: string;
  /**
   * @remarks
   * The nominal value of the redemption coupon.
   * 
   * @example
   * 0
   */
  nominalValue?: string;
  /**
   * @remarks
   * The ID of the redemption coupon.
   * 
   * @example
   * 1342
   */
  redeemId?: string;
  /**
   * @remarks
   * The number of the redemption coupon.
   * 
   * @example
   * 4889*****1610
   */
  redeemNo?: string;
  /**
   * @remarks
   * The specifications of the redemption coupon.
   * 
   * @example
   * N/A
   */
  specification?: string;
  /**
   * @remarks
   * The status of the redemption coupon. Valid values:
   * 
   * *   Generated
   * *   CallBack
   * *   RefundPending
   * *   Canceled
   * *   Order_Canceled
   * *   ActivePending
   * *   ActiveSuccess
   * *   ExchangePending
   * *   ExchangeSuccess
   * *   Expired
   * 
   * @example
   * Generated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      balance: 'Balance',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      redeemId: 'RedeemId',
      redeemNo: 'RedeemNo',
      specification: 'Specification',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      balance: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      redeemId: 'string',
      redeemNo: 'string',
      specification: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyDataRedeem extends $dara.Model {
  redeem?: QueryRedeemResponseBodyDataRedeemRedeem[];
  static names(): { [key: string]: string } {
    return {
      redeem: 'Redeem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redeem: { 'type': 'array', 'itemType': QueryRedeemResponseBodyDataRedeemRedeem },
    };
  }

  validate() {
    if(Array.isArray(this.redeem)) {
      $dara.Model.validateArray(this.redeem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the redemption coupon.
   */
  redeem?: QueryRedeemResponseBodyDataRedeem;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      redeem: 'Redeem',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      redeem: QueryRedeemResponseBodyDataRedeem,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.redeem && typeof (this.redeem as any).validate === 'function') {
      (this.redeem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryRedeemResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E503DC7B-E4F0-4B3C-BC89-BCECF1338F0B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRedeemResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

