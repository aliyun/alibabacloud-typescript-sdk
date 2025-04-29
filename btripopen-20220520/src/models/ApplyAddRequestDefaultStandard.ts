// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyAddRequestDefaultStandardHotelCitys } from "./ApplyAddRequestDefaultStandardHotelCitys";
import { ApplyAddRequestDefaultStandardHotelIntlCitys } from "./ApplyAddRequestDefaultStandardHotelIntlCitys";


export class ApplyAddRequestDefaultStandard extends $dara.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  flightIntlRuleCode?: number;
  flightRuleCode?: number;
  hotelCitys?: ApplyAddRequestDefaultStandardHotelCitys[];
  hotelIntlCitys?: ApplyAddRequestDefaultStandardHotelIntlCitys[];
  hotelIntlRuleCode?: number;
  hotelRuleCode?: number;
  /**
   * @example
   * F
   */
  internationalFlightCabins?: string;
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
      internationalFlightCabins: 'international_flight_cabins',
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
      hotelCitys: { 'type': 'array', 'itemType': ApplyAddRequestDefaultStandardHotelCitys },
      hotelIntlCitys: { 'type': 'array', 'itemType': ApplyAddRequestDefaultStandardHotelIntlCitys },
      hotelIntlRuleCode: 'number',
      hotelRuleCode: 'number',
      internationalFlightCabins: 'string',
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

