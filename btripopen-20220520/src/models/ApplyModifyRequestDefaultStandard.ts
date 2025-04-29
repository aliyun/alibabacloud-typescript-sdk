// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyModifyRequestDefaultStandardHotelCitys } from "./ApplyModifyRequestDefaultStandardHotelCitys";
import { ApplyModifyRequestDefaultStandardHotelIntlCitys } from "./ApplyModifyRequestDefaultStandardHotelIntlCitys";


export class ApplyModifyRequestDefaultStandard extends $dara.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  flightIntlRuleCode?: number;
  flightRuleCode?: number;
  hotelCitys?: ApplyModifyRequestDefaultStandardHotelCitys[];
  hotelIntlCitys?: ApplyModifyRequestDefaultStandardHotelIntlCitys[];
  hotelIntlRuleCode?: number;
  hotelRuleCode?: number;
  premiumEconomyDiscount?: number;
  reserveType?: number;
  trainRuleCode?: number;
  trainSeats?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      flightIntlRuleCode: 'flight_intl_rule_code',
      flightRuleCode: 'flight_rule_code',
      hotelCitys: 'hotel_citys',
      hotelIntlCitys: 'hotel_intl_citys',
      hotelIntlRuleCode: 'hotel_intl_rule_code',
      hotelRuleCode: 'hotel_rule_code',
      premiumEconomyDiscount: 'premium_economy_discount',
      reserveType: 'reserve_type',
      trainRuleCode: 'train_rule_code',
      trainSeats: 'train_seats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      flightIntlRuleCode: 'number',
      flightRuleCode: 'number',
      hotelCitys: { 'type': 'array', 'itemType': ApplyModifyRequestDefaultStandardHotelCitys },
      hotelIntlCitys: { 'type': 'array', 'itemType': ApplyModifyRequestDefaultStandardHotelIntlCitys },
      hotelIntlRuleCode: 'number',
      hotelRuleCode: 'number',
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainRuleCode: 'number',
      trainSeats: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotelCitys)) {
      $dara.Model.validateArray(this.hotelCitys);
    }
    if(Array.isArray(this.hotelIntlCitys)) {
      $dara.Model.validateArray(this.hotelIntlCitys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

