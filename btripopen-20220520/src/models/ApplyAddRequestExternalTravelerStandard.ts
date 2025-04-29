// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyAddRequestExternalTravelerStandardHotelCitys } from "./ApplyAddRequestExternalTravelerStandardHotelCitys";
import { ApplyAddRequestExternalTravelerStandardHotelIntlCitys } from "./ApplyAddRequestExternalTravelerStandardHotelIntlCitys";


export class ApplyAddRequestExternalTravelerStandard extends $dara.Model {
  /**
   * @example
   * 1
   */
  businessDiscount?: number;
  /**
   * @example
   * 1
   */
  economyDiscount?: number;
  /**
   * @example
   * 1
   */
  firstDiscount?: number;
  /**
   * @example
   * F
   */
  flightCabins?: string;
  flightIntlRuleCode?: number;
  flightRuleCode?: number;
  hotelCitys?: ApplyAddRequestExternalTravelerStandardHotelCitys[];
  hotelIntlCitys?: ApplyAddRequestExternalTravelerStandardHotelIntlCitys[];
  hotelIntlRuleCode?: number;
  hotelRuleCode?: number;
  /**
   * @example
   * F
   */
  internationalFlightCabins?: string;
  /**
   * @example
   * 1
   */
  premiumEconomyDiscount?: number;
  /**
   * @example
   * 0
   */
  reserveType?: number;
  trainRuleCode?: number;
  /**
   * @example
   * 0
   */
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
      hotelCitys: { 'type': 'array', 'itemType': ApplyAddRequestExternalTravelerStandardHotelCitys },
      hotelIntlCitys: { 'type': 'array', 'itemType': ApplyAddRequestExternalTravelerStandardHotelIntlCitys },
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

