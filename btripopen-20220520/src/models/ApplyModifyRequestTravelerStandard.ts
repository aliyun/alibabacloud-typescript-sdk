// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyModifyRequestTravelerStandardCarCitySet } from "./ApplyModifyRequestTravelerStandardCarCitySet";
import { ApplyModifyRequestTravelerStandardHotelCitys } from "./ApplyModifyRequestTravelerStandardHotelCitys";
import { ApplyModifyRequestTravelerStandardHotelIntlCitys } from "./ApplyModifyRequestTravelerStandardHotelIntlCitys";


export class ApplyModifyRequestTravelerStandard extends $dara.Model {
  /**
   * @example
   * 1
   */
  businessDiscount?: number;
  carCitySet?: ApplyModifyRequestTravelerStandardCarCitySet[];
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
   * Y
   */
  flightCabins?: string;
  flightIntlRuleCode?: number;
  flightRuleCode?: number;
  hotelCitys?: ApplyModifyRequestTravelerStandardHotelCitys[];
  hotelIntlCitys?: ApplyModifyRequestTravelerStandardHotelIntlCitys[];
  hotelIntlRuleCode?: number;
  hotelRuleCode?: number;
  /**
   * @remarks
   * 超级经济舱折扣。1到10的整数
   * 
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
   * 1
   */
  trainSeats?: string;
  /**
   * @example
   * thirdpart12138
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      carCitySet: 'car_city_set',
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
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      carCitySet: { 'type': 'array', 'itemType': ApplyModifyRequestTravelerStandardCarCitySet },
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      flightIntlRuleCode: 'number',
      flightRuleCode: 'number',
      hotelCitys: { 'type': 'array', 'itemType': ApplyModifyRequestTravelerStandardHotelCitys },
      hotelIntlCitys: { 'type': 'array', 'itemType': ApplyModifyRequestTravelerStandardHotelIntlCitys },
      hotelIntlRuleCode: 'number',
      hotelRuleCode: 'number',
      premiumEconomyDiscount: 'number',
      reserveType: 'number',
      trainRuleCode: 'number',
      trainSeats: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.carCitySet)) {
      $dara.Model.validateArray(this.carCitySet);
    }
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

