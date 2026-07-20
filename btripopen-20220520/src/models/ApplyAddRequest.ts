// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAddRequestCarRule extends $dara.Model {
  /**
   * @example
   * 1234567
   */
  scenarioTemplateId?: string;
  /**
   * @example
   * 测试场景模板
   */
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
  /**
   * @example
   * 360100
   */
  cityCode?: string;
  /**
   * @example
   * 杭州
   */
  cityName?: string;
  /**
   * @example
   * 10000
   */
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
  /**
   * @example
   * 210200
   */
  cityCode?: string;
  /**
   * @example
   * 香港
   */
  cityName?: string;
  /**
   * @example
   * 100000
   */
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
  /**
   * @example
   * 3
   */
  businessDiscount?: number;
  /**
   * @example
   * 3
   */
  economyDiscount?: number;
  /**
   * @example
   * 3
   */
  firstDiscount?: number;
  /**
   * @example
   * Y
   */
  flightCabins?: string;
  /**
   * @example
   * 100132
   */
  flightIntlRuleCode?: number;
  /**
   * @example
   * 100132
   */
  flightRuleCode?: number;
  hotelCitys?: ApplyAddRequestDefaultStandardHotelCitys[];
  hotelIntlCitys?: ApplyAddRequestDefaultStandardHotelIntlCitys[];
  /**
   * @example
   * 100132
   */
  hotelIntlRuleCode?: number;
  /**
   * @example
   * 100132
   */
  hotelRuleCode?: number;
  /**
   * @example
   * F
   */
  internationalFlightCabins?: string;
  /**
   * @example
   * 9
   */
  premiumEconomyDiscount?: number;
  /**
   * @example
   * 1
   */
  reserveType?: number;
  /**
   * @example
   * 100132
   */
  trainRuleCode?: number;
  /**
   * @example
   * 1000
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
  /**
   * @example
   * “{"name":"张三"}”
   */
  attribute?: string;
  /**
   * @example
   * 414522
   */
  costCenterId?: number;
  /**
   * @example
   * 371164
   */
  externalUserId?: string;
  /**
   * @example
   * 4451
   */
  invoiceId?: number;
  /**
   * @example
   * 141125
   */
  paymentDepartmentId?: string;
  /**
   * @example
   * 产品部
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  /**
   * @example
   * “成本项目”
   */
  projectTitle?: string;
  /**
   * @example
   * 91130124566177980M
   */
  thirdPartInvoiceId?: string;
  /**
   * @example
   * HD155
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * DHDI2208051REIO6BK
   */
  thirdpartDepartId?: string;
  /**
   * @example
   * 李四
   */
  userName?: string;
  /**
   * @example
   * SUN/MENGXUAN
   */
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
  /**
   * @example
   * 0
   */
  cityCode?: string;
  /**
   * @example
   * 北京
   */
  cityName?: string;
  /**
   * @example
   * 1009
   */
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
  /**
   * @example
   * 0
   */
  cityCode?: string;
  /**
   * @example
   * 北京
   */
  cityName?: string;
  /**
   * @example
   * 1000
   */
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
  /**
   * @example
   * 100132
   */
  flightIntlRuleCode?: number;
  /**
   * @example
   * 100132
   */
  flightRuleCode?: number;
  hotelCitys?: ApplyAddRequestExternalTravelerStandardHotelCitys[];
  hotelIntlCitys?: ApplyAddRequestExternalTravelerStandardHotelIntlCitys[];
  /**
   * @example
   * 100132
   */
  hotelIntlRuleCode?: number;
  /**
   * @example
   * 100132
   */
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
  /**
   * @example
   * 100132
   */
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

