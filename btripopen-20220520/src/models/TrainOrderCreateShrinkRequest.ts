// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCreateShrinkRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  acceptNoSeat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bookTrainInfosShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12344321
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  btripUserName?: string;
  businessInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfoShrink?: string;
  /**
   * @example
   * 0
   */
  forceMatch?: string;
  /**
   * @example
   * false
   */
  isPayNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerOpenInfoSShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptNoSeat: 'accept_no_seat',
      bookTrainInfosShrink: 'book_train_infos',
      btripUserId: 'btrip_user_id',
      btripUserName: 'btrip_user_name',
      businessInfoShrink: 'business_info',
      contactInfoShrink: 'contact_info',
      forceMatch: 'force_match',
      isPayNow: 'is_pay_now',
      outOrderId: 'out_order_id',
      passengerOpenInfoSShrink: 'passenger_open_info_s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptNoSeat: 'string',
      bookTrainInfosShrink: 'string',
      btripUserId: 'string',
      btripUserName: 'string',
      businessInfoShrink: 'string',
      contactInfoShrink: 'string',
      forceMatch: 'string',
      isPayNow: 'boolean',
      outOrderId: 'string',
      passengerOpenInfoSShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

