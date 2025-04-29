// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderCreateRequestBookTrainInfos } from "./TrainOrderCreateRequestBookTrainInfos";
import { TrainOrderCreateRequestBusinessInfo } from "./TrainOrderCreateRequestBusinessInfo";
import { TrainOrderCreateRequestContactInfo } from "./TrainOrderCreateRequestContactInfo";
import { TrainOrderCreateRequestPassengerOpenInfoS } from "./TrainOrderCreateRequestPassengerOpenInfoS";


export class TrainOrderCreateRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  acceptNoSeat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bookTrainInfos?: TrainOrderCreateRequestBookTrainInfos[];
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
  businessInfo?: TrainOrderCreateRequestBusinessInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfo?: TrainOrderCreateRequestContactInfo;
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
  passengerOpenInfoS?: TrainOrderCreateRequestPassengerOpenInfoS[];
  static names(): { [key: string]: string } {
    return {
      acceptNoSeat: 'accept_no_seat',
      bookTrainInfos: 'book_train_infos',
      btripUserId: 'btrip_user_id',
      btripUserName: 'btrip_user_name',
      businessInfo: 'business_info',
      contactInfo: 'contact_info',
      forceMatch: 'force_match',
      isPayNow: 'is_pay_now',
      outOrderId: 'out_order_id',
      passengerOpenInfoS: 'passenger_open_info_s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptNoSeat: 'string',
      bookTrainInfos: { 'type': 'array', 'itemType': TrainOrderCreateRequestBookTrainInfos },
      btripUserId: 'string',
      btripUserName: 'string',
      businessInfo: TrainOrderCreateRequestBusinessInfo,
      contactInfo: TrainOrderCreateRequestContactInfo,
      forceMatch: 'string',
      isPayNow: 'boolean',
      outOrderId: 'string',
      passengerOpenInfoS: { 'type': 'array', 'itemType': TrainOrderCreateRequestPassengerOpenInfoS },
    };
  }

  validate() {
    if(Array.isArray(this.bookTrainInfos)) {
      $dara.Model.validateArray(this.bookTrainInfos);
    }
    if(this.businessInfo && typeof (this.businessInfo as any).validate === 'function') {
      (this.businessInfo as any).validate();
    }
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(Array.isArray(this.passengerOpenInfoS)) {
      $dara.Model.validateArray(this.passengerOpenInfoS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