export class ApplyAddRequestHotelShare extends $dara.Model {
  /**
   * @example
   * 70
   */
  param?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 2
   */
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
   * 
   * @example
   * 杭州
   */
  arrCity?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-01-02 00:00:00
   */
  arrDate?: string;
  /**
   * @example
   * "{"name":"张三"}"
   */
  attribute?: string;
  /**
   * @example
   * 12138
   */
  costCenterId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 北京
   */
  depCity?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-01-01 00:00:00
   */
  depDate?: string;
  /**
   * @example
   * 34711
   */
  invoiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyAddRequestItineraryListItineraryTravelStandard;
  /**
   * @example
   * true
   */
  needHotel?: boolean;
  /**
   * @example
   * true
   */
  needTraffic?: boolean;
  /**
   * @example
   * projecttow
   */
  projectCode?: string;
  /**
   * @example
   * 项目1
   */
  projectTitle?: string;
  provinceTravelCityAdcodes?: string[];
  /**
   * @example
   * thirdpart34711
   */
  thirdPartInvoiceId?: string;
  /**
   * @example
   * thridpart12138
   */
  thirdpartCostCenterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  trafficType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
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
  /**
   * @example
   * 2
   */
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
  /**
   * @example
   * "{"name":"张三"}"
   */
  attribute?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS,HGH
   */
  cityCodeSet?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 北京，杭州
   */
  citySet?: string;
  /**
   * @example
   * 12345
   */
  costCenterId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-01-01 00:00:00
   */
  depDate?: string;
  /**
   * @example
   * 12345
   */
  invoiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyAddRequestItinerarySetListItineraryTravelStandard;
  /**
   * @example
   * projecttow
   */
  projectCode?: string;
  /**
   * @example
   * 项目1
   */
  projectTitle?: string;
  provinceTravelCityAdcodes?: string[];
  /**
   * @example
   * thridpart12138
   */
  thirdPartInvoiceId?: string;
  /**
   * @example
   * thridpart12138
   */
  thirdpartCostCenterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
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
  /**
   * @example
   * “{"name":"张三"}”
   */
  attribute?: string;
  /**
   * @example
   * 112711
   */
  costCenterId?: number;
  /**
   * @example
   * 11251
   */
  invoiceId?: number;
  /**
   * @example
   * 1142
   */
  paymentDepartmentId?: string;
  /**
   * @example
   * 产品部
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  /**
   * @example
   * "成本项目"
   */
  projectTitle?: string;
  /**
   * @example
   * 517492
   */
  thirdPartInvoiceId?: string;
  /**
   * @example
   * 441154
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * 101128
   */
  thirdpartDepartId?: string;
  /**
   * @example
   * wu51531
   */
  userId?: string;
  /**
   * @example
   * 王武
   */
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
   * 
   * @example
   * 110100，330100
   */
  cityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 北京，杭州
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
  /**
   * @example
   * 0
   */
  cityCode?: string;
  /**
   * @example
   * 北京
   */
  cityName?: string;
  /**
   * @example
   * 1009
   */
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
  /**
   * @example
   * 0
   */
  cityCode?: string;
  /**
   * @example
   * 北京
   */
  cityName?: string;
  /**
   * @example
   * 1009
   */
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
  /**
   * @example
   * 1
   */
  businessDiscount?: number;
  carCitySet?: ApplyAddRequestTravelerStandardCarCitySet[];
  carStandard?: ApplyAddRequestTravelerStandardCarStandard;
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
  /**
   * @example
   * 100132
   */
  flightIntlRuleCode?: number;
  /**
   * @example
   * 100132
   */
  flightRuleCode?: number;
  hotelCitys?: ApplyAddRequestTravelerStandardHotelCitys[];
  hotelIntlCitys?: ApplyAddRequestTravelerStandardHotelIntlCitys[];
  /**
   * @example
   * 100132
   */
  hotelIntlRuleCode?: number;
  /**
   * @example
   * 100132
   */
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
  /**
   * @example
   * 100132
   */
  trainRuleCode?: number;
  /**
   * @example
   * 1
   */
  trainSeats?: string;
  /**
   * @example
   * wfffeng
   */
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
  /**
   * @example
   * 4000
   */
  budget?: number;
  /**
   * @example
   * 1
   */
  budgetMerge?: number;
  carRule?: ApplyAddRequestCarRule;
  /**
   * @example
   * 阿里巴巴
   */
  corpName?: string;
  defaultStandard?: ApplyAddRequestDefaultStandard;
  /**
   * @example
   * departId01
   */
  departId?: string;
  /**
   * @example
   * 采购部
   */
  departName?: string;
  /**
   * @remarks
   * 可将补充描述传入此字段，账单中将会体现此字段的值。可以用于企业的统计和对账
   * 
   * @example
   * {"cost_center":"成本中心"}
   */
  extendField?: string;
  externalTravelerList?: ApplyAddRequestExternalTravelerList[];
  externalTravelerStandard?: ApplyAddRequestExternalTravelerStandard;
  /**
   * @example
   * 1000
   */
  flightBudget?: number;
  /**
   * @example
   * 1000
   */
  hotelBudget?: number;
  hotelShare?: ApplyAddRequestHotelShare;
  /**
   * @example
   * Y
   */
  internationalFlightCabins?: string;
  /**
   * @example
   * 1000
   */
  intlFlightBudget?: number;
  /**
   * @example
   * 1000
   */
  intlHotelBudget?: number;
  itineraryList?: ApplyAddRequestItineraryList[];
  /**
   * @example
   * 0
   */
  itineraryRule?: number;
  itinerarySetList?: ApplyAddRequestItinerarySetList[];
  /**
   * @example
   * 1
   */
  limitTraveler?: number;
  /**
   * @example
   * 1000
   */
  mealBudget?: number;
  /**
   * @example
   * 41155
   */
  paymentDepartmentId?: string;
  /**
   * @example
   * 产品部
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * btrip123
   */
  subCorpId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * 00714131
   */
  thirdpartBusinessId?: string;
  /**
   * @example
   * 三方部门id
   */
  thirdpartDepartId?: string;
  /**
   * @example
   * 1
   */
  togetherBookRule?: number;
  /**
   * @example
   * 1000
   */
  trainBudget?: number;
  travelerList?: ApplyAddRequestTravelerList[];
  travelerStandard?: ApplyAddRequestTravelerStandard[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 客服培训
   */
  tripCause?: string;
  /**
   * @example
   * 1
   */
  tripDay?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 客服培训
   */
  tripTitle?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * union001
   */
  unionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thridpart12138
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  /**
   * @example
   * 1000
   */
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

