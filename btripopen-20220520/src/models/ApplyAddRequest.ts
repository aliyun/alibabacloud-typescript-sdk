// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAddRequestCarRule extends $dara.Model {
  scenarioTemplateId?: string;
  scenarioTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioTemplateId: 'scenario_template_id',
      scenarioTemplateName: 'scenario_template_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioTemplateId: 'string',
      scenarioTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestDefaultStandardHotelCitys extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestDefaultStandardHotelIntlCitys extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ApplyAddRequestExternalTravelerList extends $dara.Model {
  attribute?: string;
  costCenterId?: number;
  externalUserId?: string;
  invoiceId?: number;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  thirdpartDepartId?: string;
  userName?: string;
  userNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      costCenterId: 'cost_center_id',
      externalUserId: 'external_user_id',
      invoiceId: 'invoice_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      userName: 'user_name',
      userNameEn: 'user_name_en',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      costCenterId: 'number',
      externalUserId: 'string',
      invoiceId: 'number',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartDepartId: 'string',
      userName: 'string',
      userNameEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestExternalTravelerStandardHotelCitys extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestExternalTravelerStandardHotelIntlCitys extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestExternalTravelerStandard extends $dara.Model {
  businessDiscount?: number;
  economyDiscount?: number;
  firstDiscount?: number;
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

export class ApplyAddRequestHotelShare extends $dara.Model {
  param?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'param',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestItineraryListItineraryTravelStandard extends $dara.Model {
  hotelAvailableNightsPerDay?: number;
  static names(): { [key: string]: string } {
    return {
      hotelAvailableNightsPerDay: 'hotel_available_nights_per_day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAvailableNightsPerDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestItineraryList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrCity?: string;
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  arrDate?: string;
  attribute?: string;
  costCenterId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  depCity?: string;
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depDate?: string;
  invoiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyAddRequestItineraryListItineraryTravelStandard;
  needHotel?: boolean;
  needTraffic?: boolean;
  projectCode?: string;
  projectTitle?: string;
  provinceTravelCityAdcodes?: string[];
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  trafficType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      attribute: 'attribute',
      costCenterId: 'cost_center_id',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      itineraryTravelStandard: 'itinerary_travel_standard',
      needHotel: 'need_hotel',
      needTraffic: 'need_traffic',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      provinceTravelCityAdcodes: 'province_travel_city_adcodes',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      trafficType: 'traffic_type',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      attribute: 'string',
      costCenterId: 'number',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyAddRequestItineraryListItineraryTravelStandard,
      needHotel: 'boolean',
      needTraffic: 'boolean',
      projectCode: 'string',
      projectTitle: 'string',
      provinceTravelCityAdcodes: { 'type': 'array', 'itemType': 'string' },
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  validate() {
    if(this.itineraryTravelStandard && typeof (this.itineraryTravelStandard as any).validate === 'function') {
      (this.itineraryTravelStandard as any).validate();
    }
    if(Array.isArray(this.provinceTravelCityAdcodes)) {
      $dara.Model.validateArray(this.provinceTravelCityAdcodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestItinerarySetListItineraryTravelStandard extends $dara.Model {
  hotelAvailableNightsPerDay?: number;
  static names(): { [key: string]: string } {
    return {
      hotelAvailableNightsPerDay: 'hotel_available_nights_per_day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAvailableNightsPerDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestItinerarySetList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-01-01 00:00:00
   */
  arrDate?: string;
  attribute?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cityCodeSet?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  citySet?: string;
  costCenterId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-01-01 00:00:00
   */
  depDate?: string;
  invoiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyAddRequestItinerarySetListItineraryTravelStandard;
  projectCode?: string;
  projectTitle?: string;
  provinceTravelCityAdcodes?: string[];
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrDate: 'arr_date',
      attribute: 'attribute',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterId: 'cost_center_id',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      itineraryTravelStandard: 'itinerary_travel_standard',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      provinceTravelCityAdcodes: 'province_travel_city_adcodes',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      attribute: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterId: 'number',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyAddRequestItinerarySetListItineraryTravelStandard,
      projectCode: 'string',
      projectTitle: 'string',
      provinceTravelCityAdcodes: { 'type': 'array', 'itemType': 'string' },
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
    };
  }

  validate() {
    if(this.itineraryTravelStandard && typeof (this.itineraryTravelStandard as any).validate === 'function') {
      (this.itineraryTravelStandard as any).validate();
    }
    if(Array.isArray(this.provinceTravelCityAdcodes)) {
      $dara.Model.validateArray(this.provinceTravelCityAdcodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerList extends $dara.Model {
  attribute?: string;
  costCenterId?: number;
  invoiceId?: number;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  thirdpartDepartId?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      costCenterId: 'cost_center_id',
      invoiceId: 'invoice_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      costCenterId: 'number',
      invoiceId: 'number',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartDepartId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarCitySet extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardBookAllowInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bookAllow?: boolean;
  static names(): { [key: string]: string } {
    return {
      bookAllow: 'book_allow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookAllow: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardCarHelper extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  carHelperType?: string;
  static names(): { [key: string]: string } {
    return {
      carHelperType: 'car_helper_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carHelperType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardCarTimeControlTimeLimit extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'end_time',
      startTime: 'start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardCarTimeControl extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  timeLimit?: ApplyAddRequestTravelerStandardCarStandardCarTimeControlTimeLimit[];
  /**
   * @remarks
   * This parameter is required.
   */
  timeSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      timeLimit: 'time_limit',
      timeSwitch: 'time_switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeLimit: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardCarStandardCarTimeControlTimeLimit },
      timeSwitch: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.timeLimit)) {
      $dara.Model.validateArray(this.timeLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardCityControlInfoCityInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  adcode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      cityCode: 'city_code',
      cityName: 'city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      cityCode: 'string',
      cityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardCityControlInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cityControlType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  cityInfos?: ApplyAddRequestTravelerStandardCarStandardCityControlInfoCityInfos[];
  static names(): { [key: string]: string } {
    return {
      cityControlType: 'city_control_type',
      cityInfos: 'city_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityControlType: 'number',
      cityInfos: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardCarStandardCityControlInfoCityInfos },
    };
  }

  validate() {
    if(Array.isArray(this.cityInfos)) {
      $dara.Model.validateArray(this.cityInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardCrossCityInfoCrossCityList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fromAdcode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fromCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fromCityName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  toAdcode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  toCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  toCityName?: string;
  static names(): { [key: string]: string } {
    return {
      fromAdcode: 'from_adcode',
      fromCityCode: 'from_city_code',
      fromCityName: 'from_city_name',
      toAdcode: 'to_adcode',
      toCityCode: 'to_city_code',
      toCityName: 'to_city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromAdcode: 'string',
      fromCityCode: 'string',
      fromCityName: 'string',
      toAdcode: 'string',
      toCityCode: 'string',
      toCityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardCrossCityInfo extends $dara.Model {
  crossCityList?: ApplyAddRequestTravelerStandardCarStandardCrossCityInfoCrossCityList[];
  /**
   * @remarks
   * This parameter is required.
   */
  crossCityType?: number;
  static names(): { [key: string]: string } {
    return {
      crossCityList: 'cross_city_list',
      crossCityType: 'cross_city_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossCityList: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardCarStandardCrossCityInfoCrossCityList },
      crossCityType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crossCityList)) {
      $dara.Model.validateArray(this.crossCityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfoElectronicFenceLocationsFrom extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  address?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  latitude?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  longitude?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  radius?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      latitude: 'latitude',
      longitude: 'longitude',
      radius: 'radius',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      latitude: 'string',
      longitude: 'string',
      radius: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfoElectronicFenceLocationsTo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  address?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  latitude?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  longitude?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  radius?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      latitude: 'latitude',
      longitude: 'longitude',
      radius: 'radius',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      latitude: 'string',
      longitude: 'string',
      radius: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  electronicFenceLocationsFrom?: ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfoElectronicFenceLocationsFrom[];
  /**
   * @remarks
   * This parameter is required.
   */
  electronicFenceLocationsTo?: ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfoElectronicFenceLocationsTo[];
  /**
   * @remarks
   * This parameter is required.
   */
  electronicFenceType?: number;
  static names(): { [key: string]: string } {
    return {
      electronicFenceLocationsFrom: 'electronic_fence_locations_from',
      electronicFenceLocationsTo: 'electronic_fence_locations_to',
      electronicFenceType: 'electronic_fence_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      electronicFenceLocationsFrom: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfoElectronicFenceLocationsFrom },
      electronicFenceLocationsTo: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfoElectronicFenceLocationsTo },
      electronicFenceType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.electronicFenceLocationsFrom)) {
      $dara.Model.validateArray(this.electronicFenceLocationsFrom);
    }
    if(Array.isArray(this.electronicFenceLocationsTo)) {
      $dara.Model.validateArray(this.electronicFenceLocationsTo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandardModifyDestinationInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  modifyDestination?: boolean;
  static names(): { [key: string]: string } {
    return {
      modifyDestination: 'modify_destination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyDestination: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardCarStandard extends $dara.Model {
  bookAllowInfo?: ApplyAddRequestTravelerStandardCarStandardBookAllowInfo;
  carHelper?: ApplyAddRequestTravelerStandardCarStandardCarHelper;
  carTimeControl?: ApplyAddRequestTravelerStandardCarStandardCarTimeControl;
  cityControlInfo?: ApplyAddRequestTravelerStandardCarStandardCityControlInfo;
  crossCityInfo?: ApplyAddRequestTravelerStandardCarStandardCrossCityInfo;
  electronicFenceInfo?: ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfo;
  levelCodes?: string;
  modifyDestinationInfo?: ApplyAddRequestTravelerStandardCarStandardModifyDestinationInfo;
  timesTotal?: number;
  timesType?: number;
  static names(): { [key: string]: string } {
    return {
      bookAllowInfo: 'book_allow_info',
      carHelper: 'car_helper',
      carTimeControl: 'car_time_control',
      cityControlInfo: 'city_control_info',
      crossCityInfo: 'cross_city_info',
      electronicFenceInfo: 'electronic_fence_info',
      levelCodes: 'level_codes',
      modifyDestinationInfo: 'modify_destination_info',
      timesTotal: 'times_total',
      timesType: 'times_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookAllowInfo: ApplyAddRequestTravelerStandardCarStandardBookAllowInfo,
      carHelper: ApplyAddRequestTravelerStandardCarStandardCarHelper,
      carTimeControl: ApplyAddRequestTravelerStandardCarStandardCarTimeControl,
      cityControlInfo: ApplyAddRequestTravelerStandardCarStandardCityControlInfo,
      crossCityInfo: ApplyAddRequestTravelerStandardCarStandardCrossCityInfo,
      electronicFenceInfo: ApplyAddRequestTravelerStandardCarStandardElectronicFenceInfo,
      levelCodes: 'string',
      modifyDestinationInfo: ApplyAddRequestTravelerStandardCarStandardModifyDestinationInfo,
      timesTotal: 'number',
      timesType: 'number',
    };
  }

  validate() {
    if(this.bookAllowInfo && typeof (this.bookAllowInfo as any).validate === 'function') {
      (this.bookAllowInfo as any).validate();
    }
    if(this.carHelper && typeof (this.carHelper as any).validate === 'function') {
      (this.carHelper as any).validate();
    }
    if(this.carTimeControl && typeof (this.carTimeControl as any).validate === 'function') {
      (this.carTimeControl as any).validate();
    }
    if(this.cityControlInfo && typeof (this.cityControlInfo as any).validate === 'function') {
      (this.cityControlInfo as any).validate();
    }
    if(this.crossCityInfo && typeof (this.crossCityInfo as any).validate === 'function') {
      (this.crossCityInfo as any).validate();
    }
    if(this.electronicFenceInfo && typeof (this.electronicFenceInfo as any).validate === 'function') {
      (this.electronicFenceInfo as any).validate();
    }
    if(this.modifyDestinationInfo && typeof (this.modifyDestinationInfo as any).validate === 'function') {
      (this.modifyDestinationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardHotelCitys extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandardHotelIntlCitys extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  fee?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      fee: 'fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      fee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAddRequestTravelerStandard extends $dara.Model {
  businessDiscount?: number;
  carCitySet?: ApplyAddRequestTravelerStandardCarCitySet[];
  carStandard?: ApplyAddRequestTravelerStandardCarStandard;
  economyDiscount?: number;
  firstDiscount?: number;
  flightCabins?: string;
  flightIntlRuleCode?: number;
  flightRuleCode?: number;
  hotelCitys?: ApplyAddRequestTravelerStandardHotelCitys[];
  hotelIntlCitys?: ApplyAddRequestTravelerStandardHotelIntlCitys[];
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
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      businessDiscount: 'business_discount',
      carCitySet: 'car_city_set',
      carStandard: 'car_standard',
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
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDiscount: 'number',
      carCitySet: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardCarCitySet },
      carStandard: ApplyAddRequestTravelerStandardCarStandard,
      economyDiscount: 'number',
      firstDiscount: 'number',
      flightCabins: 'string',
      flightIntlRuleCode: 'number',
      flightRuleCode: 'number',
      hotelCitys: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardHotelCitys },
      hotelIntlCitys: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandardHotelIntlCitys },
      hotelIntlRuleCode: 'number',
      hotelRuleCode: 'number',
      internationalFlightCabins: 'string',
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
    if(this.carStandard && typeof (this.carStandard as any).validate === 'function') {
      (this.carStandard as any).validate();
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

export class ApplyAddRequest extends $dara.Model {
  budget?: number;
  budgetMerge?: number;
  carRule?: ApplyAddRequestCarRule;
  corpName?: string;
  defaultStandard?: ApplyAddRequestDefaultStandard;
  departId?: string;
  departName?: string;
  extendField?: string;
  externalTravelerList?: ApplyAddRequestExternalTravelerList[];
  externalTravelerStandard?: ApplyAddRequestExternalTravelerStandard;
  flightBudget?: number;
  hotelBudget?: number;
  hotelShare?: ApplyAddRequestHotelShare;
  internationalFlightCabins?: string;
  intlFlightBudget?: number;
  intlHotelBudget?: number;
  itineraryList?: ApplyAddRequestItineraryList[];
  itineraryRule?: number;
  itinerarySetList?: ApplyAddRequestItinerarySetList[];
  limitTraveler?: number;
  mealBudget?: number;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  status?: number;
  subCorpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartDepartId?: string;
  togetherBookRule?: number;
  trainBudget?: number;
  travelerList?: ApplyAddRequestTravelerList[];
  travelerStandard?: ApplyAddRequestTravelerStandard[];
  /**
   * @remarks
   * This parameter is required.
   */
  tripCause?: string;
  tripDay?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tripTitle?: string;
  type?: number;
  unionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  userName?: string;
  vehicleBudget?: number;
  static names(): { [key: string]: string } {
    return {
      budget: 'budget',
      budgetMerge: 'budget_merge',
      carRule: 'car_rule',
      corpName: 'corp_name',
      defaultStandard: 'default_standard',
      departId: 'depart_id',
      departName: 'depart_name',
      extendField: 'extend_field',
      externalTravelerList: 'external_traveler_list',
      externalTravelerStandard: 'external_traveler_standard',
      flightBudget: 'flight_budget',
      hotelBudget: 'hotel_budget',
      hotelShare: 'hotel_share',
      internationalFlightCabins: 'international_flight_cabins',
      intlFlightBudget: 'intl_flight_budget',
      intlHotelBudget: 'intl_hotel_budget',
      itineraryList: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetList: 'itinerary_set_list',
      limitTraveler: 'limit_traveler',
      mealBudget: 'meal_budget',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      status: 'status',
      subCorpId: 'sub_corp_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      togetherBookRule: 'together_book_rule',
      trainBudget: 'train_budget',
      travelerList: 'traveler_list',
      travelerStandard: 'traveler_standard',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
      vehicleBudget: 'vehicle_budget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: 'number',
      budgetMerge: 'number',
      carRule: ApplyAddRequestCarRule,
      corpName: 'string',
      defaultStandard: ApplyAddRequestDefaultStandard,
      departId: 'string',
      departName: 'string',
      extendField: 'string',
      externalTravelerList: { 'type': 'array', 'itemType': ApplyAddRequestExternalTravelerList },
      externalTravelerStandard: ApplyAddRequestExternalTravelerStandard,
      flightBudget: 'number',
      hotelBudget: 'number',
      hotelShare: ApplyAddRequestHotelShare,
      internationalFlightCabins: 'string',
      intlFlightBudget: 'number',
      intlHotelBudget: 'number',
      itineraryList: { 'type': 'array', 'itemType': ApplyAddRequestItineraryList },
      itineraryRule: 'number',
      itinerarySetList: { 'type': 'array', 'itemType': ApplyAddRequestItinerarySetList },
      limitTraveler: 'number',
      mealBudget: 'number',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      status: 'number',
      subCorpId: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartDepartId: 'string',
      togetherBookRule: 'number',
      trainBudget: 'number',
      travelerList: { 'type': 'array', 'itemType': ApplyAddRequestTravelerList },
      travelerStandard: { 'type': 'array', 'itemType': ApplyAddRequestTravelerStandard },
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
      vehicleBudget: 'number',
    };
  }

  validate() {
    if(this.carRule && typeof (this.carRule as any).validate === 'function') {
      (this.carRule as any).validate();
    }
    if(this.defaultStandard && typeof (this.defaultStandard as any).validate === 'function') {
      (this.defaultStandard as any).validate();
    }
    if(Array.isArray(this.externalTravelerList)) {
      $dara.Model.validateArray(this.externalTravelerList);
    }
    if(this.externalTravelerStandard && typeof (this.externalTravelerStandard as any).validate === 'function') {
      (this.externalTravelerStandard as any).validate();
    }
    if(this.hotelShare && typeof (this.hotelShare as any).validate === 'function') {
      (this.hotelShare as any).validate();
    }
    if(Array.isArray(this.itineraryList)) {
      $dara.Model.validateArray(this.itineraryList);
    }
    if(Array.isArray(this.itinerarySetList)) {
      $dara.Model.validateArray(this.itinerarySetList);
    }
    if(Array.isArray(this.travelerList)) {
      $dara.Model.validateArray(this.travelerList);
    }
    if(Array.isArray(this.travelerStandard)) {
      $dara.Model.validateArray(this.travelerStandard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

