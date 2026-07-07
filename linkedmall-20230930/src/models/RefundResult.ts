// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyReason } from "./ApplyReason";
import { RefundFeeData } from "./RefundFeeData";


export class RefundResult extends $dara.Model {
  /**
   * @remarks
   * Current buyer\\"s refund request description
   * 
   * @example
   * 多拍不想要
   */
  applyDisputeDesc?: string;
  /**
   * @remarks
   * Request reason
   */
  applyReason?: ApplyReason;
  /**
   * @remarks
   * Order return method  
   * 1 – identity indicates refund only  
   * 3 – identity indicates return and refund
   * 
   * @example
   * 1
   */
  bizClaimType?: number;
  /**
   * @remarks
   * Dispute creation time
   * 
   * @example
   * 2023-09-15T19:23:59.000+08:00
   */
  disputeCreateTime?: string;
  /**
   * @remarks
   * Reverse request description
   * 
   * @example
   * 多拍不想要
   */
  disputeDesc?: string;
  /**
   * @remarks
   * Reverse process end time
   * 
   * @example
   * 2023-09-15T19:23:59.000+08:00
   */
  disputeEndTime?: string;
  /**
   * @remarks
   * Reverse order ID
   * 
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @remarks
   * Reverse order status  
   * 1 – Return pending  
   * 2 – Awaiting buyer return  
   * 3 – Awaiting merchant receipt  
   * 4 – Refund shutdown  
   * 5 – Refund succeeded  
   * 6 – Refund denied  
   * 17 – Canceling refund
   * 
   * @example
   * 1
   */
  disputeStatus?: number;
  /**
   * @remarks
   * Main order ID
   * 
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @remarks
   * Sub-order ID
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @remarks
   * Order logistics status  
   * 1 – Not shipped → Awaiting seller shipment  
   * 2 – Shipped → Awaiting buyer confirmation of receipt  
   * 3 – Received → Transaction succeeded  
   * 6 – Partially shipping  
   * 8 – Logistics order not yet created
   * 
   * @example
   * 1
   */
  orderLogisticsStatus?: number;
  /**
   * @remarks
   * Refund amount
   * 
   * @example
   * 1
   */
  refundFee?: number;
  /**
   * @remarks
   * Refund period
   */
  refundFeeData?: RefundFeeData;
  /**
   * @remarks
   * Merchant return address (available when disputeStatus=2, indicating the status is pending buyer return; save the return address during this status if needed)
   * 
   * @example
   * 阿里云云谷
   */
  refunderAddress?: string;
  /**
   * @remarks
   * Return recipient name
   * 
   * @example
   * 赵先生
   */
  refunderName?: string;
  /**
   * @remarks
   * Return contact information
   * 
   * @example
   * 182****1334
   */
  refunderTel?: string;
  /**
   * @remarks
   * Return address ZIP code
   * 
   * @example
   * 331001
   */
  refunderZipCode?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @remarks
   * Return logistics status  
   * 0 – Return not initiated  
   * 1 – Awaiting pickup  
   * 2 – Package picked up  
   * 3 – In transit  
   * 4 – Out for delivery  
   * 5 – Delivered  
   * 6 – Delivery failed
   * 
   * @example
   * 0
   */
  returnGoodLogisticsStatus?: number;
  /**
   * @remarks
   * Seller’s return approval message
   * 
   * @example
   * 同意退款
   */
  sellerAgreeMsg?: string;
  /**
   * @remarks
   * Merchant\\"s message explaining the denial
   * 
   * @example
   * 不同意退款
   */
  sellerRefuseAgreementMessage?: string;
  /**
   * @remarks
   * Merchant denial reason
   * 
   * @example
   * 商品没问题，买家举证无效
   */
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

