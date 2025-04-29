// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyAddRequestCarRule } from "./ApplyAddRequestCarRule";
import { ApplyAddRequestDefaultStandard } from "./ApplyAddRequestDefaultStandard";
import { ApplyAddRequestExternalTravelerList } from "./ApplyAddRequestExternalTravelerList";
import { ApplyAddRequestExternalTravelerStandard } from "./ApplyAddRequestExternalTravelerStandard";
import { ApplyAddRequestHotelShare } from "./ApplyAddRequestHotelShare";
import { ApplyAddRequestItineraryList } from "./ApplyAddRequestItineraryList";
import { ApplyAddRequestItinerarySetList } from "./ApplyAddRequestItinerarySetList";
import { ApplyAddRequestTravelerList } from "./ApplyAddRequestTravelerList";
import { ApplyAddRequestTravelerStandard } from "./ApplyAddRequestTravelerStandard";


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
  corpName?: string;
  defaultStandard?: ApplyAddRequestDefaultStandard;
  /**
   * @example
   * departId01
   */
  departId?: string;
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
  internationalFlightCabins?: string;
  intlFlightBudget?: number;
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
  mealBudget?: number;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 0
   */
  status?: number;
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

