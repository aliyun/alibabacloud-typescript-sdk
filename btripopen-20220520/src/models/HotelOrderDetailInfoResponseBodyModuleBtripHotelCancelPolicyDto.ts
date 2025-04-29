// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList } from "./HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDtobtripHotelCancelPolicyInfoDtolist";


export class HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO extends $dara.Model {
  btripHotelCancelPolicyInfoDTOList?: HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList[];
  cancelPolicyType?: number;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyInfoDTOList: 'btrip_hotel_cancel_policy_info_d_t_o_list',
      cancelPolicyType: 'cancel_policy_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyInfoDTOList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList },
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

