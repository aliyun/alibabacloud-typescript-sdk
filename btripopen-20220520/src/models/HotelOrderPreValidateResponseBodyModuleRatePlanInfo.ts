// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTO } from "./HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDto";


export class HotelOrderPreValidateResponseBodyModuleRatePlanInfo extends $dara.Model {
  bedDesc?: string;
  btripHotelCancelPolicyDTO?: HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTO;
  /**
   * @example
   * 12:00
   */
  earliestCheckInTime?: string;
  /**
   * @example
   * 17:00
   */
  latestCheckOutTime?: string;
  maxBookingNum?: number;
  /**
   * @example
   * 1
   */
  maxOccupancyNum?: number;
  /**
   * @example
   * false
   */
  needCertificate?: boolean;
  /**
   * @example
   * false
   */
  needEmail?: boolean;
  /**
   * @example
   * false
   */
  needEnglishName?: boolean;
  /**
   * @example
   * 100
   */
  totalOrderPrice?: number;
  /**
   * @example
   * 100
   */
  totalRoomPrice?: number;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      btripHotelCancelPolicyDTO: 'btrip_hotel_cancel_policy_d_t_o',
      earliestCheckInTime: 'earliest_check_in_time',
      latestCheckOutTime: 'latest_check_out_time',
      maxBookingNum: 'max_booking_num',
      maxOccupancyNum: 'max_occupancy_num',
      needCertificate: 'need_certificate',
      needEmail: 'need_email',
      needEnglishName: 'need_english_name',
      totalOrderPrice: 'total_order_price',
      totalRoomPrice: 'total_room_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      btripHotelCancelPolicyDTO: HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTO,
      earliestCheckInTime: 'string',
      latestCheckOutTime: 'string',
      maxBookingNum: 'number',
      maxOccupancyNum: 'number',
      needCertificate: 'boolean',
      needEmail: 'boolean',
      needEnglishName: 'boolean',
      totalOrderPrice: 'number',
      totalRoomPrice: 'number',
    };
  }

  validate() {
    if(this.btripHotelCancelPolicyDTO && typeof (this.btripHotelCancelPolicyDTO as any).validate === 'function') {
      (this.btripHotelCancelPolicyDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

