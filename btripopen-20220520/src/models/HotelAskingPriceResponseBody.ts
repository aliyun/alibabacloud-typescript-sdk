// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelAskingPriceResponseBodyModuleHotelAskingPriceDetails extends $dara.Model {
  cityCode?: string;
  hotelAddress?: string;
  hotelCode?: string;
  hotelName?: string;
  isProtocol?: boolean;
  minPrice?: number;
  originalMinPrice?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      hotelAddress: 'hotel_address',
      hotelCode: 'hotel_code',
      hotelName: 'hotel_name',
      isProtocol: 'is_protocol',
      minPrice: 'min_price',
      originalMinPrice: 'original_min_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      hotelAddress: 'string',
      hotelCode: 'string',
      hotelName: 'string',
      isProtocol: 'boolean',
      minPrice: 'number',
      originalMinPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class HotelAskingPriceResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: HotelAskingPriceResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelAskingPriceResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

