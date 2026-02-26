// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionMaxRefundFee } from "./DistributionMaxRefundFee";
import { RefundReason } from "./RefundReason";


export class RefundRenderResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizClaimType?: number;
  maxRefundFeeData?: DistributionMaxRefundFee;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  refundReasonList?: RefundReason[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'bizClaimType',
      maxRefundFeeData: 'maxRefundFeeData',
      orderLineId: 'orderLineId',
      refundReasonList: 'refundReasonList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      maxRefundFeeData: DistributionMaxRefundFee,
      orderLineId: 'string',
      refundReasonList: { 'type': 'array', 'itemType': RefundReason },
      requestId: 'string',
    };
  }

  validate() {
    if(this.maxRefundFeeData && typeof (this.maxRefundFeeData as any).validate === 'function') {
      (this.maxRefundFeeData as any).validate();
    }
    if(Array.isArray(this.refundReasonList)) {
      $dara.Model.validateArray(this.refundReasonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

