// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOrderDetailV2Request extends $dara.Model {
  /**
   * @example
   * name
   */
  isvName?: string;
  /**
   * @example
   * 1019195786853020
   */
  modifyApplyId?: string;
  /**
   * @example
   * false
   */
  needQueryServiceFee?: boolean;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: string;
  outModifyApplyId?: string;
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      modifyApplyId: 'modify_apply_id',
      needQueryServiceFee: 'need_query_service_fee',
      orderId: 'order_id',
      outModifyApplyId: 'out_modify_apply_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      modifyApplyId: 'string',
      needQueryServiceFee: 'boolean',
      orderId: 'string',
      outModifyApplyId: 'string',
      outOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

