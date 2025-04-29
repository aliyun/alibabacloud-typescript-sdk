// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTO } from "./HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDto";


export class HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule extends $dara.Model {
  btripHotelCancelPolicyDTO?: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTO;
  cancelPolicyTitle?: string;
  /**
   * @example
   * 2023-02-27
   */
  checkIn?: string;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyDTO: 'btrip_hotel_cancel_policy_d_t_o',
      cancelPolicyTitle: 'cancel_policy_title',
      checkIn: 'check_in',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyDTO: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTO,
      cancelPolicyTitle: 'string',
      checkIn: 'string',
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

