// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundApplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * order number
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * journeys for which a refund is being requested
   * 
   * This parameter is required.
   */
  refundJourneysShrink?: string;
  /**
   * @remarks
   * passengers that applying for a refund
   * 
   * This parameter is required.
   */
  refundPassengerListShrink?: string;
  /**
   * @remarks
   * refund type and attachments
   * 
   * This parameter is required.
   */
  refundTypeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundJourneysShrink: 'refund_journeys',
      refundPassengerListShrink: 'refund_passenger_list',
      refundTypeShrink: 'refund_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundJourneysShrink: 'string',
      refundPassengerListShrink: 'string',
      refundTypeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

