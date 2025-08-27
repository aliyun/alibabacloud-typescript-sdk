// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureRefundDetailResponseBodyModuleInsureOrderApplicant extends $dara.Model {
  certName?: string;
  /**
   * @example
   * 300000000000000001
   */
  certNo?: string;
  /**
   * @example
   * 102
   */
  certType?: string;
  /**
   * @example
   * 10000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'cert_name',
      certNo: 'cert_no',
      certType: 'cert_type',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureRefundDetailResponseBodyModuleInsureOrder extends $dara.Model {
  applicant?: InsureRefundDetailResponseBodyModuleInsureOrderApplicant;
  /**
   * @example
   * 5142701029379
   */
  bizOrderId?: string;
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * 2023-04-11T21:21Z
   */
  closeTime?: string;
  /**
   * @example
   * 100000000001
   */
  insOrderId?: string;
  /**
   * @example
   * 200300333333
   */
  outInsOrderId?: string;
  /**
   * @example
   * 2023-04-11T21:21Z
   */
  payTime?: string;
  /**
   * @example
   * 83000
   */
  price?: number;
  /**
   * @example
   * 4
   */
  settleType?: number;
  /**
   * @example
   * PAID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      bizOrderId: 'biz_order_id',
      bizType: 'biz_type',
      closeTime: 'close_time',
      insOrderId: 'ins_order_id',
      outInsOrderId: 'out_ins_order_id',
      payTime: 'pay_time',
      price: 'price',
      settleType: 'settle_type',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: InsureRefundDetailResponseBodyModuleInsureOrderApplicant,
      bizOrderId: 'string',
      bizType: 'number',
      closeTime: 'string',
      insOrderId: 'string',
      outInsOrderId: 'string',
      payTime: 'string',
      price: 'number',
      settleType: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.applicant && typeof (this.applicant as any).validate === 'function') {
      (this.applicant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment extends $dara.Model {
  /**
   * @example
   * WHA
   */
  arrAirportCode?: string;
  arrCity?: string;
  /**
   * @example
   * YTY
   */
  arrCityCode?: string;
  /**
   * @example
   * 2023-05-27 23:00:00
   */
  arrTime?: string;
  /**
   * @example
   * NGB
   */
  depAirportCode?: string;
  depCity?: string;
  /**
   * @example
   * NGB
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-05-27 20:30:00
   */
  depTime?: string;
  /**
   * @example
   * CZ3501
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTime: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTime: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured extends $dara.Model {
  /**
   * @example
   * 1996-07-25
   */
  birthday?: string;
  /**
   * @example
   * 10000001
   */
  btripUserId?: string;
  certName?: string;
  /**
   * @example
   * 300000000000000000
   */
  certNo?: string;
  /**
   * @example
   * 102
   */
  certType?: string;
  /**
   * @example
   * F
   */
  gender?: string;
  /**
   * @example
   * 1000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      btripUserId: 'btrip_user_id',
      certName: 'cert_name',
      certNo: 'cert_no',
      certType: 'cert_type',
      gender: 'gender',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      btripUserId: 'string',
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      gender: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureRefundDetailResponseBodyModuleSubOrderRefundList extends $dara.Model {
  /**
   * @example
   * 2023-04-17T20:25Z
   */
  effectiveEndTime?: string;
  /**
   * @example
   * 2023-04-17T20:25Z
   */
  effectiveStartTime?: string;
  insureSegment?: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment;
  /**
   * @example
   * 2023-04-17T20:07Z
   */
  insureTime?: string;
  insured?: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured;
  /**
   * @example
   * OUT123333444
   */
  outSubInsOrderId?: string;
  /**
   * @example
   * T230411000000140183629
   */
  policyNo?: string;
  /**
   * @example
   * 1024194640018002
   */
  policyRefundNo?: string;
  /**
   * @example
   * 73000
   */
  price?: number;
  productName?: string;
  /**
   * @example
   * 008801.accident.flight.104000
   */
  productNo?: string;
  /**
   * @example
   * REFUND_SUCCESS
   */
  refundStatus?: string;
  /**
   * @example
   * 2023-04-17T20:25Z
   */
  refundTime?: string;
  /**
   * @example
   * REFUND_SUCCESS
   */
  status?: string;
  /**
   * @example
   * s1231231344
   */
  subInsOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveEndTime: 'effective_end_time',
      effectiveStartTime: 'effective_start_time',
      insureSegment: 'insure_segment',
      insureTime: 'insure_time',
      insured: 'insured',
      outSubInsOrderId: 'out_sub_ins_order_id',
      policyNo: 'policy_no',
      policyRefundNo: 'policy_refund_no',
      price: 'price',
      productName: 'product_name',
      productNo: 'product_no',
      refundStatus: 'refund_status',
      refundTime: 'refund_time',
      status: 'status',
      subInsOrderId: 'sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      insureSegment: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment,
      insureTime: 'string',
      insured: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured,
      outSubInsOrderId: 'string',
      policyNo: 'string',
      policyRefundNo: 'string',
      price: 'number',
      productName: 'string',
      productNo: 'string',
      refundStatus: 'string',
      refundTime: 'string',
      status: 'string',
      subInsOrderId: 'string',
    };
  }

  validate() {
    if(this.insureSegment && typeof (this.insureSegment as any).validate === 'function') {
      (this.insureSegment as any).validate();
    }
    if(this.insured && typeof (this.insured as any).validate === 'function') {
      (this.insured as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureRefundDetailResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1423050918202760437
   */
  applyId?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  gmtModified?: string;
  /**
   * @example
   * 100000000001
   */
  insOrderId?: string;
  insureOrder?: InsureRefundDetailResponseBodyModuleInsureOrder;
  /**
   * @example
   * 23102301010
   */
  outApplyId?: string;
  subOrderRefundList?: InsureRefundDetailResponseBodyModuleSubOrderRefundList[];
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      insOrderId: 'ins_order_id',
      insureOrder: 'insure_order',
      outApplyId: 'out_apply_id',
      subOrderRefundList: 'sub_order_refund_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      insOrderId: 'string',
      insureOrder: InsureRefundDetailResponseBodyModuleInsureOrder,
      outApplyId: 'string',
      subOrderRefundList: { 'type': 'array', 'itemType': InsureRefundDetailResponseBodyModuleSubOrderRefundList },
    };
  }

  validate() {
    if(this.insureOrder && typeof (this.insureOrder as any).validate === 'function') {
      (this.insureOrder as any).validate();
    }
    if(Array.isArray(this.subOrderRefundList)) {
      $dara.Model.validateArray(this.subOrderRefundList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureRefundDetailResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: InsureRefundDetailResponseBodyModule;
  /**
   * @example
   * 2103a75b16843756660655464d56a9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210bc44e16818128994413918de6c1
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: InsureRefundDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

