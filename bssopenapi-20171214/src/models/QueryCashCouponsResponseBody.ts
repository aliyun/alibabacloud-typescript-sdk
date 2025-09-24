// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCashCouponsResponseBodyDataCashCoupon extends $dara.Model {
  /**
   * @remarks
   * The service to which the voucher is applicable.
   * 
   * @example
   * All Alibaba Cloud services
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The scenario to which the voucher is applicable.
   * 
   * @example
   * Pay for the pay-as-you-go bills of Alibaba Cloud services or purchase an instance of an Alibaba Cloud service
   */
  applicableScenarios?: string;
  /**
   * @remarks
   * The remaining quota of the voucher.
   * 
   * @example
   * 100.00
   */
  balance?: string;
  /**
   * @remarks
   * The ID of the voucher.
   * 
   * @example
   * 34534253254325
   */
  cashCouponId?: number;
  /**
   * @remarks
   * The code of the voucher.
   * 
   * @example
   * Q-b1485def8f04a
   */
  cashCouponNo?: string;
  /**
   * @remarks
   * The description of the voucher.
   * 
   * @example
   * This voucher is used for testing product function
   */
  description?: string;
  /**
   * @remarks
   * The time when the voucher took effect.
   * 
   * @example
   * 2018-08-02T15:15:50Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the voucher expired.
   * 
   * @example
   * 2019-01-29T15:15:50Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The time when the voucher was released.
   * 
   * @example
   * 2018-08-02T15:15:50Z
   */
  grantedTime?: string;
  /**
   * @remarks
   * The denomination of the voucher.
   * 
   * @example
   * 100.00
   */
  nominalValue?: string;
  /**
   * @remarks
   * The state of the voucher. Valid values:
   * 
   * *   Available: The voucher is valid.
   * *   Expired: The voucher has expired.
   * *   Cancelled: The voucher is canceled.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      balance: 'Balance',
      cashCouponId: 'CashCouponId',
      cashCouponNo: 'CashCouponNo',
      description: 'Description',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      applicableScenarios: 'string',
      balance: 'string',
      cashCouponId: 'number',
      cashCouponNo: 'string',
      description: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
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

export class QueryCashCouponsResponseBodyData extends $dara.Model {
  cashCoupon?: QueryCashCouponsResponseBodyDataCashCoupon[];
  static names(): { [key: string]: string } {
    return {
      cashCoupon: 'CashCoupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashCoupon: { 'type': 'array', 'itemType': QueryCashCouponsResponseBodyDataCashCoupon },
    };
  }

  validate() {
    if(Array.isArray(this.cashCoupon)) {
      $dara.Model.validateArray(this.cashCoupon);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCashCouponsResponseBodyData;
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
   * 147B566E-DB4C-4E43-BDBB-5DB1D9D268DB
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
      data: QueryCashCouponsResponseBodyData,
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

