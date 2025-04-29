// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDTOList } from "./HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDtolist";


export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy extends $dara.Model {
  btripHotelCancelPolicyInfoDTOList?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDTOList[];
  /**
   * @example
   * 1
   */
  cancelPolicyType?: number;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyInfoDTOList: 'btrip_hotel_cancel_policy_info_d_t_o_list',
      cancelPolicyType: 'cancel_policy_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyInfoDTOList: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDTOList },
      cancelPolicyType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.btripHotelCancelPolicyInfoDTOList)) {
      $dara.Model.validateArray(this.btripHotelCancelPolicyInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

