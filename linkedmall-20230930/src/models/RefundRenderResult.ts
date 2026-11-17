// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionMaxRefundFee } from "./DistributionMaxRefundFee";
import { RefundReason } from "./RefundReason";


export class RefundRenderResult extends $dara.Model {
  /**
   * @remarks
   * The supported order return methods.
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @remarks
   * The refund fee.
   * 
   * @example
   * {"minRefundFee":1,"maxRefundFee":100}
   */
  maxRefundFeeData?: DistributionMaxRefundFee;
  /**
   * @remarks
   * The sub-distribution order ID.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @remarks
   * The refund reason list.
   */
  refundReasonList?: RefundReason[];
  /**
   * @remarks
   * The API request ID.
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

