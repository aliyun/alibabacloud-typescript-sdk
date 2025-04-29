// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee extends $dara.Model {
  noRefundModifyHandFee?: number;
  noRefundModifyUpgradeFee?: number;
  refundAmount?: number;
  refundHandFee?: number;
  refundModifyAmount?: number;
  refundModifyHandAmount?: number;
  refundModifyUpgradeAmount?: number;
  refundTaxHandFee?: number;
  /**
   * @example
   * 0132
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      noRefundModifyHandFee: 'no_refund_modify_hand_fee',
      noRefundModifyUpgradeFee: 'no_refund_modify_upgrade_fee',
      refundAmount: 'refund_amount',
      refundHandFee: 'refund_hand_fee',
      refundModifyAmount: 'refund_modify_amount',
      refundModifyHandAmount: 'refund_modify_hand_amount',
      refundModifyUpgradeAmount: 'refund_modify_upgrade_amount',
      refundTaxHandFee: 'refund_tax_hand_fee',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noRefundModifyHandFee: 'number',
      noRefundModifyUpgradeFee: 'number',
      refundAmount: 'number',
      refundHandFee: 'number',
      refundModifyAmount: 'number',
      refundModifyHandAmount: 'number',
      refundModifyUpgradeAmount: 'number',
      refundTaxHandFee: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

