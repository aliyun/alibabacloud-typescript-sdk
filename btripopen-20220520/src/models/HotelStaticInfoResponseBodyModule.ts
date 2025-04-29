// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelStaticInfoResponseBodyModuleHotelStaticInfos } from "./HotelStaticInfoResponseBodyModuleHotelStaticInfos";


export class HotelStaticInfoResponseBodyModule extends $dara.Model {
  hotelStaticInfos?: HotelStaticInfoResponseBodyModuleHotelStaticInfos[];
  static names(): { [key: string]: string } {
    return {
      hotelStaticInfos: 'hotel_static_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelStaticInfos: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfos },
    };
  }

  validate() {
    if(Array.isArray(this.hotelStaticInfos)) {
      $dara.Model.validateArray(this.hotelStaticInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

