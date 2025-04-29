// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderCreateRequestApplicant } from "./InsureOrderCreateRequestApplicant";
import { InsureOrderCreateRequestInsPersonAndSegmentList } from "./InsureOrderCreateRequestInsPersonAndSegmentList";


export class InsureOrderCreateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicant?: InsureOrderCreateRequestApplicant;
  /**
   * @example
   * 20202109390122
   */
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
   * 
   * @example
   * PostalSavingsBank
   */
  isvName?: string;
  /**
   * @example
   * 100000320302020
   */
  outInsOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202310101026030
   */
  outOrderId?: string;
  /**
   * @example
   * 1020030003332000
   */
  outSubOrderId?: string;
  /**
   * @example
   * fliggy
   */
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

