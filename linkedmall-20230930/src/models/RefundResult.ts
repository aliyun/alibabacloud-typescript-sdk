// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyReason } from "./ApplyReason";
import { RefundFeeData } from "./RefundFeeData";


export class RefundResult extends $dara.Model {
  applyDisputeDesc?: string;
  applyReason?: ApplyReason;
  /**
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @example
   * 2023-09-02T00:00:00.000Z
   */
  disputeCreateTime?: string;
  disputeDesc?: string;
  /**
   * @example
   * 2023-09-02T12:00:00.000Z
   */
  disputeEndTime?: string;
  /**
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @example
   * 1
   */
  disputeStatus?: number;
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @example
   * 1
   */
  orderLogisticsStatus?: number;
  /**
   * @example
   * 1
   */
  refundFee?: number;
  refundFeeData?: RefundFeeData;
  refunderAddress?: string;
  refunderName?: string;
  /**
   * @example
   * 182****1334
   */
  refunderTel?: string;
  /**
   * @example
   * 331001
   */
  refunderZipCode?: string;
  /**
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  returnGoodLogisticsStatus?: number;
  sellerAgreeMsg?: string;
  sellerRefuseAgreementMessage?: string;
  sellerRefuseReason?: string;
  static names(): { [key: string]: string } {
    return {
      applyDisputeDesc: 'applyDisputeDesc',
      applyReason: 'applyReason',
      bizClaimType: 'bizClaimType',
      disputeCreateTime: 'disputeCreateTime',
      disputeDesc: 'disputeDesc',
      disputeEndTime: 'disputeEndTime',
      disputeId: 'disputeId',
      disputeStatus: 'disputeStatus',
      orderId: 'orderId',
      orderLineId: 'orderLineId',
      orderLogisticsStatus: 'orderLogisticsStatus',
      refundFee: 'refundFee',
      refundFeeData: 'refundFeeData',
      refunderAddress: 'refunderAddress',
      refunderName: 'refunderName',
      refunderTel: 'refunderTel',
      refunderZipCode: 'refunderZipCode',
      requestId: 'requestId',
      returnGoodLogisticsStatus: 'returnGoodLogisticsStatus',
      sellerAgreeMsg: 'sellerAgreeMsg',
      sellerRefuseAgreementMessage: 'sellerRefuseAgreementMessage',
      sellerRefuseReason: 'sellerRefuseReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDisputeDesc: 'string',
      applyReason: ApplyReason,
      bizClaimType: 'number',
      disputeCreateTime: 'string',
      disputeDesc: 'string',
      disputeEndTime: 'string',
      disputeId: 'string',
      disputeStatus: 'number',
      orderId: 'string',
      orderLineId: 'string',
      orderLogisticsStatus: 'number',
      refundFee: 'number',
      refundFeeData: RefundFeeData,
      refunderAddress: 'string',
      refunderName: 'string',
      refunderTel: 'string',
      refunderZipCode: 'string',
      requestId: 'string',
      returnGoodLogisticsStatus: 'number',
      sellerAgreeMsg: 'string',
      sellerRefuseAgreementMessage: 'string',
      sellerRefuseReason: 'string',
    };
  }

  validate() {
    if(this.applyReason && typeof (this.applyReason as any).validate === 'function') {
      (this.applyReason as any).validate();
    }
    if(this.refundFeeData && typeof (this.refundFeeData as any).validate === 'function') {
      (this.refundFeeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

