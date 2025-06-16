// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee extends $dara.Model {
  /**
   * @remarks
   * total price of the used flight tickets
   * 
   * @example
   * 30
   */
  alreadyUsedTotalFee?: number;
  /**
   * @remarks
   * amount refunded to the user after change (only available when has change order)
   * 
   * @example
   * 30
   */
  modifyRefundToBuyerMoney?: number;
  /**
   * @remarks
   * non-refundable change service fee
   * 
   * @example
   * 30
   */
  nonRefundableChangeServiceFee?: number;
  /**
   * @remarks
   * non-refundable upgrade fee
   * 
   * @example
   * 30
   */
  nonRefundableChangeUpgradeFee?: number;
  /**
   * @remarks
   * non-refundable tax amount, i.e., tax refund fee
   * 
   * @example
   * 30
   */
  nonRefundableTaxFee?: number;
  /**
   * @remarks
   * non-refundable ticket amount, i.e., ticket refund fee
   * 
   * @example
   * 30
   */
  nonRefundableTicketFee?: number;
  /**
   * @remarks
   * amount refundable to the user from the original ticket (fare + tax - non_refundable_ticket_fee - non_refundable_tax_fee - already_used_total_fee - discount)
   * 
   * @example
   * 30
   */
  refundToBuyerMoney?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyUsedTotalFee: 'already_used_total_fee',
      modifyRefundToBuyerMoney: 'modify_refund_to_buyer_money',
      nonRefundableChangeServiceFee: 'non_refundable_change_service_fee',
      nonRefundableChangeUpgradeFee: 'non_refundable_change_upgrade_fee',
      nonRefundableTaxFee: 'non_refundable_tax_fee',
      nonRefundableTicketFee: 'non_refundable_ticket_fee',
      refundToBuyerMoney: 'refund_to_buyer_money',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyUsedTotalFee: 'number',
      modifyRefundToBuyerMoney: 'number',
      nonRefundableChangeServiceFee: 'number',
      nonRefundableChangeUpgradeFee: 'number',
      nonRefundableTaxFee: 'number',
      nonRefundableTicketFee: 'number',
      refundToBuyerMoney: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

