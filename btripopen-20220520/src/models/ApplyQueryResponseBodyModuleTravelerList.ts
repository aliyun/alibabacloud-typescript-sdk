// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyQueryResponseBodyModuleTravelerListCarCitySet } from "./ApplyQueryResponseBodyModuleTravelerListCarCitySet";
import { ApplyQueryResponseBodyModuleTravelerListHotelCitys } from "./ApplyQueryResponseBodyModuleTravelerListHotelCitys";
import { ApplyQueryResponseBodyModuleTravelerListHotelIntlCitys } from "./ApplyQueryResponseBodyModuleTravelerListHotelIntlCitys";


export class ApplyQueryResponseBodyModuleTravelerList extends $dara.Model {
  attribute?: string;
  /**
   * @example
   * 1
   */
  businessDiscount?: number;
  carCitySet?: ApplyQueryResponseBodyModuleTravelerListCarCitySet[];
  costCenterName?: string;
  departId?: string;
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
  hotelCitys?: ApplyQueryResponseBodyModuleTravelerListHotelCitys[];
  hotelIntlCitys?: ApplyQueryResponseBodyModuleTravelerListHotelIntlCitys[];
  hotelIntlRuleCode?: number;
  hotelRuleCode?: number;
  invoiceName?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 1
   */
  premiumEconomyDiscount?: number;
  projectCode?: string;
  projectTitle?: string;
  /**
   * @example
   * 1
   */
  reserveType?: number;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  thirdpartDepartId?: string;
  trainRuleCode?: number;
  /**
   * @example
   * 1
   */
  trainSeats?: string;
  /**
   * @example
   * 3423
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      businessDiscount: 'business_discount',
      carCitySet: 'car_city_set',
      costCenterName: 'cost_center_name',
      departId: 'depart_id',
      economyDiscount: 'economy_discount',
      firstDiscount: 'first_discount',
      flightCabins: 'flight_cabins',
      flightIntlRuleCode: 'flight_intl_rule_code',
      flightRuleCode: 'flight_rule_code',
      hotelCitys: 'hotel_citys',
      hotelIntlCitys: 'hotel_intl_citys',
      hotelIntlRuleCode: 'hotel_intl_rule_code',
      hotelRuleCode: 'hotel_rule_code',
      invoiceName: 'invoice_name',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      premiumEconomyDiscount: 'premium_economy_discount',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      reserveType: 'reserve_type',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      trainRuleCode: 'train_rule_code',
      trainSeats: 'train_seats',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      businessDiscount: 'number',
      carCitySet: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleTravelerListCarCitySet },
      costCenterName: 'string',
      departId: 'string',
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      flightIntlRuleCode: 'number',
      flightRuleCode: 'number',
      hotelCitys: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleTravelerListHotelCitys },
      hotelIntlCitys: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleTravelerListHotelIntlCitys },
      hotelIntlRuleCode: 'number',
      hotelRuleCode: 'number',
      invoiceName: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      premiumEconomyDiscount: 'number',
      projectCode: 'string',
      projectTitle: 'string',
      reserveType: 'number',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartDepartId: 'string',
      trainRuleCode: 'number',
      trainSeats: 'string',
      userId: 'string',
      userName: 'string',
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

