// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderDetailResponseBodyModuleApplicant extends $dara.Model {
  certName?: string;
  certNo?: string;
  certType?: string;
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
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTime?: string;
  depAirportCode?: string;
  depCity?: string;
  depCityCode?: string;
  depTime?: string;
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
  birthday?: string;
  btripUserId?: string;
  certName?: string;
  certNo?: string;
  certType?: string;
  gender?: string;
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
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  insureSegment?: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment;
  insureTime?: string;
  insured?: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured;
  outSubInsOrderId?: string;
  policyNo?: string;
  price?: number;
  productName?: string;
  productNo?: string;
  status?: string;
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
  insOrderId?: string;
  insureOrderDetailList?: InsureOrderDetailResponseBodyModuleInsureOrderDetailList[];
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
  code?: string;
  message?: string;
  module?: InsureOrderDetailResponseBodyModule;
  requestId?: string;
  success?: boolean;
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

