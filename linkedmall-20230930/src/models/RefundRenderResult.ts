// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionMaxRefundFee } from "./DistributionMaxRefundFee";
import { RefundReason } from "./RefundReason";


export class RefundRenderResult extends $dara.Model {
  /**
   * @remarks
   * The return methods supported for the order.
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  maxRefundFeeData?: DistributionMaxRefundFee;
  /**
   * @remarks
   * The ID of the sub-distribution order.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @remarks
   * A collection of refund reasons.
   */
  refundReasonList?: RefundReason[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
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

