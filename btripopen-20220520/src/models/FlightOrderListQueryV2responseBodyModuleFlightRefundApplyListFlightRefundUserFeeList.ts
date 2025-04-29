// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundUserFeeList extends $dara.Model {
  alreadyUseAmount?: number;
  nonRefundableReshopChangeAmount?: number;
  nonRefundableReshopUpgradeAmount?: number;
  refundAmount?: number;
  refundCorpAmount?: number;
  refundHandFee?: number;
  refundPersonAmount?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyUseAmount: 'already_use_amount',
      nonRefundableReshopChangeAmount: 'non_refundable_reshop_change_amount',
      nonRefundableReshopUpgradeAmount: 'non_refundable_reshop_upgrade_amount',
      refundAmount: 'refund_amount',
      refundCorpAmount: 'refund_corp_amount',
      refundHandFee: 'refund_hand_fee',
      refundPersonAmount: 'refund_person_amount',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyUseAmount: 'number',
      nonRefundableReshopChangeAmount: 'number',
      nonRefundableReshopUpgradeAmount: 'number',
      refundAmount: 'number',
      refundCorpAmount: 'number',
      refundHandFee: 'number',
      refundPersonAmount: 'number',
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

