// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderCreateRequestApplicant extends $dara.Model {
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

export class InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment extends $dara.Model {
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

export class InsureOrderCreateRequestInsPersonAndSegmentListInsured extends $dara.Model {
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

export class InsureOrderCreateRequestInsPersonAndSegmentList extends $dara.Model {
  insureSegment?: InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment;
  insured?: InsureOrderCreateRequestInsPersonAndSegmentListInsured;
  outSubInsOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      insureSegment: 'insure_segment',
      insured: 'insured',
      outSubInsOrderId: 'out_sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insureSegment: InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment,
      insured: InsureOrderCreateRequestInsPersonAndSegmentListInsured,
      outSubInsOrderId: 'string',
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

export class InsureOrderCreateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicant?: InsureOrderCreateRequestApplicant;
  btripUserId?: string;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  insPersonAndSegmentList?: InsureOrderCreateRequestInsPersonAndSegmentList[];
  /**
   * @remarks
   * This parameter is required.
   */
  isvName?: string;
  outInsOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outOrderId?: string;
  outSubOrderId?: string;
  supplierCode?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      insPersonAndSegmentList: 'ins_person_and_segment_list',
      isvName: 'isv_name',
      outInsOrderId: 'out_ins_order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: InsureOrderCreateRequestApplicant,
      btripUserId: 'string',
      buyerName: 'string',
      insPersonAndSegmentList: { 'type': 'array', 'itemType': InsureOrderCreateRequestInsPersonAndSegmentList },
      isvName: 'string',
      outInsOrderId: 'string',
      outOrderId: 'string',
      outSubOrderId: 'string',
      supplierCode: 'string',
    };
  }

  validate() {
    if(this.applicant && typeof (this.applicant as any).validate === 'function') {
      (this.applicant as any).validate();
    }
    if(Array.isArray(this.insPersonAndSegmentList)) {
      $dara.Model.validateArray(this.insPersonAndSegmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

