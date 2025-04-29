// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyQueryResponseBodyModuleApproverList } from "./ApplyQueryResponseBodyModuleApproverList";
import { ApplyQueryResponseBodyModuleCarRule } from "./ApplyQueryResponseBodyModuleCarRule";
import { ApplyQueryResponseBodyModuleExternalTravelerList } from "./ApplyQueryResponseBodyModuleExternalTravelerList";
import { ApplyQueryResponseBodyModuleHotelShare } from "./ApplyQueryResponseBodyModuleHotelShare";
import { ApplyQueryResponseBodyModuleItineraryList } from "./ApplyQueryResponseBodyModuleItineraryList";
import { ApplyQueryResponseBodyModuleItinerarySetList } from "./ApplyQueryResponseBodyModuleItinerarySetList";
import { ApplyQueryResponseBodyModuleTravelerList } from "./ApplyQueryResponseBodyModuleTravelerList";


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

