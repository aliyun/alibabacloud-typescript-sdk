// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderCreateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicantShrink?: string;
  btripUserId?: string;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  insPersonAndSegmentListShrink?: string;
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
      applicantShrink: 'applicant',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      insPersonAndSegmentListShrink: 'ins_person_and_segment_list',
      isvName: 'isv_name',
      outInsOrderId: 'out_ins_order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantShrink: 'string',
      btripUserId: 'string',
      buyerName: 'string',
      insPersonAndSegmentListShrink: 'string',
      isvName: 'string',
      outInsOrderId: 'string',
      outOrderId: 'string',
      outSubOrderId: 'string',
      supplierCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

