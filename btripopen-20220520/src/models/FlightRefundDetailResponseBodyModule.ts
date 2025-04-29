// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightRefundDetailResponseBodyModuleRefundFeeList } from "./FlightRefundDetailResponseBodyModuleRefundFeeList";


export class FlightRefundDetailResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123
   */
  btripOrderId?: number;
  /**
   * @example
   * 123
   */
  btripSubOrderId?: number;
  /**
   * @example
   * dis1234
   */
  disOrderId?: string;
  /**
   * @example
   * refun123
   */
  disSubOrderId?: string;
  /**
   * @example
   * 1
   */
  isVoluntary?: number;
  reason?: string;
  /**
   * @example
   * 100
   */
  refundFee?: number;
  refundFeeList?: FlightRefundDetailResponseBodyModuleRefundFeeList[];
  /**
   * @example
   * 100
   */
  refundPrice?: number;
  /**
   * @example
   * 0
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      isVoluntary: 'is_voluntary',
      reason: 'reason',
      refundFee: 'refund_fee',
      refundFeeList: 'refund_fee_list',
      refundPrice: 'refund_price',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      isVoluntary: 'number',
      reason: 'string',
      refundFee: 'number',
      refundFeeList: { 'type': 'array', 'itemType': FlightRefundDetailResponseBodyModuleRefundFeeList },
      refundPrice: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundFeeList)) {
      $dara.Model.validateArray(this.refundFeeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

