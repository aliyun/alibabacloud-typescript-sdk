// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList } from "./HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDtobtripHotelCancelPolicyInfoDtolist";


export class HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTO extends $dara.Model {
  btripHotelCancelPolicyInfoDTOList?: HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList[];
  cancelPolicyType?: number;
  content?: string;
  shortDesc?: string;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyInfoDTOList: 'btrip_hotel_cancel_policy_info_d_t_o_list',
      cancelPolicyType: 'cancel_policy_type',
      content: 'content',
      shortDesc: 'short_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyInfoDTOList: { 'type': 'array', 'itemType': HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList },
      cancelPolicyType: 'number',
      content: 'string',
      shortDesc: 'string',
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

