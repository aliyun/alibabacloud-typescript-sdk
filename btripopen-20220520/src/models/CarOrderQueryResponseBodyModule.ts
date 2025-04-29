// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CarOrderQueryResponseBodyModuleCarInfo } from "./CarOrderQueryResponseBodyModuleCarInfo";
import { CarOrderQueryResponseBodyModuleInvoiceInfo } from "./CarOrderQueryResponseBodyModuleInvoiceInfo";
import { CarOrderQueryResponseBodyModuleOrderBaseInfo } from "./CarOrderQueryResponseBodyModuleOrderBaseInfo";
import { CarOrderQueryResponseBodyModulePassengerList } from "./CarOrderQueryResponseBodyModulePassengerList";
import { CarOrderQueryResponseBodyModulePriceInfoList } from "./CarOrderQueryResponseBodyModulePriceInfoList";


export class CarOrderQueryResponseBodyModule extends $dara.Model {
  carInfo?: CarOrderQueryResponseBodyModuleCarInfo;
  invoiceInfo?: CarOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: CarOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerList?: CarOrderQueryResponseBodyModulePassengerList[];
  priceInfoList?: CarOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      carInfo: 'car_info',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerList: 'passenger_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carInfo: CarOrderQueryResponseBodyModuleCarInfo,
      invoiceInfo: CarOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: CarOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerList: { 'type': 'array', 'itemType': CarOrderQueryResponseBodyModulePassengerList },
      priceInfoList: { 'type': 'array', 'itemType': CarOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  validate() {
    if(this.carInfo && typeof (this.carInfo as any).validate === 'function') {
      (this.carInfo as any).validate();
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

