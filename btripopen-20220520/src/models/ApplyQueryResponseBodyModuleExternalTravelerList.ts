// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys } from "./ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys";
import { ApplyQueryResponseBodyModuleExternalTravelerListHotelIntlCitys } from "./ApplyQueryResponseBodyModuleExternalTravelerListHotelIntlCitys";


export class ApplyQueryResponseBodyModuleExternalTravelerList extends $dara.Model {
  attribute?: string;
  /**
   * @example
   * 1
   */
  businessDiscount?: number;
  costCenterName?: string;
  departId?: string;
  /**
   * @example
   * 1
   */
  economyDiscount?: number;
  externalUserId?: string;
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
  hotelCitys?: ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys[];
  hotelIntlCitys?: ApplyQueryResponseBodyModuleExternalTravelerListHotelIntlCitys[];
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
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      businessDiscount: 'business_discount',
      costCenterName: 'cost_center_name',
      departId: 'depart_id',
      economyDiscount: 'economy_discount',
      externalUserId: 'external_user_id',
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
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      businessDiscount: 'number',
      costCenterName: 'string',
      departId: 'string',
      economyDiscount: 'number',
      externalUserId: 'string',
      firstDiscount: 'number',
      flightCabins: 'string',
      flightIntlRuleCode: 'number',
      flightRuleCode: 'number',
      hotelCitys: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys },
      hotelIntlCitys: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleExternalTravelerListHotelIntlCitys },
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
      userName: 'string',
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

