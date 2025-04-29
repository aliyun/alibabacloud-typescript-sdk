// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAddShrinkRequest extends $dara.Model {
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
  carRuleShrink?: string;
  corpName?: string;
  defaultStandardShrink?: string;
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
  externalTravelerListShrink?: string;
  externalTravelerStandardShrink?: string;
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
  hotelShareShrink?: string;
  internationalFlightCabins?: string;
  intlFlightBudget?: number;
  intlHotelBudget?: number;
  itineraryListShrink?: string;
  /**
   * @example
   * 0
   */
  itineraryRule?: number;
  itinerarySetListShrink?: string;
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
  travelerListShrink?: string;
  travelerStandardShrink?: string;
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
      carRuleShrink: 'car_rule',
      corpName: 'corp_name',
      defaultStandardShrink: 'default_standard',
      departId: 'depart_id',
      departName: 'depart_name',
      extendField: 'extend_field',
      externalTravelerListShrink: 'external_traveler_list',
      externalTravelerStandardShrink: 'external_traveler_standard',
      flightBudget: 'flight_budget',
      hotelBudget: 'hotel_budget',
      hotelShareShrink: 'hotel_share',
      internationalFlightCabins: 'international_flight_cabins',
      intlFlightBudget: 'intl_flight_budget',
      intlHotelBudget: 'intl_hotel_budget',
      itineraryListShrink: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetListShrink: 'itinerary_set_list',
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
      travelerListShrink: 'traveler_list',
      travelerStandardShrink: 'traveler_standard',
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
      carRuleShrink: 'string',
      corpName: 'string',
      defaultStandardShrink: 'string',
      departId: 'string',
      departName: 'string',
      extendField: 'string',
      externalTravelerListShrink: 'string',
      externalTravelerStandardShrink: 'string',
      flightBudget: 'number',
      hotelBudget: 'number',
      hotelShareShrink: 'string',
      internationalFlightCabins: 'string',
      intlFlightBudget: 'number',
      intlHotelBudget: 'number',
      itineraryListShrink: 'string',
      itineraryRule: 'number',
      itinerarySetListShrink: 'string',
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
      travelerListShrink: 'string',
      travelerStandardShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

