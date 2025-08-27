// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderDetailResponseBodyModuleApplicant extends $dara.Model {
  certName?: string;
  /**
   * @example
   * 3300000000000
   */
  certNo?: string;
  /**
   * @example
   * 100
   */
  certType?: string;
  /**
   * @example
   * 13000000000
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

export class InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment extends $dara.Model {
  /**
   * @example
   * TYN
   */
  arrAirportCode?: string;
  /**
   * @example
   * HYN
   */
  arrCity?: string;
  /**
   * @example
   * SYX
   */
  arrCityCode?: string;
  /**
   * @example
   * 2023-10-11 11:30:00
   */
  arrTime?: string;
  /**
   * @example
   * TYN
   */
  depAirportCode?: string;
  /**
   * @example
   * CTU
   */
  depCity?: string;
  /**
   * @example
   * LXA
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-10-11 11:30:00
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

export class InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured extends $dara.Model {
  /**
   * @example
   * 1983-11-25
   */
  birthday?: string;
  /**
   * @example
   * 100001
   */
  btripUserId?: string;
  certName?: string;
  /**
   * @example
   * 30000000000
   */
  certNo?: string;
  /**
   * @example
   * 100
   */
  certType?: string;
  /**
   * @example
   * F
   */
  gender?: string;
  /**
   * @example
   * 130000000
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

export class InsureOrderDetailResponseBodyModuleInsureOrderDetailList extends $dara.Model {
  /**
   * @example
   * 2023-10-12 10:00:00
   */
  effectiveEndTime?: string;
  /**
   * @example
   * 2023-10-11 10:00:00
   */
  effectiveStartTime?: string;
  insureSegment?: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment;
  /**
   * @example
   * 2023-10-11 11:30:00
   */
  insureTime?: string;
  insured?: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured;
  /**
   * @example
   * 1021000196440356922
   */
  outSubInsOrderId?: string;
  /**
   * @example
   * 22222222222
   */
  policyNo?: string;
  /**
   * @example
   * 30
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
   * CLOSED
   */
  status?: string;
  /**
   * @example
   * 1021000196440356901
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
      price: 'price',
      productName: 'product_name',
      productNo: 'product_no',
      status: 'status',
      subInsOrderId: 'sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      insureSegment: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment,
      insureTime: 'string',
      insured: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured,
      outSubInsOrderId: 'string',
      policyNo: 'string',
      price: 'number',
      productName: 'string',
      productNo: 'string',
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

export class InsureOrderDetailResponseBodyModule extends $dara.Model {
  applicant?: InsureOrderDetailResponseBodyModuleApplicant;
  /**
   * @example
   * 1021000196440356901
   */
  insOrderId?: string;
  insureOrderDetailList?: InsureOrderDetailResponseBodyModuleInsureOrderDetailList[];
  /**
   * @example
   * CLOSED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      insOrderId: 'ins_order_id',
      insureOrderDetailList: 'insure_order_detail_list',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: InsureOrderDetailResponseBodyModuleApplicant,
      insOrderId: 'string',
      insureOrderDetailList: { 'type': 'array', 'itemType': InsureOrderDetailResponseBodyModuleInsureOrderDetailList },
      status: 'string',
    };
  }

  validate() {
    if(this.applicant && typeof (this.applicant as any).validate === 'function') {
      (this.applicant as any).validate();
    }
    if(Array.isArray(this.insureOrderDetailList)) {
      $dara.Model.validateArray(this.insureOrderDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsureOrderDetailResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: InsureOrderDetailResponseBodyModule;
  /**
   * @example
   * 4498BDAB-2AAF-5B6F-942A-3C1C935345C9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
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
      module: InsureOrderDetailResponseBodyModule,
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

