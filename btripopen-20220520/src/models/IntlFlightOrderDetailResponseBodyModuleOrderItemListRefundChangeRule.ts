// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue } from "./ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue";


export class IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule extends $dara.Model {
  /**
   * @example
   * false
   */
  cancelFeeInd?: boolean;
  /**
   * @example
   * false
   */
  changeFeeInd?: boolean;
  offerPenaltyInfoMap?: { [key: string]: ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue[] };
  refundChangeDigest?: string;
  /**
   * @example
   * true
   */
  structuredRefund?: boolean;
  static names(): { [key: string]: string } {
    return {
      cancelFeeInd: 'cancel_fee_ind',
      changeFeeInd: 'change_fee_ind',
      offerPenaltyInfoMap: 'offer_penalty_info_map',
      refundChangeDigest: 'refund_change_digest',
      structuredRefund: 'structured_refund',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelFeeInd: 'boolean',
      changeFeeInd: 'boolean',
      offerPenaltyInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue } },
      refundChangeDigest: 'string',
      structuredRefund: 'boolean',
    };
  }

  validate() {
    if(this.offerPenaltyInfoMap) {
      $dara.Model.validateMap(this.offerPenaltyInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

