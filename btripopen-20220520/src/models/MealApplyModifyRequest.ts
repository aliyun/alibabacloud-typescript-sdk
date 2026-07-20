// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyModifyRequestApplyUser extends $dara.Model {
  /**
   * @example
   * userId1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealApplyModifyRequestItineraryListCities extends $dara.Model {
  /**
   * @example
   * 330702
   */
  cityCode?: string;
  /**
   * @example
   * 杭州
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

export class MealApplyModifyRequestItineraryList extends $dara.Model {
  cities?: MealApplyModifyRequestItineraryListCities[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-02-05 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-02-05 00:00:00
   */
  startDate?: string;
  /**
   * @example
   * 2134
   */
  thirdpartItineraryId?: string;
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
      endDate: 'end_date',
      startDate: 'start_date',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': MealApplyModifyRequestItineraryListCities },
      endDate: 'string',
      startDate: 'string',
      thirdpartItineraryId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cities)) {
      $dara.Model.validateArray(this.cities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealApplyModifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyUser?: MealApplyModifyRequestApplyUser;
  /**
   * @example
   * 23
   */
  costCenterId?: number;
  /**
   * @example
   * {"extend_key":"extend_value"}
   */
  extendField?: string;
  /**
   * @example
   * 123
   */
  invoiceId?: number;
  itineraryList?: MealApplyModifyRequestItineraryList[];
  /**
   * @example
   * 1
   */
  mealAmount?: number;
  /**
   * @example
   * 测试
   */
  mealCause?: string;
  /**
   * @example
   * project123
   */
  projectCode?: string;
  /**
   * @example
   * 项目1
   */
  projectTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1234
   */
  thirdPartApplyId?: string;
  /**
   * @example
   * 1200F00010
   */
  thirdPartCostCenterId?: string;
  /**
   * @example
   * GA15131
   */
  thirdPartInvoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      applyUser: 'apply_user',
      costCenterId: 'cost_center_id',
      extendField: 'extend_field',
      invoiceId: 'invoice_id',
      itineraryList: 'itinerary_list',
      mealAmount: 'meal_amount',
      mealCause: 'meal_cause',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      status: 'status',
      thirdPartApplyId: 'third_part_apply_id',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUser: MealApplyModifyRequestApplyUser,
      costCenterId: 'number',
      extendField: 'string',
      invoiceId: 'number',
      itineraryList: { 'type': 'array', 'itemType': MealApplyModifyRequestItineraryList },
      mealAmount: 'number',
      mealCause: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      status: 'number',
      thirdPartApplyId: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartInvoiceId: 'string',
    };
  }

  validate() {
    if(this.applyUser && typeof (this.applyUser as any).validate === 'function') {
      (this.applyUser as any).validate();
    }
    if(Array.isArray(this.itineraryList)) {
      $dara.Model.validateArray(this.itineraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

