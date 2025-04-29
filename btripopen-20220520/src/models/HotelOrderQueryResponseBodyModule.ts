// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderQueryResponseBodyModuleHotelInfo } from "./HotelOrderQueryResponseBodyModuleHotelInfo";
import { HotelOrderQueryResponseBodyModuleInvoiceInfo } from "./HotelOrderQueryResponseBodyModuleInvoiceInfo";
import { HotelOrderQueryResponseBodyModuleOrderBaseInfo } from "./HotelOrderQueryResponseBodyModuleOrderBaseInfo";
import { HotelOrderQueryResponseBodyModulePassengerList } from "./HotelOrderQueryResponseBodyModulePassengerList";
import { HotelOrderQueryResponseBodyModulePriceInfoList } from "./HotelOrderQueryResponseBodyModulePriceInfoList";


export class HotelOrderQueryResponseBodyModule extends $dara.Model {
  hotelInfo?: HotelOrderQueryResponseBodyModuleHotelInfo;
  invoiceInfo?: HotelOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: HotelOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerList?: HotelOrderQueryResponseBodyModulePassengerList[];
  priceInfoList?: HotelOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      hotelInfo: 'hotel_info',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerList: 'passenger_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelInfo: HotelOrderQueryResponseBodyModuleHotelInfo,
      invoiceInfo: HotelOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: HotelOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerList: { 'type': 'array', 'itemType': HotelOrderQueryResponseBodyModulePassengerList },
      priceInfoList: { 'type': 'array', 'itemType': HotelOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  validate() {
    if(this.hotelInfo && typeof (this.hotelInfo as any).validate === 'function') {
      (this.hotelInfo as any).validate();
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

