// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyQueryResponseBodyModuleApproverList extends $dara.Model {
  note?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  operateTime?: string;
  /**
   * @example
   * 1
   */
  order?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'note',
      operateTime: 'operate_time',
      order: 'order',
      status: 'status',
      statusDesc: 'status_desc',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      operateTime: 'string',
      order: 'number',
      status: 'number',
      statusDesc: 'string',
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

export class ApplyQueryResponseBodyModuleCarRule extends $dara.Model {
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

export class ApplyQueryResponseBodyModuleExternalTravelerListHotelCitys extends $dara.Model {
  /**
   * @example
   * 0
   */
  cityCode?: string;
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

export class ApplyQueryResponseBodyModuleExternalTravelerListHotelIntlCitys extends $dara.Model {
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

export class ApplyQueryResponseBodyModuleHotelShare extends $dara.Model {
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

export class ApplyQueryResponseBodyModuleItineraryListItineraryTravelStandard extends $dara.Model {
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

export class ApplyQueryResponseBodyModuleItineraryList extends $dara.Model {
  arrCity?: string;
  /**
   * @example
   * 330100
   */
  arrCityCode?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  attribute?: string;
  /**
   * @example
   * accac
   */
  costCenterName?: string;
  depCity?: string;
  /**
   * @example
   * 330100
   */
  depCityCode?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  depDate?: string;
  invoiceName?: string;
  itineraryId?: string;
  itineraryTravelStandard?: ApplyQueryResponseBodyModuleItineraryListItineraryTravelStandard;
  /**
   * @example
   * xm1
   */
  projectCode?: string;
  projectTitle?: string;
  thirdpartCostCenterId?: string;
  thirdpartInvoiceId?: string;
  thirdpartItineraryId?: string;
  /**
   * @example
   * 1
   */
  trafficType?: number;
  /**
   * @example
   * 1
   */
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      attribute: 'attribute',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      itineraryTravelStandard: 'itinerary_travel_standard',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartInvoiceId: 'thirdpart_invoice_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
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
      costCenterName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyQueryResponseBodyModuleItineraryListItineraryTravelStandard,
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartInvoiceId: 'string',
      thirdpartItineraryId: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  validate() {
    if(this.itineraryTravelStandard && typeof (this.itineraryTravelStandard as any).validate === 'function') {
      (this.itineraryTravelStandard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleItinerarySetListItineraryTravelStandard extends $dara.Model {
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

export class ApplyQueryResponseBodyModuleItinerarySetList extends $dara.Model {
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  attribute?: string;
  /**
   * @example
   * BJS，HGH
   */
  cityCodeSet?: string;
  citySet?: string;
  costCenterName?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  depDate?: string;
  invoiceName?: string;
  /**
   * @example
   * 12345
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyQueryResponseBodyModuleItinerarySetListItineraryTravelStandard;
  /**
   * @example
   * projecttow
   */
  projectCode?: string;
  projectTitle?: string;
  thirdpartCostCenterId?: string;
  thirdpartInvoiceId?: string;
  thirdpartItineraryId?: string;
  /**
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
      costCenterName: 'cost_center_name',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      itineraryTravelStandard: 'itinerary_travel_standard',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartInvoiceId: 'thirdpart_invoice_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      attribute: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterName: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyQueryResponseBodyModuleItinerarySetListItineraryTravelStandard,
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartInvoiceId: 'string',
      thirdpartItineraryId: 'string',
      trafficType: 'number',
    };
  }

  validate() {
    if(this.itineraryTravelStandard && typeof (this.itineraryTravelStandard as any).validate === 'function') {
      (this.itineraryTravelStandard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBodyModuleTravelerListCarCitySet extends $dara.Model {
  cityCode?: string;
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

export class ApplyQueryResponseBodyModuleTravelerListHotelCitys extends $dara.Model {
  /**
   * @example
   * 0
   */
  cityCode?: string;
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

export class ApplyQueryResponseBodyModuleTravelerListHotelIntlCitys extends $dara.Model {
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

export class ApplyQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 201710111505000464651
   */
  applyShowId?: string;
  approverList?: ApplyQueryResponseBodyModuleApproverList[];
  /**
   * @example
   * 100000
   */
  budget?: number;
  /**
   * @example
   * 1
   */
  budgetMerge?: number;
  carRule?: ApplyQueryResponseBodyModuleCarRule;
  /**
   * @example
   * corpid
   */
  corpId?: string;
  corpName?: string;
  /**
   * @example
   * dept1
   */
  departId?: string;
  /**
   * @example
   * adv
   */
  departName?: string;
  /**
   * @remarks
   * 补充描述，账单中将会体现此字段的值。可以用于企业的统计和对账
   * 
   * @example
   * {"cost_center":"成本中心"}
   */
  extendField?: string;
  externalTravelerList?: ApplyQueryResponseBodyModuleExternalTravelerList[];
  /**
   * @example
   * 10000
   */
  flightBudget?: number;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  gmtModified?: string;
  /**
   * @example
   * 100000
   */
  hotelBudget?: number;
  hotelShare?: ApplyQueryResponseBodyModuleHotelShare;
  /**
   * @example
   * 3298
   */
  id?: number;
  intlFlightBudget?: number;
  intlHotelBudget?: number;
  itineraryList?: ApplyQueryResponseBodyModuleItineraryList[];
  /**
   * @example
   * 0
   */
  itineraryRule?: number;
  itinerarySetList?: ApplyQueryResponseBodyModuleItinerarySetList[];
  /**
   * @example
   * 0
   */
  limitTraveler?: number;
  mealBudget?: number;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 1213
   */
  thirdpartBusinessId?: string;
  /**
   * @example
   * 1214254
   */
  thirdpartId?: string;
  /**
   * @example
   * 1
   */
  togetherBookRule?: number;
  /**
   * @example
   * 10000
   */
  trainBudget?: number;
  travelerList?: ApplyQueryResponseBodyModuleTravelerList[];
  tripCause?: string;
  /**
   * @example
   * 2
   */
  tripDay?: number;
  tripTitle?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  /**
   * @example
   * abd123
   */
  unionNo?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  /**
   * @example
   * 10000
   */
  vehicleBudget?: number;
  static names(): { [key: string]: string } {
    return {
      applyShowId: 'apply_show_id',
      approverList: 'approver_list',
      budget: 'budget',
      budgetMerge: 'budget_merge',
      carRule: 'car_rule',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      extendField: 'extend_field',
      externalTravelerList: 'external_traveler_list',
      flightBudget: 'flight_budget',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      hotelBudget: 'hotel_budget',
      hotelShare: 'hotel_share',
      id: 'id',
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
      statusDesc: 'status_desc',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartId: 'thirdpart_id',
      togetherBookRule: 'together_book_rule',
      trainBudget: 'train_budget',
      travelerList: 'traveler_list',
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
      applyShowId: 'string',
      approverList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleApproverList },
      budget: 'number',
      budgetMerge: 'number',
      carRule: ApplyQueryResponseBodyModuleCarRule,
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      extendField: 'string',
      externalTravelerList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleExternalTravelerList },
      flightBudget: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      hotelBudget: 'number',
      hotelShare: ApplyQueryResponseBodyModuleHotelShare,
      id: 'number',
      intlFlightBudget: 'number',
      intlHotelBudget: 'number',
      itineraryList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleItineraryList },
      itineraryRule: 'number',
      itinerarySetList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleItinerarySetList },
      limitTraveler: 'number',
      mealBudget: 'number',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      status: 'number',
      statusDesc: 'string',
      thirdpartBusinessId: 'string',
      thirdpartId: 'string',
      togetherBookRule: 'number',
      trainBudget: 'number',
      travelerList: { 'type': 'array', 'itemType': ApplyQueryResponseBodyModuleTravelerList },
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
    if(Array.isArray(this.approverList)) {
      $dara.Model.validateArray(this.approverList);
    }
    if(this.carRule && typeof (this.carRule as any).validate === 'function') {
      (this.carRule as any).validate();
    }
    if(Array.isArray(this.externalTravelerList)) {
      $dara.Model.validateArray(this.externalTravelerList);
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: ApplyQueryResponseBodyModule;
  /**
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: ApplyQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

