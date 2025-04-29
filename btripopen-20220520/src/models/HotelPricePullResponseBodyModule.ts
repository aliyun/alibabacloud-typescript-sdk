// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelPricePullResponseBodyModuleHotelPriceInfos } from "./HotelPricePullResponseBodyModuleHotelPriceInfos";


export class HotelPricePullResponseBodyModule extends $dara.Model {
  hotelPriceInfos?: HotelPricePullResponseBodyModuleHotelPriceInfos[];
  static names(): { [key: string]: string } {
    return {
      hotelPriceInfos: 'hotel_price_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelPriceInfos: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfos },
    };
  }

  validate() {
    if(Array.isArray(this.hotelPriceInfos)) {
      $dara.Model.validateArray(this.hotelPriceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

