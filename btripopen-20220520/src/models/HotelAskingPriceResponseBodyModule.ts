// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelAskingPriceResponseBodyModuleHotelAskingPriceDetails } from "./HotelAskingPriceResponseBodyModuleHotelAskingPriceDetails";


export class HotelAskingPriceResponseBodyModule extends $dara.Model {
  hotelAskingPriceDetails?: HotelAskingPriceResponseBodyModuleHotelAskingPriceDetails[];
  static names(): { [key: string]: string } {
    return {
      hotelAskingPriceDetails: 'hotel_asking_price_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAskingPriceDetails: { 'type': 'array', 'itemType': HotelAskingPriceResponseBodyModuleHotelAskingPriceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.hotelAskingPriceDetails)) {
      $dara.Model.validateArray(this.hotelAskingPriceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

